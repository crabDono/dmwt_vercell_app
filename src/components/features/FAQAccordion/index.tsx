"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQAccordionItemProps = {
  id: string;
  title?: React.ReactNode;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

type FAQAccordionProps = {
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

export function FAQAccordion({
  multiple = false,
  children,
  className,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initial: Record<string, boolean> = {};
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement<FAQAccordionItemProps>(child)) return;
      const props = child.props as FAQAccordionItemProps;
      if (props?.id && props.defaultOpen) initial[props.id] = true;
    });
    setOpenItems(initial);
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
      className={cn("", className)}
      role="presentation"
      data-component="faq-accordion"
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<FAQAccordionItemProps>(child)) return null;
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

export function FAQAccordionItem({
  id,
  title,
  children,
  defaultOpen,
  className,
  isOpen: controlledOpen,
  onToggle,
}: FAQAccordionItemProps) {
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
      className={cn("border-b border-[#d1d1d1]", className)}
      data-component="faq-accordion-item"
    >
      <h3 className="flex">
        <button
          id={buttonId}
          aria-controls={regionId}
          aria-expanded={isOpen}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex w-full items-center justify-between gap-4 py-6 text-left outline-none",
            "disabled:opacity-50",
          )}
          type="button"
        >
          <span className="flex-1 text-base font-medium text-[#1a1a2e]">
            {title}
          </span>
          <Plus
            className={cn(
              "h-6 w-6 text-[#1a1a2e] transition-transform duration-300 ease-in-out flex-shrink-0",
              isOpen ? "rotate-45" : "rotate-0",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>
      </h3>

      <div
        id={regionId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0. 87,0,0.13,1)] max-h-0"
      >
        <div className="pb-6 text-base text-[#4a4a4a] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
