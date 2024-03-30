import React from 'react'
import { Link } from 'react-router-dom'
import "./room.css"


const Room = () => {
  return (
    <body>
    <div class="Nav-Bar">
        <small><Link href="">➥</Link></small>

        <div class="logo">
            <Link href="/Html/Front-Main-Page.html"><img src="/Front+Nav-Images/logo.png" alt=""/></Link>
        </div>
        <p><Link href="/Html/Front-Main-Page.html">Hostels4u</Link></p>
    </div>
    
    <div class="Single-Room-Booking-Main">
        <div class="Single-Room-Booking-Procedure" data-aos="zoom-out-up" data-aos-duration="1000"  >
            <h2>Book -hostel type- Room</h2>
            <div class="Single-Room-Booking-Step1" data-aos="zoom-out-up" data-aos-duration="1000">
                <h5>Step 1:</h5>
                <small>Room Facilities</small>
                <ul>
                    <li>Free Wi-Fi</li>
                    <li>Air-Condition</li>
                    <li>Attach Bath</li>
                    <li>Cabins</li>
                    <li>Beds/Carpet</li>
                    <li>Table-Chair</li>
                </ul>
                <label for="">Choose seats:</label>
                    <select name="" id="select1">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>
            </div>
            <hr/>
            <div class="Single-Room-Booking-Step2" data-aos="zoom-out-up" data-aos-duration="1000">
                <h5>Step 2: Personal Data</h5>
                <label for="">Firstname - Lastname</label>
                <input type="text" placeholder="e.g Aman Ullah"/>
                <label for="">Email Adress</label>
                <input type="email" name="" id="" placeholder="Enter email"/>
                <label for="">Phone Number</label>
                <input type="number" name="" id="" placeholder="Enter Phone Number"/>
            </div>
            <hr/>
            <div class="Single-Room-Booking-Step3" data-aos="zoom-out-up" data-aos-duration="1000">
                <h5>Step 2: Payment Details</h5>
                <label for="">Choose Payment Method</label>
                <select name="" id="">
                    <option value="">JazzCash</option>
                    <option value="">Easypaisa</option>
                    <option value="">Bank</option>
                    <option value="">Sada Pay</option>
                </select>
                <label for="">Enter Account Number</label>
                <input type="text" placeholder="Enter Account Number"/>
            </div>
        </div>
        <div class="Single-Room-Booking-Right" data-aos="zoom-out-up" data-aos-duration="1000">
            <div class="Single-Room-Booking-Right-img">
                <img src="/Front+Nav-Images/blob-scene-haikei.png " alt=""/>
            </div>
            <div class="Single-Room-Booking-Right-Data">
                <h5>Room Type</h5>
                <p>Room No: <span>01</span> </p>
                <p>Floor No: <span id="floor1">01</span></p>
                <h6>Booking Date: <span>DD/MM/YY</span></h6>
                <hr/>
                <small>Double Standard Room</small>
                <data>Per Person Rent: <text id="onePersonRnt">2000</text></data>
                <data>No of Bookin: <text id="noofbooking">0</text></data>
                <data>Selected Seats: <text id="totalRent">$00</text></data>
                <data>Hostel Charges: <text>$00</text></data>
                <hr/>
                <blockquote>Total <text>$000</text></blockquote>
                <input type="button" value="Book Now" data-aos="zoom-out-up" data-aos-offset="0" data-aos-duration="1000"/>
            </div>
        </div>

    </div>








{/* 
<script>
    const select1 = document.getElementById("select1");
    const floor1 = document.getElementById("floor1");
    const noofbooking = document.getElementById("noofbooking");
    const totalRent = document.getElementById("totalRent");
    let onePersonRnt = document.getElementById("onePersonRnt")
    let perPersonRent = onePersonRnt.textContent

    select1.addEventListener("change", function() {
    
        if(select1.options[select1.selectedIndex].textContent == 1){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*1)
        }
        if(select1.options[select1.selectedIndex].textContent == 2){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*2)
        }
        if(select1.options[select1.selectedIndex].textContent == 3){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*3)
        }
        if(select1.options[select1.selectedIndex].textContent == 4){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*4)
        }
        if(select1.options[select1.selectedIndex].textContent == 5){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*5)
        }
        if(select1.options[select1.selectedIndex].textContent == 6){
            noofbooking.textContent = select1.options[select1.selectedIndex].textContent;
            totalRent.textContent = "$"+(perPersonRent*6)
        }
        
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
  )
}

export default Room