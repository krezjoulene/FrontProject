import React ,{ useState , useEffect }from "react"
import "./filter.css"
import "./courses.css"
import { Link } from "react-router-dom"
import axios from "axios";

const CoursesCard = () => {

  const [playlist , setplaylist] = useState([]);
  const fetchAxios = async () =>{
    const res = await axios.get("http://localhost:8000/api/v1/playlists")
    //console.log(res.data)
    setplaylist(res.data)
    console.log("pppp",res.data)
  }
  console.log("playlist :",playlist)
  useEffect(()=>{
      fetchAxios();
      
  },[])
  
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {playlist.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                </div>
                <div className='text'>
                  <Link to={`/playlist/${val._id}`} onClick={() => window.scrollTo(0, 0)}>
                  <h1>{val.title}</h1>
                  </Link>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                        <div className='box'>
                          <div className='para'>
                            <h4>Par : {val.teacherName} </h4>
                          </div>
                        </div>
                        <span>{val.totalTime}</span>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  ${val.prix} tous les cours
                </h3>
              </div>
              <button className='outline-btn'>INSCRIVEZ-VOUS MAINTENANT!</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
