"use client";

import Button from "../../features/Button";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
        </p>

        <div className="mt-6">
          <Button onClick={() => console.log("Mehr erfahren button gedrückt")}>
            Mehr erfahren
          </Button>
        </div>
      </div>

      <Image
        src={"/btcmann.png"}
        alt="Mann mit BTC in der Hand"
        width={240}
        height={240}
        className={styles.cornerImage}
      />
    </section>
  );
};

export default Hero;
