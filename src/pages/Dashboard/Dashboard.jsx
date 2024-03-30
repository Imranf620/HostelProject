import React from 'react'
import "./dashboard.css"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    
    <body id="Hostel-Admin-DashB-Page">
    <div class="Side-Bar" id="Side-Bar">
        <Link to="/">
        <div class="toggle" id="toggle"></div>
        </Link>
        <div class="Top2-Image" id="Top-Image">
            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
        </div>
        <div class="List">
            <div class="Ul-Icons">
                <Link href="#Hostel-Admin-DashB-Page" id="dashboard2"><img src="/Front+Nav-Images/for-dashboard.png"
                        alt=""/></Link>
                <Link href="Hostel-Admin-DB-Rent-Page.html#Hostel-Admin-DB-Rents-Page" id="dashRent2"><img src="/Front+Nav-Images/for-rent.png" alt=""/></Link>
                <Link href="Hostel-Admin-DB-Rooms-Page.html#Hostel-Admin-DB-Rooms-Page" id="dashRoom2"><img src="/Front+Nav-Images/for-room.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-persons.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-profile.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-setting.png" alt=""/></Link>

            </div>
            <ul>
                <Link href="#Hostel-Admin-DashB-Page" id="dashboard">Dashboard</Link>
                <Link href="Hostel-Admin-DB-Rent-Page.html#Hostel-Admin-DB-Rents-Page" id="dashRent">Rents</Link>
                <Link href="Hostel-Admin-DB-Rooms-Page.html#Hostel-Admin-DB-Rooms-Page" id="dashRoom">Rooms</Link>
                <Link href="##">Persons</Link>
                <Link href="##">lllllllll</Link>
                <Link href="##">Settings</Link>
            </ul>
        </div>

    </div>
    <div class="Main-Board">
        <div class="Main-Dashboard-Data" id="Main-Dashboard-Data">
            <h1 class="esin" data-aos="fade-down" data-aos-duration="1000"><text>ESSENTIAL INFO</text></h1>

            <div class="Section1">
                <div class="Top-Details">
                    <div class="Top-Div-Mn" data-aos="fade-up" data-aos-duration="1000">
                        <div class="Top-div">
                            <div class="up">
                                <img src="/Front+Nav-Images/Desert.jpeg" alt=""/>
                                <text>0</text>
                            </div>
                            <hr/>
                            <div class="Down">
                                <text>Total Reservations</text>
                            </div>
                        </div>
                    </div>
                    <div class="Top-Div-Mn" data-aos="fade-up" data-aos-duration="1000">
                        <div class="Top-div">
                            <div class="up">
                                <img src="/Front+Nav-Images/Desert.jpeg" alt=""/>
                                <text>0</text>
                            </div>
                            <hr/>
                            <div class="Down">
                                <text>Total Reservations</text>
                            </div>
                        </div>
                    </div>
                    <div class="Top-Div-Mn" data-aos="fade-up" data-aos-duration="1000">
                        <div class="Top-div">
                            <div class="up">
                                <img src="/Front+Nav-Images/Desert.jpeg" alt=""/>
                                <text>0</text>
                            </div>
                            <hr/>
                            <div class="Down">
                                <text>Total Reservations</text>
                            </div>
                        </div>
                    </div>
                   <div class="Top-Div-Mn" data-aos="fade-up" data-aos-duration="1000">
                    <div class="Top-div">
                        <div class="up">
                            <img src="/Front+Nav-Images/Desert.jpeg" alt=""/>
                            <text>0</text>
                        </div>
                        <hr/>
                        <div class="Down">
                            <text>Total Reservations</text>
                        </div>
                    </div>
                   </div>
                    <div class="Top-Div-Mn" data-aos="fade-up" data-aos-duration="1000">
                        <div class="Top-div">
                            <div class="up">
                                <img src="/Front+Nav-Images/Desert.jpeg" alt=""/>
                                <text>0</text>
                            </div>
                            <hr/>
                            <div class="Down">
                                <text>Total Reservations</text>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="Upcoming-Cat" data-aos="fade-up" data-aos-duration="700">
                    <div class="Upcoming-Activity-Data">
                        <h2>Upcoming Activities</h2>
                    </div>
                </div>
            </div>
            <div class="Section2">
                <div class="Financial-Portion">
                    <div class="Fin-Left">
                        <div class="FinLChart">
                            <div class="FinL1" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Financial</h2>
                                <small>11/02/2010 - current</small>

                                <h4>Total Revenue :</h4>
                                <div class="h5">.......</div>
                            </div>
                            <div class="FinL2" data-aos="fade-up" data-aos-duration="2000">

                            </div>
                        </div>
                        <hr/>
                        <hr/>
                        <div class="About-Fin">
                            <div class="FAdiv" data-aos="fade-down" data-aos-duration="400">
                                <ul>
                                    <li>Financial Cost:</li>
                                </ul>
                                <h5>$.......</h5>
                                <small>This years data</small>
                            </div>
                            <div class="FAdiv" data-aos="fade-up" data-aos-duration="800">
                                <ul>
                                    <li>Financial Income:</li>
                                </ul>
                                <h5>$.......</h5>
                                <small>This years data</small>
                            </div>
                            <div class="FAdiv" data-aos="fade-down" data-aos-duration="400">
                                <ul>
                                    <li>Total:</li>
                                </ul>
                                <h5>$.......</h5>
                                <small>This years data</small>
                            </div>
                        </div>
                    </div>
                    <div class="Fin-Right-graph">
                        <input type="range" min="0" max="100" value="50" step="10"/>
                        <input type="range" min="0" max="100" value="70" step="10"/>
                        <input type="range" min="0" max="100" value="90" step="10"/>
                        <input type="range" min="0" max="100" value="30" step="10"/>
                        <input type="range" min="0" max="100" value="50" step="10"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

{/*}

        <div class="Main-Dashboard-Rents" id="Main-Dashboard-Rents">
            <div class="RentH1" style={{width: "40%"}}>
                <h1>ROOMS RENT</h1>
            </div>
            <div class="Roomtype-Rents">
                <div class="Middle-Room" data-aos="zoom-out-right" data-aos-duration="1500">
                    <h3>Middle Room</h3>
                    <small>Full Room Rent : <span>$20</span></small>
                    <small>Single Person Rent : <span>$20</span></small>
                </div>
                <div class="Luxury-Room" data-aos="zoom-out" data-aos-duration="1000">
                    <h3>Luxury Room</h3>
                    <small>Full Room Rent : <span>$20</span></small>
                    <small>Single Person Rent : <span>$20</span></small>
                </div>
                <div class="Normal-Room" data-aos="zoom-out-left" data-aos-duration="1500">
                    <h3>Normal Room</h3>
                    <small>Full Room Rent : <span>$20</span></small>
                    <small>Single Person Rent : <span>$20</span></small>
                </div>
            </div>


            <div class="RentH1" style={{width: "70%"}}>
                <h1>TOTAL ASSESTS</h1>
            </div>
            <div class="Rent-Details">
                <div class="Total-Rent" data-aos="flip-left" data-aos-duration="1000">
                    <h2>Total Details!</h2>
                    <div class="TRCounter">
                        <p>People Hostel:</p>
                        <h4>20</h4>
                    </div>
                    <div class="TRCounter">
                        <h5>Total Rent:</h5>
                        <text>000000</text>
                    </div>



                </div>
                <div class="Collected-Rent" data-aos="flip-left" data-aos-duration="1500">
                    <h2>Collected Details!</h2>
                    <div class="TRCounter">
                        <p>Payed By:</p>
                        <h4>20</h4>
                    </div>
                    <div class="TRCounter2">
                        <h5>Total Collected:</h5>
                        <text>000000</text>
                    </div>

                </div>
                <div class="Remaining-Rent" data-aos="flip-left" data-aos-duration="2000">
                    <h2>Remaining Details!</h2>
                    <div class="TRCounter">
                        <p>Not Payed:</p>
                        <h4>20</h4>
                    </div>
                    <div class="TRCounter3">
                        <h5>Remained Rent:</h5>
                        <text>000000</text>
                    </div>

                </div>
                <div class="Remaining-Rent-People" data-aos="flip-left" data-aos-duration="2500">
                    <h2>Remaining People!</h2>
                    <div class="TRCounter">
                        <p>These Left:</p>
                        <h4>20</h4>
                    </div>

                </div>
            </div>

            <div class="RentH1">
                <h1>PAYMENT INFO</h1>
            </div>

            <div class="Dues-Payed-Unpayed">
                <div class="Payed" data-aos="fade-right">
                    <h6>Who Payed Rent!!</h6>
                    <table>
                        <thead>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Floor</th>
                            <th>Del</th>
                        </thead>
                    </table>

                </div>
                <div class="Unpayed" data-aos="fade-left">
                    <h6>Who Remained Yet!!</h6>
                    <table>
                        <thead>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Floor</th>
                            <th>Del</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Aman</td>
                                <td>1</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div class="Main-Dashboard-Rooms" id="Main-Dashboard-Rooms">
            <h1 data-aos="fade-up" data-aos-duration="1000">ROOMS INFO</h1>
            <div class="MDB-Luxury-Rooms" data-aos="fade-up" data-aos-duration="1000">
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>LUXURY ROOM</h4>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Facilities:</span>Bed - Washroom - +</h6>
                            <h6><span>Max:</span> 4Persons</h6>
                            <h6><span>Size:</span>15 * 12</h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>LUXURY ROOM</h4>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Facilities:</span>Bed - Washroom - +</h6>
                            <h6><span>Max:</span> 4Persons</h6>
                            <h6><span>Size:</span>15 * 12</h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>LUXURY ROOM</h4>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Facilities:</span>Bed - Washroom - +</h6>
                            <h6><span>Max:</span> 4Persons</h6>
                            <h6><span>Size:</span>15 * 12</h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>LUXURY ROOM</h4>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Facilities:</span>Bed - Washroom - +</h6>
                            <h6><span>Max:</span> 4Persons</h6>
                            <h6><span>Size:</span>15 * 12</h6>
                        </div>
                    </div>
                </div>
                
               
            </div>
            <h1 data-aos="fade-up" data-aos-duration="1000">ROOMS AVAILIBILITY</h1>
            <div class="MDB-Middle-Rooms" data-aos="fade-up" data-aos-duration="1000">
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <div class="EdtDelPort">
                                    <p><Link href="##">edit</Link></p>
                                    <p><Link href="##">delete</Link></p>
                                </div>
                                <div class="OccuVacPort">
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>Room Type</h4>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Room No:</span></h6>
                            <h6><span>Room Status:</span> </h6>
                            <h6><span>Max Person:</span></h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <div class="EdtDelPort">
                                    <p><Link href="##">edit</Link></p>
                                    <p><Link href="##">delete</Link></p>
                                </div>
                                <div class="OccuVacPort">
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>Room Type</h4>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Room No:</span></h6>
                            <h6><span>Room Status:</span> </h6>
                            <h6><span>Max Person:</span></h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <div class="EdtDelPort">
                                    <p><Link href="##">edit</Link></p>
                                    <p><Link href="##">delete</Link></p>
                                </div>
                                <div class="OccuVacPort">
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                    <div class="OccuVacRooms">
                                        <select name="" id="">
                                            <option value="">Occupied</option>
                                            <option value="">Vaccant</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>Room Type</h4>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Room No:</span></h6>
                            <h6><span>Room Status:</span> </h6>
                            <h6><span>Max Person:</span></h6>
                        </div>
                    </div>
                </div>
               
            </div>
            <h1 data-aos="fade-up" data-aos-duration="1000">OTHER AREAS</h1>
            <div class="MDB-Normal-Rooms" data-aos="fade-up" data-aos-duration="1000">
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>Type</h4>
                            </div>
                            <div class="Priceside">
                                <h4>
                                    <select name="" id="">
                                        <option value="">Bath</option>
                                        <option value="">Kitchen</option>
                                        <option value="">Store</option>
                                    </select>
                                </h4>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Condition:</span></h6>
                            <h6><span>Count:</span> </h6>
                            <h6><span>Size:</span></h6>
                        </div>
                    </div>
                </div>
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>Type</h4>
                            </div>
                            <div class="Priceside">
                                <h4>
                                    <select name="" id="">
                                        <option value="">Bath</option>
                                        <option value="">Kitchen</option>
                                        <option value="">Store</option>
                                    </select>
                                </h4>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Condition:</span></h6>
                            <h6><span>Count:</span> </h6>
                            <h6><span>Size:</span></h6>
                        </div>
                    </div>
                </div>
                
            </div>
            <h1 data-aos="fade-up" data-aos-duration="1000">BOOKED ROOMS</h1>
            <div class="MDB-Other-Rooms" data-aos="fade-up" data-aos-duration="1000">
                <div class="Lux-Room2">
                    <div class="Lux-Room">
                        <div class="LREdits1">
                            <div class="LREdits">
                                <p><Link href="##">edit</Link></p>
                                <p><Link href="##">delete</Link></p>
                            </div>
                        </div>
                        <div class="img">
                            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
                        </div>
                        <div class="LRInfo">
                            <div class="Nameside">
                                <h4>LUXURY ROOM</h4>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div class="Priceside">
                                <h4>$20</h4>
                                <p>Per month</p>
                            </div>
                        </div>
                        <div class="LR-Hover-Info">
                            <h6><span>Facilities:</span></h6>
                            <h6><span>Maz:</span> </h6>
                            <h6><span>Size:</span></h6>
                        </div>
                    </div>

                
            </div>
        </div>
          */}

    {/* </div> */}
















{/* 



    <script>
        const toggle = document.getElementById("toggle");
        const Side_Bar = document.getElementById("Side-Bar");
        let isSidebarOpen = true;
        const body = document.getElementsByTagName("body")[0];
        const Top_Image = document.getElementById("Top-Image");
        const dashboard = document.getElementById("dashboard");
        const mainDashboardData = document.getElementById("Main-Dashboard-Data");
        let dashbrop = true;
        const dashboard2 = document.getElementById("dashboard2");
        const MainDashboardRents = document.getElementById("Main-Dashboard-Rents");
        let dashRentOp = true;
        const dashRent = document.getElementById("dashRent")
        const dashRent2 = document.getElementById("dashRent2")
        const MainDashboardRooms = document.getElementById("Main-Dashboard-Rooms");
        let dashRoomOp = true;
        const dashRoom = document.getElementById("dashRoom")
        const dashRoom2 = document.getElementById("dashRoom2")
















        toggle.addEventListener("click", function () {
            if (isSidebarOpen) {
                Side_Bar.style.width = "17%";
                toggle.style.transform = "rotate(180deg)";
                Top_Image.classList.remove("Top2-Image");
                Top_Image.classList.add("Top-Image");

            } else {
                Side_Bar.style.width = "4.8%";
                toggle.style.transform = "rotate(0deg)";
                Top_Image.classList.remove("Top-Image");
                Top_Image.classList.add("Top2-Image");
            }
            isSidebarOpen = !isSidebarOpen;
            Side_Bar.style.transition = "1s";
            toggle.style.transition = ".2s"




        });



        dashboard.addEventListener("click", function () {
            if (dashbrop) {
                mainDashboardData.style.display = "block";
            }
            MainDashboardRents.style.display = "none"
            MainDashboardRooms.style.display = "none";
        })



        dashboard2.addEventListener("click", function () {
            if (dashbrop) {
                mainDashboardData.style.display = "block";
            }
            MainDashboardRents.style.display = "none"
            MainDashboardRooms.style.display = "none";
        })




        dashRent.addEventListener("click", function () {
            if (dashRentOp) {
                MainDashboardRents.style.display = "block";
            }
            mainDashboardData.style.display = "none"
            MainDashboardRooms.style.display = "none";
        })



        dashRent2.addEventListener("click", function () {
            if (dashRentOp) {
                MainDashboardRents.style.display = "block";
            }
            mainDashboardData.style.display = "none"
            MainDashboardRooms.style.display = "none";
        })





        dashRoom.addEventListener("click", function () {
            if (dashRoomOp) {
                MainDashboardRooms.style.display = "block";
            }
            mainDashboardData.style.display = "none"
            MainDashboardRents.style.display = "none";
        })



        dashRoom2.addEventListener("click", function () {
            if (dashRoomOp) {
                MainDashboardRooms.style.display = "block";
            }
            mainDashboardData.style.display = "none"
            MainDashboardRents.style.display = "none";
        })



    </script>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
        AOS.init();
    </script> */}
</body>

  )
}

export default Dashboard