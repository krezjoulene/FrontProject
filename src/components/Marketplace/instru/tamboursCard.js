import React   from "react"
import { Link } from "react-router-dom"
import {tambours } from "../../../dummydata"
import "../instrument.css"

const TamboursCard = ({addToCart }) => {
  return (
    <>
      {tambours.map((val) => (
        <div className='items shadow'>
          <Link to={`/tambours/${val.id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
            </div>
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
                     {/* step : 3  
                     if hami le button ma click garryo bahne 
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

export default TamboursCard
