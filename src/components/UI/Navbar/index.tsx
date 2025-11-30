"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import styles from "./Navbar.module.css";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.87, 0, 0.13, 1");

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NEU: State für das Theme ('dark' = dunkler Hintergrund/weißer Text, 'light' = heller Hintergrund/dunkler Text)
  const [navTheme, setNavTheme] = useState("dark");

  const container = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/zeitreise", label: "Zeitreise" },
  ];

  const secondaryLinks = [
    { href: "/login", label: "Einloggen" },
    { href: "/free_test", label: "Kostenlos testen" },
  ];

  // --- NEU: Intersection Observer Logik ---
  useEffect(() => {
    const handleScroll = () => {
      // Wir suchen alle Sektionen, die ein 'data-theme' Attribut haben
      const sections = document.querySelectorAll("[data-theme]");

      let foundTheme = "dark"; // Standard-Fallback

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Wir prüfen: Ist der obere Teil der Sektion im Bereich der Navbar?
        // (0 bis 100px vom oberen Bildschirmrand)
        if (rect.top <= 80 && rect.bottom >= 80) {
          const theme = section.getAttribute("data-theme");
          if (theme) foundTheme = theme;
        }
      });

      setNavTheme(foundTheme);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Einmal beim Laden ausführen

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Auch bei Seitenwechsel neu prüfen
  // -----------------------------------------

  useGSAP(
    () => {
      gsap.set(overlayRef.current, {
        visibility: "visible",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.set(".reveal_item", { y: "100%" });
      gsap.set(".media_img", { opacity: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "hop",
        })
        .to(
          ".media_img",
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
          },
          "<"
        )
        .to(
          ".reveal_item",
          {
            y: "0%",
            stagger: 0.1,
            duration: 1,
            ease: "hop",
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  const toggleMenu = () => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.reverse();
      } else {
        tl.current.play();
      }
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    if (isMenuOpen && tl.current) {
      tl.current.reverse();
      setIsMenuOpen(false);
    }
  }, [pathname]);

  const effectiveTheme = isMenuOpen ? "dark" : navTheme;

  const themeClass =
    effectiveTheme === "light" ? styles.navThemeLight : styles.navThemeDark;

  return (
    <div className={styles.navContainer} ref={container}>
      {/* Nutze themeClass (basiert jetzt auf effectiveTheme) */}
      <nav className={`${styles.menuBar} ${themeClass}`}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/triple.svg"
              alt="Logo"
              width={50}
              height={30}
              // Nutze auch hier effectiveTheme!
              className={effectiveTheme === "light" ? styles.invertLogo : ""}
            />
          </Link>
        </div>

        <button className={styles.toggleBtn} onClick={toggleMenu}>
          <div className={styles.toggleLabel}>
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </div>
          <div
            className={`${styles.hamburgerIcon} ${
              isMenuOpen ? styles.hamburgerActive : ""
            }`}
          >
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      <div className={styles.menuOverlay} ref={overlayRef}>
        {/* ... Rest bleibt gleich ... */}
        <div className={styles.overlayContent}>
          <div className={styles.mediaWrapper}>
            <div
              className="media_img"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src="/astronaut_1.png"
                alt="Visual"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.menuMain}>
              <div className={styles.menuCol}>
                {mainLinks.map((link) => (
                  <div key={link.href} className={styles.revealTextWrapper}>
                    <span className={`${styles.revealTextInner} reveal_item`}>
                      <Link href={link.href} className={styles.menuLink}>
                        {link.label}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.menuCol}>
                {secondaryLinks.map((link) => (
                  <div key={link.href} className={styles.revealTextWrapper}>
                    <span className={`${styles.revealTextInner} reveal_item`}>
                      <Link href={link.href} className={styles.menuTag}>
                        {link.label}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.menuFooter}>
              {/* Footer content... */}
              <div className={styles.menuCol}>
                <div className={styles.revealTextWrapper}>
                  <span className={`${styles.revealTextInner} reveal_item`}>
                    <p>Kontakt</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
