"use client"

import React from "react";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Finanzbildung</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}