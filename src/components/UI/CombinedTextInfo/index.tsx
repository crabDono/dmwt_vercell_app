import React from "react";
import { cn } from "@/src/lib/utils";
import InformationCard from "../../features/InformationCard";
import TextComponent from "../../features/TextComponent";

type Props = {
  /**
   * Text content or a custom React node. If string -> wrapped with TextComponent.
   */
  text?: React.ReactNode | string;
  /**
   * Card content as React node or string. If string -> wrapped as InformationCard.description
   */
  card?: React.ReactNode | string;
  /**
   * Position des Textes auf großen Bildschirmen:
   * - "left": Text links, Card rechts
   * - "right": Card links, Text rechts
   */
  textPosition?: "left" | "right";
  className?: string;
  gapClass?: string;
};

export const CombinedTextInformationComponent: React.FC<Props> = ({
  text,
  card,
  textPosition = "left",
  className,
  gapClass = "gap-6",
}) => {
  const textIsLeft = textPosition === "left";

  const textNode =
    typeof text === "string" ? (
      <TextComponent>{text}</TextComponent>
    ) : (
      text ?? null
    );

  const cardNode =
    typeof card === "string" ? (
      <InformationCard description={card} />
    ) : (
      (card as React.ReactNode) ?? null
    );

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-stretch",
        gapClass,
        className
      )}
    >
      <div
        className={cn(
          "md:w-1/2",
          textIsLeft ? "order-1 md:order-1" : "order-2 md:order-2"
        )}
      >
        {textIsLeft ? textNode : cardNode}
      </div>

      <div
        className={cn(
          "md:w-1/2",
          textIsLeft ? "order-2 md:order-2" : "order-1 md:order-1"
        )}
      >
        {textIsLeft ? cardNode : textNode}
      </div>
    </div>
  );
};

export default CombinedTextInformationComponent;
