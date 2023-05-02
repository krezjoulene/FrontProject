import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { guitar } from "../../../dummydata";


const GuitarDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const guitars = guitar.find((guitars) => guitars.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={guitars.cover} alt={guitars.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{guitars.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${guitars.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{guitars.description}</p>
      </div>
    </div>
    </>
  );
};

export default GuitarDetails;
