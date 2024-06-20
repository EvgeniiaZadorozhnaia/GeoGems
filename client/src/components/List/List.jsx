import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import AdminForm from "../AdminForm/AdminForm";
import OneCardForAdmin from "../OneCard/OneCardForAdmin";

const { VITE_API } = import.meta.env;

function List() {
  const [entries, setEntries] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosInstance.get(`${VITE_API}/stones`);
        setEntries(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const editCardHandler = (card) => {
    setEditCard(card);
    setInputs({
      title: "",
      price: "",
      description: "",
      url: "",
    });
  };

  const closeEditForm = () => {
    setEditCard(null);
    setInputs({ title: "", price: "", description: "", url: "" });
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "80px", textAlign: "center" }}>
      <h1 style={{color:'white'}}>Привет, админ, что на сегодня?</h1>
      <AdminForm
        card={editCard || {}}
        onClose={closeEditForm}
        entries={entries}
        setEntries={setEntries}
        inputs={inputs}
        setInputs={setInputs}
      />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {entries.length ? (
          entries.map((el) => (
            <OneCardForAdmin
              key={el.id}
              card={el}
              setEntries={setEntries}
              onEdit={editCardHandler}
            />
          ))
        ) : (
          <h3>Записей нет</h3>
        )}
      </div>
    </div>
  );
}

export default List;