import React, { useState } from "react";
import Detailsback from "../background/backdetails";
import axios from "axios";
import "./Home.css"

function AddCourse() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [setImage] = useState(null);




    const handelchangName=(e)=>{
        setName(e.target.value);
        console.log(e.target.value)
     }
      const handelchangeDescrip=(e)=>{
         setDescription(e.target.value);
         console.log(e.target.value)
      }
        
      const AjoutInstru=async(e)=>{
         e.preventDefault();
         try {
            const res=await axios.post("http://localhost:8000/api/v1/cours",{
             title: name,
             quantity: qte,
             description: description,
             image : image ,
             
            
             
            }) 
            if(res.status===201){
              console.log("instrument : ",res.data.data);
             alert("Cours ajouté avec succès !");
             window.location.href = "/marketplace";
            }
         } catch (error) {
             console.log(error)
             alert("Erreur lors de l'ajout du cours. Veuillez réessayer.");
         }
      }
    

  const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };



    return (
        <>
            <Detailsback />
            <div className="add-instrument-form">
                <h2>Ajouter un nouveau cours</h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="name"><b>Titre</b></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handelchangName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={handelchangeDescrip}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image"><b>Image</b></label>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </div>
                    <button onClick={AjoutInstru}><b>Ajouter le cours</b></button>
                </form>
            </div>
          
        </>
    );
 }
export default AddCourse;
