import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { tambours } from "../../../dummydata";

const TambourDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const tambour = tambours.find((tambour) => tambour.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={tambour.cover} alt={tambour.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{tambour.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${tambour.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{tambour.description}</p>
      </div>
    </div>
    </>
  );
};

export default TambourDetails;
