import React, { useState } from "react";
import { accords, guitar, instruments, piano, tambours, violoncelle, violons } from "../../../dummydata";
import Detailsback from "../background/backdetails";
import "./Home.css"

function AddInstrument() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [setImage] = useState(null);
    const [instrumentType, setInstrumentType] = useState("");
    const [instrumentEtat, setInstrumentEtat] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById("image");
        const file = fileInput.files[0];
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(file.name)) {
            alert("Veuillez sélectionner une image valide (jpg, jpeg, png ou gif).");
            fileInput.value = "";
            return false;
        }

        const reader = new FileReader();
        reader.onload = function () {

            let instrumentArray;

            if (instrumentType === "guitare") {
                instrumentArray = guitar;
            } else if (instrumentType === "piano") {
                instrumentArray = piano;
            } else if (instrumentType === "accordéon") {
                instrumentArray = accords;
            } else if (instrumentType === "violon") {
                instrumentArray = violons;
            } else if (instrumentType === "violoncelle") {
                instrumentArray = violoncelle;
            } else if (instrumentType === "tambours") {
                instrumentArray = tambours;
            } else {
                instrumentArray = instruments;
            }

            const newInstrument = {
                id: (instrumentArray.length + 1).toString(),
                cover: reader.result,
                name: name,
                price: price,
                Etat :instrumentEtat ,
                description: description,
            };

            instrumentArray.push(newInstrument);
            setName("");
            setPrice("");
            setDescription("");
            setInstrumentEtat("");
        };

        reader.readAsDataURL(file);
        alert("Instrument ajouté avec succès !");
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };



    return (
        <>
            <Detailsback />
            <div className="add-instrument-form">
                <h2>Ajouter un nouvel instrument</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"><b>Nom</b></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price"><b>Prix</b></label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type"><b>Type d'instrument</b></label>
                        <select id="instrumentType" value={instrumentType} onChange={(event) => setInstrumentType(event.target.value)}>
                            <option value="guitare">Guitare</option>
                            <option value="piano">Piano</option>
                            <option value="accordéon">Accordéon</option>
                            <option value="violon">Violon</option>
                            <option value="violoncelle">Violoncelle</option>
                            <option value="tambours">Tambours</option>
                            <option value="oud">Oud</option>
                            <option value="saxophone">Saxophone</option>
                            <option value="trompette">Trompette</option>
                            <option value="darbouka">Darbouka</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Etat"><b>Etat d'instrument</b></label>
                        <select id="instrumentEtat" value={instrumentEtat} onChange={(event) => setInstrumentEtat(event.target.value)}>
                            <option value="neuf">Nouveau</option>
                            <option value="occasion">Occasion</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image"><b>Image</b></label>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </div>
                    <button type="submit"><b>Ajouter l'annonce</b></button>
                </form>
            </div>
          
        </>
    );
 }
export default AddInstrument;
