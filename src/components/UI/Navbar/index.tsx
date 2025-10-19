"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
  ]

  return (
    <nav className= "flex items-center justify-between px-6 py-3 bg-gray-100 shadow-sm">
      <div className="text-lg font-semibold"> </div>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )

}