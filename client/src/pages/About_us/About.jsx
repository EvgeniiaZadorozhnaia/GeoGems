import React from "react";
import YandexMap from "../../components/Map/YandexMap";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h3 className={styles.adress}>
        Адреc магазина: ул.Горьянская, д. 10,корп. 1 <br/>
        Метро Площадь Ильича
      </h3>
      <YandexMap className={styles.map} />
      <p className={styles.info}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        reiciendis modi cum commodi porro quos reprehenderit neque unde
        voluptatum aspernatur qui, doloremque aperiam ab deserunt ullam labore
        deleniti. Vitae, at.
      </p>
    </div>
  );
}

export default About;
