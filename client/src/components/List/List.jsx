import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
const { VITE_API } = import.meta.env;
import OneCardForAdmin from "../OneCard/OneCardForAdmin";
import AdminForm from "../AdminForm/AdminForm";

function List({ entries, setEntries, inputs, setInputs }) {
  const [editCard, setEditCard] = useState(null);


  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(`${VITE_API}/stones`);
        setEntries(() => data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  function editCardHandler(card) {
    setEditCard(card);
  }

  function closeEditForm() {
    setEditCard(null);
  }

  return (
    <div style={{
      marginTop: "80px",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "80px",
    }}>
      <div
      >
        {entries.length ? (
          entries.map((el) => (
            <OneCardForAdmin
              card={el}
              key={el.id}
              setEntries={setEntries}
              onEdit={editCardHandler}
            />
          ))
        ) : (
          <h3 style={{ fontSize: "40px" }}>Записей нет</h3>
        )}
      </div>
      {editCard && (
        <AdminForm
          card={editCard}
          onClose={closeEditForm}
          entries={entries}
          setEntries={setEntries}
          inputs={inputs}
          setInputs={setInputs}
        />
      )}
    </div>
  );
}

export default List;
