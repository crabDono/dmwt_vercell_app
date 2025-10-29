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
          Warte nicht auf den richtigen Moment – investiere ihn!
        </h1>
        <p className={styles.subtitle}>
          Wir nehmen deine Angst vor dem Investieren!
        </p>

        <div className="mt-6">
          <ButtonComponent
            onClick={() => console.log("Mehr erfahren button gedrückt")}
          >
            Mehr erfahren
          </ButtonComponent>
        </div>
      </div>

      <Image
        src={"/btcmann.png"}
        alt="Mann mit BTC in der Hand"
        width={920}
        height={920}
        className={styles.cornerImage}
      />
    </section>
  );
};

export default Hero;
