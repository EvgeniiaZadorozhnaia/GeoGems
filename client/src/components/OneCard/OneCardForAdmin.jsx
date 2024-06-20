import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../axiosInstance";
import styles from "./OneCard.module.css";
const { VITE_API } = import.meta.env;

function OneCardForAdmin({ card, setEntries, onEdit }) {
  async function deleteHandler() {
    try {
      await axiosInstance.delete(`${VITE_API}/stones/${card.id}`);
      setEntries((prev) => prev.filter((el) => el.id !== card.id));
    } catch (error) {
      console.log(error);
    }
  }

  function editHandler() {
    onEdit(card); // Вызываем функцию onEdit для открытия формы редактирования с данными карточки
  }

  return (
    <Card style={{ padding: "15px" }} className={styles.card}>
      <Card.Img
        style={{ cursor: "pointer" }}
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
          onClick={deleteHandler}
          variant="primary"
        >
          Удалить
        </Button>
        <Button onClick={editHandler}>Редактировать</Button>
      </div>
    </Card>
  );
}

export default OneCardForAdmin;
