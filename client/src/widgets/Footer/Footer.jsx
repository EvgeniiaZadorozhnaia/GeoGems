import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.left}>
          <Link className={styles.contacts} to="/contacts">Контакты</Link>
          <Link className={styles.contacts} to="/about">О нас</Link>
        </div>
        <p className={styles.title}>&copy; GeoGems</p>
        <div className={styles.time}>{time}</div>
      </div>
    </>
  );
};

export default Footer;