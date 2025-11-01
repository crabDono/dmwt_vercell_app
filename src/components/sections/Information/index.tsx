"use client";

import InformationCard from "../../features/InformationCard";
import TextComponent from "../../features/TextComponent";
import CombinedTextInformationComponent from "../../UI/CombinedTextInfo";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <div className={styles.information}>
      {/* TEXT CARD */}
      <CombinedTextInformationComponent
        text="Das ist ein kurzer Text, der links steht."
        card={
          <InformationCard
            title="Info-Card"
            description="Hier stehen relevante Informationen."
          />
        }
        textPosition="left"
      />

      {/* CARD TEXT */}
      <CombinedTextInformationComponent
        text="Das ist ein kurzer Text, der rechts steht."
        card={
          <InformationCard
            title="Andere Card"
            description="Noch mehr Informationen hier."
          />
        }
        textPosition="right"
      />
    </div>
  );
};

export default Information;
