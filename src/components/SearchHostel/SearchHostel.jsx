import React from 'react'
import { Link } from 'react-router-dom'
import "./searchHostel.css"


const SearchHostel = () => {
  return (
    <div
    class="Hostels-Displays"
    data-aos="fade-left"
    data-aos-duration="1000"
  >

    <div class="Img">
      <img src="/Front+Nav-Images/Desert.jpeg" alt="" />
    </div>
    <div class="Hostels-Displays-Data">
      <div class="Hostels-Displays-Data-Left">
        <h5>Hostel Name</h5>
        <p>
          <text>Hostel Location</text>
          <text>Facilities:</text>
          <ul>
            <li>Aman</li>
            <li>askjhd</li>
            <li>askjdh</li>
          </ul>
          <span>Rooms Detail</span>
          <ul>
            <li>Total rooms </li>
            <li>Size</li>
            <li>Beds in room</li>
            <li>Cabins</li>
          </ul>
        </p>
        <input type="button" value="#Hot-deal" />
        <input type="button" value="#Popular" />
      </div>
      <div class="Hostels-Displays-Data-Right">
        <h5 style={{ color: "green" }}>Excellent</h5>
        <p>
          <text>200+ Reviews</text>
          <text>
            Rating <span>9.5/10</span>
          </text>
        </p>
        <h5 class="Down-price">Price$</h5>
        <small>Per Person</small>
        <Link href="/Html/Main-Hostels/Hostel-Inner-Page.html">
          <input type="button" value="See more details" />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SearchHostel