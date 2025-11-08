"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItemProps = {
  id: string;
  title?: React.ReactNode;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;

  // injected optional props (für cloneElement)
  isOpen?: boolean;
  onToggle?: () => void;
};

type AccordionProps = {
  multiple?: boolean;
  children: React.ReactNode;
  className?: string;
};

function usePrevious<T>(value: T) {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export function Accordion({
  multiple = false,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initial: Record<string, boolean> = {};
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement<AccordionItemProps>(child)) return;
      const props = child.props as AccordionItemProps;
      if (props?.id && props.defaultOpen) initial[props.id] = true;
    });
    setOpenItems(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const isOpen = !!prev[id];
      if (multiple) {
        return { ...prev, [id]: !isOpen };
      } else {
        return isOpen ? { ...prev, [id]: false } : { [id]: true };
      }
    });
  };

  return (
    <div
      className={cn("space-y-0", className)}
      role="presentation"
      data-component="accordion"
    >
      {React.Children.map(children, (child) => {
        // Typsichere Prüfung, damit cloneElement die zusätzlichen Props akzeptiert
        if (!React.isValidElement<AccordionItemProps>(child)) return null;
        const id = child.props.id;
        if (!id) return null;
        const isOpen = !!openItems[id];
        return React.cloneElement(child, {
          isOpen,
          onToggle: () => toggle(id),
        });
      })}
    </div>
  );
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen,
  className,
  isOpen: controlledOpen,
  onToggle,
}: AccordionItemProps) {
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(!!defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : isOpenLocal;
  const prevIsOpen = usePrevious(isOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (isOpen) {
      const scroll = el.scrollHeight;
      el.style.maxHeight = `${scroll}px`;
    } else {
      el.style.maxHeight = `0px`;
    }
  }, [isOpen, prevIsOpen]);

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setIsOpenLocal((v) => !v);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleToggle();
    }
  };

  const buttonId = `${id}-button`;
  const regionId = `${id}-region`;

  return (
    <div
      className={cn("border-b last:border-b-0", className)}
      data-component="accordion-item"
    >
      <h3 className="flex">
        <button
          id={buttonId}
          aria-controls={regionId}
          aria-expanded={isOpen}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex w-full items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:opacity-50"
          )}
          type="button"
        >
          <span className="flex-1">{title}</span>
          <ChevronDownIcon
            className={cn(
              "text-muted-foreground transition-transform duration-200 transform",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            aria-hidden
          />
        </button>
      </h3>

      <div
        id={regionId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] max-h-0 text-sm"
      >
        <div className="pt-0 pb-4">{children}</div>
      </div>
    </div>
  );
}
