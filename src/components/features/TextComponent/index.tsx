import React from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const TextComponent: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("prose max-w-none text-base", className)}>
      {typeof children === "string" ? <p>{children}</p> : children}
    </div>
  );
};

export default TextComponent;
