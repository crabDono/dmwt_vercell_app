"use client";

import Button from "../../features/Button";
import ButtonComponent from "../../features/InteractiveButton";
import styles from "./Hero.module.css";
import Image from "next/image";
import Navbar from "../../UI/Navbar";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Deine digitale <br /> Zukunft beginnt jetzt:
          <br /> Finanzwissen für die <br />
          Krypto-Ära.
        </h1>
        <p className={styles.subtitle}>
          Tauche ein in die Welt der dezentralen Finanzen. Lerne, wie du sicher
          handelst, Staking nutzt und das Potenzial der Blockchain für dich
          erschließt!
        </p>

        <div className="mt-6 flex justify-center">
          <ButtonComponent
            onClick={() => {
              router.push("/quiz");
            }}
          >
            Starte Quiz!
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default Hero;
