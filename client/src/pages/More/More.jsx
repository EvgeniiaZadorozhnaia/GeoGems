import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;
import styles from "./More.module.css";

function More({ setCost, user }) {
  const [card, setCard] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(`${VITE_API}/stones/${id}`);
        setCard(() => data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const back = useNavigate();

  const costHandler = () => {
    setCost((pre) => pre + card.price);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.picture}>
          <h1 style={{ color: "white" }}>{card.title}</h1>
          <img className={styles.img} src={card.url}></img>
        </div>
        <div className={styles.description}>
          <h1>Описание</h1>
          <p style={{ fontSize: "25px" }}>{card.description}</p>
          <p className={styles.price}>Цена: {card.price} рублей</p>
          <div style={{ display: "flex" }}>
            <button className={styles.button} onClick={() => back(-1)}>
              Назад
            </button>
            {user ? (
              <button onClick={costHandler} className={styles.button}>
                В корзину
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
