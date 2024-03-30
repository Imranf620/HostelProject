import React from "react";
import { Link } from "react-router-dom";


const RentDB = () => {
  return (
    <body id="Hostel-Admin-DB-Rents-Page">
    <div class="Side-Bar" id="Side-Bar">
        <div class="toggle" id="toggle"></div>
        <div class="Top2-Image" id="Top-Image">
            <img src="/Front+Nav-Images/Bridge.jpeg" alt=""/>
        </div>
        <div class="List">
            <div class="Ul-Icons">
                <Link href="Hostel-Admin-DashB-Page.html#Hostel-Admin-DashB-Page" id="dashboard2"><img src="/Front+Nav-Images/for-dashboard.png"
                        alt=""/></Link>
                <Link href="Hostel-Admin-DB-Rent-Page.html#Hostel-Admin-DB-Rents-Page" id="dashRent2"><img src="/Front+Nav-Images/for-rent.png" alt=""/></Link>
                <Link href="Hostel-Admin-DB-Rooms-Page.html#Hostel-Admin-DB-Rooms-Page" id="dashRoom2"><img src="/Front+Nav-Images/for-room.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-persons.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-profile.png" alt=""/></Link>
                <Link href="##"><img src="/Front+Nav-Images/for-setting.png" alt=""/></Link>

            </div>
            <ul>
                <Link href="Hostel-Admin-DashB-Page.html#Hostel-Admin-DashB-Page" id="dashboard">Dashboard</Link>
                <Link href="Hostel-Admin-DB-Rent-Page.html#Hostel-Admin-DB-Rents-Page" id="dashRent">Rents</Link>
                <Link href="Hostel-Admin-DB-Rooms-Page.html#Hostel-Admin-DB-Rooms-Page" id="dashRoom">Rooms</Link>
                <Link href="##">Persons</Link>
                <Link href="##">lllllllll</Link>
                <Link href="##">Settings</Link>
            </ul>
        </div>

    </div>
    <div class="Main-Board">

        <div class="Main-Dashboard-Rents" id="Main-Dashboard-Rents">
            <div class="RentH1"style={{width: "40%"}} data-aos="zoom-in" data-aos-duration="1000">
                <h1>ROOMS RENT</h1>
            </div>
            <div class="Roomtype-Rents">
                <div class="Middle-Room-up" data-aos="zoom-out-right" data-aos-duration="1500">
                    <div class="Middle-Room" >
                        <h3>Middle Room</h3>
                        <small>Full Room Rent : <span> $20 </span></small>
                        <small>Single Person Rent : <span> $20 </span></small>
                    </div>
                </div>
                <div class="Middle-Room-up" data-aos="zoom-out" data-aos-duration="1000">
                    <div class="Luxury-Room" >
                        <h3>Luxury Room</h3>
                        <small>Full Room Rent : <span> $20 </span></small>
                        <small>Single Person Rent : <span> $20 </span></small>
                    </div>
                </div>
                <div class="Middle-Room-up" data-aos="zoom-out-left" data-aos-duration="1500">
                    <div class="Normal-Room" >
                        <h3>Normal Room</h3>
                        <small>Full Room Rent : <span> $20 </span></small>
                        <small>Single Person Rent : <span> $20 </span></small>
                    </div>
                </div>
            </div>


            <div class="RentH1" style={{width: "70%"}} data-aos="zoom-in" data-aos-duration="1000">
                <h1>TOTAL ASSESTS</h1>
            </div>
            <div class="Rent-Details">
                <div class="Middle-Room-up2" data-aos="flip-left" data-aos-duration="1000">
                    <div class="Total-Rent" >
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
                </div>
                    
                <div class="Middle-Room-up2" data-aos="flip-left" data-aos-duration="1500">
                    <div class="Collected-Rent" >
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
                </div>
                <div class="Middle-Room-up2" data-aos="flip-left" data-aos-duration="2000">
                    <div class="Remaining-Rent" >
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
                </div>
                <div class="Middle-Room-up2" data-aos="flip-left" data-aos-duration="2500" data-aos-offset="20">
                    <div class="Remaining-Rent-People" >
                        <h2>Remaining People!</h2>
                        <div class="TRCounter">
                            <p>These Left:</p>
                            <h4>20</h4>
                        </div>
    
                    </div>
                </div>
            </div>

            <div class="RentH1" data-aos="zoom-in" data-aos-duration="1000">
                <h1>PAYMENT INFO</h1>
            </div>

            <div class="Dues-Payed-Unpayed">
                <div class="Payed" data-aos="fade-right" data-aos-duration="1000">
                    <h6>Who Payed Rent!!</h6>
                    <table class="table table-borderless table-hover table-striped">
                        <thead> 
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Floor</th>
                            <th>Del</th>
                        </thead>
                    </table>

                </div>
                <div class="Unpayed" data-aos="fade-left" data-aos-duration="1000">
                    <h6>Who Remained Yet!!</h6>
                    <table class="table table-borderless table-hover table-striped">
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
    </div>




{/* 
<script>


const toggle = document.getElementById("toggle");
        const Side_Bar = document.getElementById("Side-Bar");
        let isSidebarOpen = true;
        const body = document.getElementsByTagName("body")[0];
        const Top_Image = document.getElementById("Top-Image");
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
  );
};

export default RentDB;
