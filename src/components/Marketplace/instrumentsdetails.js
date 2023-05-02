import React from "react";
import { instruments } from "../../dummydata";
import { useParams } from "react-router-dom";
import "./instrument.css";
import Detailsback from "./background/backdetails";
const InstrumentDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const instrument = instruments.find((instrument) => instrument.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={instrument.cover} alt={instrument.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{instrument.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${instrument.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{instrument.description}</p>
      </div>
    </div>
    </>
  );
};

export default InstrumentDetails;
