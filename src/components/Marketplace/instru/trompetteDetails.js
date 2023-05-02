import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { trompette } from "../../../dummydata";

const TrompetteDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const trompettes = trompette.find((trompettes) => trompettes.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={trompettes.cover} alt={trompettes.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{trompettes.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${trompettes.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{trompettes.description}</p>
      </div>
    </div>
    </>
  );
};

export default TrompetteDetails;
