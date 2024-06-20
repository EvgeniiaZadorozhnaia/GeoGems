import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import styles from "./OneCard.module.css";
import { useNavigate } from "react-router-dom";

function OneCard({ card, user }) {
  const [oneCard, setCard] = useState({});
  const { VITE_API } = import.meta.env;
  const navigate = useNavigate();

  function addToFavorites() {
    if (user) {
      axiosInstance.post(`${VITE_API}/favorites`, {
        stoneId: card.id,
        userId: user.id,
      });
    } else {
      alert("Вы не авторизованы");
    }
  }
  

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(`${VITE_API}/stones/${card.id}`);
        setCard(() => data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Card className={styles.card}>
      <Card.Img style={{cursor:'pointer'}} onClick={() => navigate(`/catalog/${card.id}`)} className={styles.img} src={oneCard.url} />
      <Card.Title className={styles.title}>{oneCard.title}</Card.Title>
      <Card.Text className={styles.price}>{oneCard.price} р.</Card.Text>
      <div>
        {user ? <Button onClick={addToFavorites} variant="primary">В избранное</Button> : <></>}
        <Button onClick={() => navigate(`/catalog/${card.id}`)} variant="primary">Подробнее</Button>
      </div>
    </Card>
  );
}

export default OneCard;
