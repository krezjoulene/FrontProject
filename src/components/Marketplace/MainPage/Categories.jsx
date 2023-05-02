import React from "react"
import { Link } from "react-router-dom";
const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Guitare",
      link: "/guitars" 
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Piano",
      link: "/pianos"
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Accordéon",
      link: "/accordeon"
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Violon",
      link: "/violon"
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Violoncelle",
      link: "/violoncelle"
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Tambours",
      link: "/tambours"
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Oud",
      link: "/oud"

    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Saxophone",
      link: "/saxophone"

    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Trompette",
      link: "/trompette"

    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Darbouka",
      link: "/Darbouka"

    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            // Ajouter un lien autour de chaque instrument
            <Link to={value.link} key={index}>
              <div className='box f_flex'>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  )
}

export default Categories
