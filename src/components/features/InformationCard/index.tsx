import React from "react";
import { cn } from "@/src/lib/utils";

type Props = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export const InformationCardComponent: React.FC<Props> = ({
  title,
  description,
  footer,
  className,
}) => {
  return (
    <article
      className={cn(
        "rounded-lg border bg-white/50 p-6 shadow-sm",
        "flex flex-col gap-4",
        className
      )}
      aria-label={title ?? "Information card"}
    >
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {footer && <div className="mt-auto">{footer}</div>}
    </article>
  );
};

export default InformationCardComponent;
