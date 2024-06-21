import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ user }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      {user?.isAdmin ? (
        <div className={styles.footer}></div>
      ) : (
        <>
          <div className={styles.footer}>
            <div className={styles.left}>
              <Link className={styles.contacts} to="/contacts">
                Контакты
              </Link>
              <Link className={styles.contacts} to="/about">
                О нас
              </Link>
            </div>
            <p className={styles.title}>&copy; GeoGems</p>
            <div className={styles.time}>{time}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
