import React from "react";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;

function AdminForm({ card, onClose, entries, setEntries, inputs, setInputs }) {
  function inputsHandler(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function redactHandler(event) {
    event.preventDefault();
    const updatedFields = {};
    if (inputs.title) updatedFields.title = inputs.title;
    if (inputs.price) updatedFields.price = inputs.price;
    if (inputs.description) updatedFields.description = inputs.description;
    if (inputs.url) updatedFields.url = inputs.url;
    try {
      const { data } = await axiosInstance.put(
        `${VITE_API}/stones/${card.id}`,
        updatedFields
      );
      setEntries((prev) => prev.map((el) => (el.id === data.id ? data : el)));
      setInputs(() => ({ title:"", price: "", description: "", url: "" }));
      onClose();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {card.title ? <div style={{ color: "white" }}>{card.title}</div> : <></>}
      <form style={{ color: "white" }} onSubmit={redactHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Название
          </label>
          <input
            value={inputs.title}
            onChange={inputsHandler}
            type="text"
            className="htmlForm-control"
            aria-describedby="emailHelp"
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Цена
          </label>
          <input
            value={inputs.price}
            onChange={inputsHandler}
            type="text"
            className="htmlForm-control"
            aria-describedby="emailHelp"
            name="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Описание
          </label>
          <input
            value={inputs.description}
            onChange={inputsHandler}
            type="text"
            className="htmlForm-control"
            name="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Картинка
          </label>
          <input
            value={inputs.url}
            onChange={inputsHandler}
            type="text"
            className="htmlForm-control"
            aria-describedby="emailHelp"
            name="url"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить изменения
        </button>
      </form>
    </>
  );
}

export default AdminForm;
