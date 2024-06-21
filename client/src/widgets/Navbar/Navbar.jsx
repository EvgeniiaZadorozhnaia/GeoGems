import axiosInstance, { setAccessToken } from "../../axiosInstance";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ user, setUser, cost }) {
  const logoutHandler = async () => {
    const res = await axiosInstance(`${import.meta.env.VITE_API}/auth/logout`);

    if (res.status === 200) {
      setUser(null);
      setAccessToken("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {user?.isAdmin ? (
          <Link to="/adminPage">Кабинет админа</Link>
        ) : (
          <>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            {user ? <Link to="/favorites">Избранное</Link> : <></>}
            {user?.username ? (
              <>
                <img
                  src="korzina.png"
                  alt="корзина"
                  style={{
                    height: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                ></img>
                <span
                  style={{ fontSize: "20px", padding: "10px", color: "white" }}
                >
                  {cost}
                </span>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
      <div className={styles.right}>
        {user?.username ? (
          <>
            <Link>{user.username}</Link>
            <Link onClick={logoutHandler}>Выйти</Link>
          </>
        ) : (
          <>
            <Link to="/signin">Войти</Link>
            <Link to="/signup">Регистрация</Link>
          </>
        )}
      </div>
    </div>
  );
}
