import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { violons } from "../../../dummydata";

const Violondetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const violon = violons.find((violon) => violon.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={violon.cover} alt={violon.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{violon.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${violon.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{violon.description}</p>
      </div>
    </div>
    </>
  );
};

export default Violondetails;
