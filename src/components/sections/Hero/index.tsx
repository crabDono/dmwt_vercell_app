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
          Entfliehe der Schwerkraft. <br />
          Dein Start in die <br />
          finanzielle Unabhängigkeit
        </h1>
        <p className={styles.subtitle}>
          Das Finanzuniversum ist riesig, aber nicht kompliziert. <br /> Wir
          geben dir Navigation, Ausrüstung und den Plan <br /> für deine Reise
          zur Unabhängigkeit.
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
