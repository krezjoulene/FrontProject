import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { piano } from "../../../dummydata";

const PianoDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const pianos = piano.find((pianos) => pianos.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={pianos.cover} alt={pianos.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{pianos.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${pianos.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{pianos.description}</p>
      </div>
    </div>
    </>
  );
};

export default PianoDetails;
