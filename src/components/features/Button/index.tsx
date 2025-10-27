"use client";

import React, { use } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-2 rounded-md font-medium transition";
  const variants: Record<string, string> = {
    primary: "bg-black text-white hover:bg-gray-800",
    ghost: "bg-transparent text-black hover:bg-gray-100",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked (inside Button component)");
    // @ts-ignore
    if (props.onClick) props.onClick(e); // leitet weiter an den Handler aus Hero
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
// ...existing code...
