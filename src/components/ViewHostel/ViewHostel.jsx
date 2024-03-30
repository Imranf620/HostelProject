import React from 'react'
import "./viewHostel.css"
import { Link } from 'react-router-dom'


const ViewHostel = () => {
  return (
    <div
            className="FirstHost-Left"
            data-aos="fade-right"
            data-aos-offset="70"
            data-aos-duration="1000"
          >
            <div className="Data">
              <div className="stars">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#e3f401" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#e3f401" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#e3f401" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#e3f401" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#e3f401" }}
                ></i>
              </div>
              <div className="Details1">
                <small>Hostel-Name : Akmal Hostel</small>
                <small>Rent/Person : 2000/Rs</small>
                <small>Room-Type : Suite Room</small>
                <small>Max : 4 Persons</small>
                <small>Carpeted : Yes</small>
                <small>Cabens : Yes</small>
              </div>
              <Link to="/list/:id">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="./Front+Nav-Images/h18.jpg" alt="" />
          </div>
  )
}

export default ViewHostel