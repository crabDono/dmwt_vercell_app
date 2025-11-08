"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/zeitreise", label: "Zeitreise" },
  ];

  const rightItems = [
    { href: "/login", label: "Einloggen" },
    { href: "/free_test", label: "Kostenlos testen" },
  ];

  // Alle Items für das mobile Menü zusammenführen
  const allMobileItems = [...navItems, ...rightItems];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Schließt das mobile Menü, wenn sich die Route ändert
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo_tripleM.svg" // Pfad anpassen, falls im public-Ordner
              alt="Logo"
              width={75}
              height={43}
              className="rounded-full"
            />
          </Link>

          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.navLinkActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.rightList}>
          {rightItems.map((item) => {
            const isCTA = item.label === "Kostenlos testen";
            const isActive = pathname === item.href;
            if (isCTA) {
              return (
                <li key={item.href}>
                  <Link href={item.href} className={styles.cta}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.rightLink} ${
                    isActive ? styles.rightLinkActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Burger Menu Button WIRD HIER ENTFERNT */}
      </nav>

      {/* Burger Menu Button HIER NEU EINFÜGEN */}
      <button
        className={`${styles.burgerMenu} ${
          isMobileMenuOpen ? styles.burgerOpen : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Menü öffnen/schließen"
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        {allMobileItems.map((item) => (
          <li key={item.href} className={styles.mobileNavItem}>
            <Link href={item.href} className={styles.mobileNavLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
