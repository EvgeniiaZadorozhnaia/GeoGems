import React, { useEffect } from "react";
import OneCardForFavorite from "../../components/OneCard/OneCardForFavorite";
import axiosInstance from "../../axiosInstance";

const { VITE_API } = import.meta.env;

export default function Favorites({ user, favorites, setFavorites }) {
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axiosInstance.get(
          `${VITE_API}/favorites/${user.id}`
        );
        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "50px",
        width: '80%'
      }}
    >
      {favorites.length ? (
        favorites.map((el) => (
          <OneCardForFavorite
            card={el}
            key={el.id}
            user={user}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))
      ) : (
        <h3 style={{ color: "white", fontSize: "40px" }}>Записей нет</h3>
      )}
    </div>
  );
}
