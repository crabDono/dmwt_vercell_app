"use client";

import Button from "../../features/Button";
import ButtonComponent from "../../features/InteractiveButton";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Deine digitale Zukunft beginnt jetzt: Finanzwissen für die Krypto-Ära.
        </h1>
        <p className={styles.subtitle}>
          Tauche ein in die Welt der dezentralen Finanzen. Lerne, wie du sicher
          handelst, Staking nutzt und das Potenzial der Blockchain für dich
          erschließt!
        </p>

        <div className="mt-6">
          <ButtonComponent
            onClick={() => {
              const section = document.getElementById("infographic");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Mehr erfahren
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
