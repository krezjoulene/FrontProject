import React from "react";
import { useParams } from "react-router-dom";
import "../instrument.css";
import Detailsback from "../background/backdetails";
import { violoncelle } from "../../../dummydata";

const VioloncelleDetails = () => {
  const { id } = useParams(); // Récupération de l'ID de l'instrument à partir de l'URL
  const violoncelles = violoncelle.find((violoncelles) => violoncelles.id === id); // Récupération de l'instrument correspondant à l'ID

  return (
    <>
    <Detailsback/>
    <div className="instru-details-container">
      <img className="instru-details-img" src={violoncelles.cover} alt={violoncelles.name} />
      <div className="instru-details-content">
        <h1 className="instru-details-name">{violoncelles.name}</h1>
        <p className="instru-details-price"><b>Prix: </b>${violoncelles.price}.00</p>
        <p className="instru-details-description"><b>Description: </b>{violoncelles.description}</p>
      </div>
    </div>
    </>
  );
};

export default VioloncelleDetails;
