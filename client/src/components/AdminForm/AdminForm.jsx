import React from "react";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;

function AdminForm({ card, onClose, entries, setEntries, inputs, setInputs }) {
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
    <div>
      {card.id ? card.title : "Создание новой карточки"}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Название
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={inputs.title}
            onChange={inputsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Цена
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={inputs.price}
            onChange={inputsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={inputs.description}
            onChange={inputsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Картинка
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="url"
            value={inputs.url}
            onChange={inputsHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {card.id ? "Сохранить изменения" : "Создать"}
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
