import React, { useState } from "react"
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Sign from "./components/signin/signin"
import Instruments from "./components/Marketplace/instruments"
import Cart from "./components/Marketplace/Cart/Cart"
import Guitars from "./components/Marketplace/instru/guitar"
import Pianos from "./components/Marketplace/instru/pianos"
import Accords from "./components/Marketplace/instru/Accord"
import Violon from "./components/Marketplace/instru/violon"
import Violoncelle from "./components/Marketplace/instru/violoncelle"
import Tambours from "./components/Marketplace/instru/tambours"
import Oud from "./components/Marketplace/instru/oud"
import Saxo from "./components/Marketplace/instru/saxophone"
import Trompette from "./components/Marketplace/instru/trompette"
import Darbouka from "./components/Marketplace/instru/darbouka"
import InstrumentDetails from "./components/Marketplace/instrumentsdetails"
import GuitarDetails from "./components/Marketplace/instru/guitarDetails"
import PianoDetails from "./components/Marketplace/instru/pianoDetails"
import AccordDetails from "./components/Marketplace/instru/AccordDetails"
import Violondetails from "./components/Marketplace/instru/violondetails"
import VioloncelleDetails from "./components/Marketplace/instru/violoncelleDetails"
import TambourDetails from "./components/Marketplace/instru/tambourDetails"
import OudDetails from "./components/Marketplace/instru/oudDetails"
import SaxoDetails from "./components/Marketplace/instru/saxoDetails"
import TrompetteDetails from "./components/Marketplace/instru/trompetteDetails"
import DarboukaDetails from "./components/Marketplace/instru/darboukaDetails"
import AddInstrument from "./components/Marketplace/MainPage/Annonceform"


function App() {
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
   //Si notre produit est déjà présent dans le panier, alors nous utilisons la fonction 'find' pour le trouver
    const productExit = CartItem.find((item) => item.name === product.name)
   // Si le produit existe déjà dans le panier, la fonction setCartItem sera exécutée.
   // À l'intérieur de setCartItem, map() sera exécuté pour chaque élément du panier,
  // pour vérifier si l'ID de l'élément et l'ID du produit correspondent. Si c'est le cas,
  // le produit existant sera affiché et la quantité augmentée de 1.
// Si l'élément et le produit ne correspondent pas, de nouveaux éléments seront ajoutés.
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.name === product.name ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // mais si le produit n'existe pas dans le panier, cela signifie que le panier est vide
     // alors le nouveau produit est ajouté dans le panier et sa quantité est initialisée à 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.name === product.name)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.name !== product.name))
    } else {
      setCartItem(CartItem.map((item) => (item.name === product.name ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const removeCartItem = (product) => {
    const productExit = CartItem.find((item) => item.name === product.name)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.name !== product.name))
    } 
  }
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/form' component={AddInstrument} />
          <Route exact path='/marketplace' >
            <Instruments CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' component={Sign} />
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeCartItem={removeCartItem}/>
          </Route>
          <Route exact path='/guitars' >
            <Guitars CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/pianos' >
            <Pianos CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/accordeon' >
            <Accords CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/violon' >
            <Violon CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/violoncelle' >
            <Violoncelle CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/tambours' >
            <Tambours CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/oud' >
            <Oud CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/saxophone' >
            <Saxo CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/trompette' >
            <Trompette CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route exact path='/darbouka' >
            <Darbouka CartItem={CartItem} addToCart={addToCart} />
          </Route>
          <Route path="/instrument/:id" component={InstrumentDetails} />
          <Route path="/guitars/:id" component={GuitarDetails} />
          <Route path="/pianos/:id" component={PianoDetails} />
          <Route path="/accord/:id" component={AccordDetails} />
          <Route path="/violon/:id" component={Violondetails} />
          <Route path="/violoncelle/:id" component={VioloncelleDetails} />
          <Route path="/tambours/:id" component={TambourDetails} />
          <Route path="/oud/:id" component={OudDetails} />
          <Route path="/saxo/:id" component={SaxoDetails} />
          <Route path="/trompette/:id" component={TrompetteDetails} />
          <Route path="/darbouka/:id" component={DarboukaDetails} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
