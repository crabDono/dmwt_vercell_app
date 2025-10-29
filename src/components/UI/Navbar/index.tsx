"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/zeitreise", label: "Zeitreise" },
  ];

  const rightItems = [
    { href: "/login", label: "Einloggen" },
    { href: "/free_test", label: "Kostenlos testen" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[60px] pl-[176px] bg-white/95 backdrop-blur-sm shadow-md">
      <div className="flex items-center gap-[27px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="logo_tripleM.svg"
            alt="Logo"
            width={75}
            height={43}
            className="rounded-full"
          />
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-black-600 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex gap-6 pr-[176px]">
        {rightItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors px-4 py-2 ${
                item.label === "Kostenlos testen"
                  ? "bg-black text-white rounded-md hover:bg-gray-800"
                  : pathname === item.href
                  ? "text-black font-bold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
