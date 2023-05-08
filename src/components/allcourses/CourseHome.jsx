import React, { useState, useEffect } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import CourseFilter from "./CourseFilter";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";

const CourseHome = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [afficherListe, setAfficherListe] = useState(false);

  const toggleListe = () => {
    setAfficherListe(!afficherListe);
  };



  useEffect(() => {
    // Vérifier si un jeton d'authentification est présent dans le stockage local
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("UserRole");

    if (token && userRole) {
      setIsLoggedIn(true);
      setUserRole(userRole);
      console.log("kkkk", userRole)
    }
  }, []);


  const teacherOptions = Array.from(new Set(coursesCard.flatMap((course) => course.courTeacher.map((teacher) => teacher.name))));
  const instrumentOptions = Array.from(new Set(coursesCard.flatMap((course) => course.instrument)));
  const priceOptions = Array.from(new Set(coursesCard.map((course) => course.priceAll)));

  const [filters, setFilters] = useState({
    teachers: teacherOptions.map((teacher) => ({ id: teacher, name: teacher, checked: false })),
    instruments: instrumentOptions.map((instrument) => ({ id: instrument, name: instrument, checked: false })),
    prices: priceOptions.map((price) => ({ id: price, name: price, checked: false })),
  });

  const handleFilterChange = (filterType, filterId) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const filterGroup = updatedFilters[filterType];

      const updatedFilterGroup = filterGroup.map((filter) => {
        if (filter.id === filterId) {
          return {
            ...filter,
            checked: !filter.checked,
          };
        } else {
          return filter;
        }
      });

      updatedFilters[filterType] = updatedFilterGroup;

      return updatedFilters;
    });
  };

  const filteredCourses = coursesCard.filter((course) => {
    const teacherFilters = filters.teachers.filter((teacher) => teacher.checked);
    const instrumentFilters = filters.instruments.filter((instrument) => instrument.checked);
    const priceFilters = filters.prices.filter((price) => price.checked);

    if (teacherFilters.length > 0 && !teacherFilters.some((teacher) => course.courTeacher.some((t) => t.name === teacher.name))) {
      return false;
    }

    if (instrumentFilters.length > 0 && !instrumentFilters.some((instrument) => course.instruments.includes(instrument.name))) {
      return false;
    }

    const coursePrice = parseInt(course.priceAll.substring(1));
    if (
      priceFilters.length > 0 &&
      !priceFilters.some((price) => {
        switch (price.id) {
          case 1:
            return coursePrice >= 0 && coursePrice <= 50;
          case 2:
            return coursePrice > 50 && coursePrice <= 100;
          case 3:
            return coursePrice > 100 && coursePrice <= 200;
          case 4:
            return coursePrice > 200;
          default:
            return false;
        }
      })
    ) {
      return false;
    }

    return true;
  });

  return (
    <>
      <Back title="Explorer les cours" />
      <section className='search'>
        <div className='container c_flex'>
          <div>
            <h1>logo</h1>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Cherchez et appuyez sur Entrée...' />
            <span>Toutes les catégories</span>
          </div>

          <div className='icon2 f_flex width '>
            {(isLoggedIn && userRole === "teacher") ? (
              <>
              <div style={{ position: 'relative' }}>
                <i onClick={toggleListe} className='fa fa-plus icon-circle'></i>
                {afficherListe && (
                   <div className='dropdown'>
                  <ul>
                    <li>
                      <a href="/ajouterInstrument">Ajouter une playlist</a>
                    </li>
                    <li>
                      <a href="/ajouterLien">Ajouter un lien meet</a>
                    </li>
                  </ul>
                   </div>
                )}
                </div>
                <Link to="/profile"><i className='fa fa-user icon-circle'></i></Link>
              </>
            ) : (
              <>
                <Link to="/SignIn" onClick={() => window.scrollTo(0, 0)} >
                  <i className='fa fa-plus icon-circle'></i>
                </Link>
                <Link to="/SignIn"><i className='fa fa-user icon-circle'></i></Link>
                <div className='cart'>


                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <CourseFilter filters={filters} handleFilterChange={handleFilterChange} />
      <CoursesCard courses={filteredCourses} />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
