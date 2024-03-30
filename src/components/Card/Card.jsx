import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <div>
        <Link
                  href="/"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="70"
                >
                  <div className="box1">
                    <h2>
                      <span className="sp">#3</span>
                    </h2>
                    <div className="tra">
                      <h2>Aswad Hostel</h2>
                      <div className="SideCome">
                        <small>Top Hostel</small>
                        <Link to="/list">
                        <button >Check More</button></Link>
                      </div>
                    </div>
                  </div>
                </Link>
    </div>
  )
}

export default Card