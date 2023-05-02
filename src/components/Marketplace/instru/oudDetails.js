import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { oud } from "../../../dummydata";

const OudDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const ouds = oud.find((ouds) => ouds.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={ouds.cover} alt={ouds.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{ouds.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${ouds.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{ouds.description}</p>
      </div>
    </div>
    </>
  );
};

export default OudDetails;
