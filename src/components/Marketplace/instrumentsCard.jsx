import React ,{ useState }from "react"
import { instruments } from "../../dummydata"
import "./instrument.css"
import { Link } from "react-router-dom";
import { accords, guitar, piano, tambours, violoncelle, violons } from "../../dummydata";

const InstruCard = ({ addToCart }) => {
  const getInstrumentArray = () => {
    switch (instrumentType) {
        case "guitare":
            return guitar;
        case "piano":
            return piano;
        case "accordéon":
            return accords;
        case "violon":
            return violons;
        case "violoncelle":
            return violoncelle;
        case "tambours":
            return tambours;
        default:
            return instruments;
    }
};
const [instrumentType] = useState("");

  return (
    <>
      {getInstrumentArray().map((val) => (
        <div className='items shadow'>
           <Link to={`/instrument/${val.id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
            
          </div>
          </Link>
          <div className='product-details'>
            <div className='rate'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
            <div className='price'>
              <h4>${val.price}.00 </h4>
              {/* Étape : 3
                si nous avons cliqué sur le bouton, alors
               */}
              <button2 onClick={() => addToCart(val)}>
                <i className='fa fa-plus'></i>
              </button2>
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default InstruCard