"use client";

import styles from "./Infographic.module.css";

const Infographic = () => {
  return (
    <section className={styles.infografic}>
      <div className={styles.container}>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          <br /> sed diam nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <p className={styles.subsubtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <div className={styles.grid}></div>
      </div>
    </section>
  );
};

export default Infographic;
