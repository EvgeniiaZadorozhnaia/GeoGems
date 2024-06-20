import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../axiosInstance";
import styles from "./OneCard.module.css";
const { VITE_API } = import.meta.env;
import { useNavigate } from "react-router-dom";

function OneCardForFavorite({ card, user, setFavorites }) {
  const navigate = useNavigate();

  async function deleteFromFavorite() {
    if (user) {
      await axiosInstance.delete(`${VITE_API}/favorites`, {
        data: {
          stoneId: card.id,
          userId: user.id,
        },
      });
      setFavorites((prev) => prev.filter((el) => el.id !== card.id));
    } else {
      alert("Вы не авторизованы");
    }
  }

  return (
    <Card style={{ padding: "15px" }} className={styles.card}>
      <Card.Img
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/catalog/${card.id}`)}
        className={styles.img}
        src={card.url}
      />
      <Card.Title className={styles.title}>{card.title}</Card.Title>
      <Card.Text className={styles.price}>{card.price} р.</Card.Text>
      <div>
        <Button
          style={{
            backgroundColor: "red",
            border: "3px solid red",
            color: "white",
          }}
          onClick={deleteFromFavorite}
          variant="primary"
        >
          Удалить
        </Button>
        <Button onClick={() => navigate(`/catalog/${card.id}`)}>
          Подробнее
        </Button>
      </div>
    </Card>
  );
}

export default OneCardForFavorite;
