import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;

function More() {
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

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-50px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <h1 style={{ color: "white" }}>{card.title}</h1>
          <img style={{ height: "650px" }} src={card.url}></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "650px",
            marginTop: '35px'
          }}
        >
          <h1 style={{ color: "white" }}>Описание</h1>
          <p
            style={{
              width: "800px",
              color: "white",
              textAlign: "justify",
              paddingLeft: "50px",
              fontSize: "25px",
            }}
          >
            {card.description}
          </p>
          <p
            style={{
              color: "white",
              fontSize: "25px",
              backgroundColor: "grey",
              padding: "10px",
            }}
          >
            Цена: {card.price} рублей
          </p>
          <button
            style={{ width: "100px", height: "35px", fontSize: "20px" }}
            onClick={() => back(-1)}
          >
            Назад
          </button>
        </div>
      </div>
    </>
  );
}

export default More;
