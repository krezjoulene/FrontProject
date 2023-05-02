import React from "react"
import Back from "../common/back/Back"
import "../Marketplace/instrument.css"
import "../about/about.css"
import Home2 from "./MainPage/Home"
import InstruCard from "./instrumentsCard"
import GuitarsCard from "./instru/guitarCard"
import AccordCard from "./instru/AccordCard"
import DarboukaCard from "./instru/darboukaCard"
import OudCard from "./instru/oudCard"
import PianoCard from "./instru/pianoCard"
import SaxoCard from "./instru/saxophoneCard"
import TrompCard from "./instru/trompetteCard"
import ViolonCard from "./instru/violonCard"
import VioloncelleCard from "./instru/violoncelleCard"
import TamboursCard from "./instru/tamboursCard"

const Instruments = ({ addToCart, CartItem }) => {
  return (
    <>
      <Back title='Instruments' />
      <Home2 CartItem={CartItem} addToCart={addToCart} />
      <section className='instru padding'>
        <div className='container grid'>
          <InstruCard addToCart={addToCart} />
          <AccordCard addToCart={addToCart}/>
          <GuitarsCard addToCart={addToCart}/>
          <DarboukaCard addToCart={addToCart}/>
          <OudCard addToCart={addToCart}/>
          <PianoCard addToCart={addToCart}/>
          <SaxoCard addToCart={addToCart}/>
          <TamboursCard addToCart={addToCart}/>
          <TrompCard addToCart={addToCart}/>
          <ViolonCard addToCart={addToCart}/>
          <VioloncelleCard addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default Instruments