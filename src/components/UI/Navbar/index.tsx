"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import styles from "./Navbar.module.css";

// Plugin registrieren (passiert nur einmal)
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.87, 0, 0.13, 1");

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref für den gesamten Container (Scope)
  const container = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Die Timeline
  const tl = useRef<gsap.core.Timeline | null>(null);

  const mainLinks = [
    { href: "/", label: "HOME" },
    { href: "/quiz", label: "QUIZ" },
    { href: "/zeitreise", label: "ZEITREISE" },
  ];

  const secondaryLinks = [
    { href: "/login", label: "Einloggen" },
    { href: "/free_test", label: "Kostenlos testen" },
  ];

  useGSAP(
    () => {
      // 1. Initialer Zustand setzen (Verstecken)
      // Wir setzen visibility auf visible, aber clip-path auf "geschlossen"
      gsap.set(overlayRef.current, {
        visibility: "visible",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });

      // Texte nach unten schieben (damit sie später hochkommen können)
      gsap.set(".reveal_item", { y: "100%" });
      gsap.set(".media_img", { opacity: 0 });

      // 2. Timeline erstellen
      tl.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Öffnet nach unten
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
        ) // Startet gleichzeitig mit Overlay
        .to(
          ".reveal_item",
          {
            y: "0%", // Text kommt hoch
            stagger: 0.1,
            duration: 1,
            ease: "hop",
          },
          "-=0.5"
        ); // Startet etwas früher
    },
    { scope: container }
  ); // WICHTIG: Scope auf container setzen

  const toggleMenu = () => {
    // Wenn die Timeline existiert...
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.reverse();
      } else {
        tl.current.play();
      }
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Schließt Menü bei Navigation
  useEffect(() => {
    if (isMenuOpen && tl.current) {
      tl.current.reverse();
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <div className={styles.navContainer} ref={container}>
      {/* 1. Navbar Bar */}
      <nav className={styles.menuBar}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/triple.svg" alt="Logo" width={50} height={30} />
          </Link>
        </div>

        <button className={styles.toggleBtn} onClick={toggleMenu}>
          <div className={styles.toggleLabel}>
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </div>
          {/* Wir nutzen Klassen für den CSS-Teil der Burger Animation */}
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

      {/* 2. Overlay */}
      <div className={styles.menuOverlay} ref={overlayRef}>
        <div className={styles.overlayContent}>
          <div className={styles.mediaWrapper}>
            {/* Füge hier eine Klasse 'media_img' für GSAP hinzu */}
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
              {/* Hauptlinks */}
              <div className={styles.menuCol}>
                {mainLinks.map((link) => (
                  <div key={link.href} className={styles.revealTextWrapper}>
                    {/* Klasse 'reveal_item' für GSAP */}
                    <span className={`${styles.revealTextInner} reveal_item`}>
                      <Link href={link.href} className={styles.menuLink}>
                        {link.label}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>

              {/* Sekundärlinks */}
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

            {/* Footer */}
            <div className={styles.menuFooter}>
              <div className={styles.menuCol}>
                <div className={styles.revealTextWrapper}>
                  <span className={`${styles.revealTextInner} reveal_item`}>
                    <p>Socials</p>
                  </span>
                </div>
              </div>
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
