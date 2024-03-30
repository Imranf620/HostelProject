import React from 'react'
import Navbar from "../../components/navbar.jsx/Navbar";
import Card from '../../components/Card/Card';
import ViewHostel from '../../components/ViewHostel/ViewHostel';
import SearchHostel from '../../components/SearchHostel/SearchHostel';
import RoomCom from '../../components/RoomCom/RoomCom';


const Check = () => {
  return (
    <div>
        <Navbar/>
        <Card/>
        <ViewHostel/>
        <SearchHostel/>
        <RoomCom/>
    </div>
  )
}

export default Check