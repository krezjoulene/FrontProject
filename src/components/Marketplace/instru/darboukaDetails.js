import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { darbouka } from "../../../dummydata";

const DarboukaDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const darboukas = darbouka.find((darboukas) => darboukas.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={darboukas.cover} alt={darboukas.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{darboukas.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${darboukas.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{darboukas.description}</p>
      </div>
    </div>
    </>
  );
};

export default DarboukaDetails;
