"use client";

import ButtonComponent from "../../features/InteractiveButton";
import styles from "./Hero.module.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          DEINE DIGITALE ZUKUNFT <br /> BEGINNT JETZT: <br /> FINANZWISSEN{" "}
          <br /> FÜR DIE KRYPTO-ÄRA.
        </h1>
        <p className={styles.subtitle}>
          Tauche ein in die Welt der dezentralen Finanzen. <br /> Lerne, wie du
          sicher handelst, Staking nutzt und das Potenzial <br /> der Blockchain
          für dich erschließt!
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
