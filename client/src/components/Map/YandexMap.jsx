import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function YandexMap() {
  return (
    <div style={{ width: "600px", height:'600px', marginLeft:'-850px'}}>
      <YMaps>
        <Map
          defaultState={{ center: [55.751574, 37.674967], zoom: 9 }}
          style={{ width: "100%", height: "600px" }}
        >
          <Placemark geometry={[55.751574, 37.674856]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMap;
