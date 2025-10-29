import React, { forwardRef } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  text?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = forwardRef<HTMLButtonElement, Props>(
  ({ text = "Mehr erfahren", className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 scale-100 rounded-lg bg-primary transition-all duration-300 group-hover:scale-[100.8]" />
          <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {text}
          </span>
        </div>

        <div className="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span className="whitespace-nowrap">{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </button>
    );
  }
);

ButtonComponent.displayName = "ButtonComponent";

export default ButtonComponent;
