import React from 'react'
import { Link } from 'react-router-dom'
import "./roomComp.css"


const RoomCom = () => {
  return (
    <div class="S4OR">
    <img
      src="/Front+Nav-Images/dine.jpg"
      alt=""
    />
    <h6>Room Type : Luxury</h6>
    <text>Size</text>
    <text>People</text>
    <text>Beds/Carpet</text>
    <text>Beds/Carpet</text>
    <span>Attach-Bathroom</span>
    <span>Air-Condition</span>
    <span>Cabins</span>
    <div class="input">
      <Link href="Hostel-Room-Booking-Page.html">
        <input type="button" value="Book now for {$}" />
      </Link>
    </div>
  </div>
  )
}

export default RoomCom