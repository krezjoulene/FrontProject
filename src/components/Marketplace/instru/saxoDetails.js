import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { saxo } from "../../../dummydata";

const SaxoDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const saxos = saxo.find((saxos) => saxos.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={saxos.cover} alt={saxos.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{saxos.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${saxos.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{saxos.description}</p>
      </div>
    </div>
    </>
  );
};

export default SaxoDetails;
