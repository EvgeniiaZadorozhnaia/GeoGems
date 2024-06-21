import React from "react";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;
import styles from "./AdminForm.module.css";

function AdminForm({ card, onClose, setEntries, inputs, setInputs }) {
  function inputsHandler(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      let response;

      if (card.id) {
        const updatedFields = {
          title: inputs.title || card.title,
          price: inputs.price || card.price,
          description: inputs.description || card.description,
          url: inputs.url || card.url,
        };
        response = await axiosInstance.put(
          `${VITE_API}/stones/${card.id}`,
          updatedFields
        );
        setEntries((prev) =>
          prev.map((el) => (el.id === response.data.id ? response.data : el))
        );
      } else {
        response = await axiosInstance.post(`${VITE_API}/stones`, inputs);
        setEntries((prev) => [...prev, response.data]);
      }

      setInputs({ title: "", price: "", description: "", url: "" });
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>
        {card.id
          ? `Редактирование карточки "${card.title}"`
          : "Создание новой карточки"}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="title" className={styles.label}>
            Название
          </label>
          <input
            type="text"
            className={styles.input}
            id="title"
            name="title"
            value={inputs.title}
            onChange={inputsHandler}
            placeholder="Название горной породы"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="price" className={styles.label}>
            Цена
          </label>
          <input
            type="text"
            className={styles.input}
            id="price"
            name="price"
            value={inputs.price}
            onChange={inputsHandler}
            placeholder="Цена горной породы"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="description" className={styles.label}>
            Описание
          </label>
          <input
            type="text"
            className={styles.input}
            id="description"
            name="description"
            value={inputs.description}
            onChange={inputsHandler}
            placeholder="Описание горной породы"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="url" className={styles.label}>
            Картинка
          </label>
          <input
            type="text"
            className={styles.input}
            id="url"
            name="url"
            value={inputs.url}
            onChange={inputsHandler}
            placeholder="URL картинки в папке public"
          />
        </div>
        <button type="submit" className={styles.btnprimary}>
          {card.id ? "Сохранить изменения" : "Создать"}
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
