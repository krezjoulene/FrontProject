import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import { accords } from "../../../dummydata";
import Detailsback from "../background/backdetails";

const AccordDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const accord = accords.find((accord) => accord.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={accord.cover} alt={accord.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{accord.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${accord.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{accord.description}</p>
      </div>
    </div>
    </>
  );
};

export default AccordDetails;
