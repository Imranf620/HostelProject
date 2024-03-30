import React from 'react'
import "./hostel.css"
import { Link } from 'react-router-dom'
import RoomCom from '../../components/RoomCom/RoomCom'


const Hostel = () => {
  return (
    
    <body id="Hostel-Inner-Page">
      <div class="Logo">
        <Link
          to="/"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >

            
          <img
            src="/Front+Nav-Images/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div class="Hostel-Inner-Portion">
        <div class="Host-Inn-Top-Images">
          <div
            class="Host-Inn-Top-Images-Left"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src="/Front+Nav-Images/Desert.jpeg"
              alt=""
            />
          </div>
          <div
            class="Host-Inn-Top-Images-Right"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src="/Front+Nav-Images/Bridge.jpeg"
              alt=""
            />
            <img
              src="/Front+Nav-Images/dine.jpg"
              alt=""
            />
            <img
              src="/Front+Nav-Images/Mount-Home.jpeg"
              alt=""
            />
            <img
              src="/Front+Nav-Images/Sea-Town.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="Host-Inn-Section-2">
          <div class="Host-Inn-Section-2-Left">
            <h5 data-aos="fade-right" data-aos-duration="2500">
              Hostel Name
            </h5>
            <small data-aos="fade-right" data-aos-duration="2000">
              Hostel Location
            </small>
            <small data-aos="fade-right" data-aos-duration="1500">
              Contact: <span>0000000000</span>
            </small>
            <small data-aos="fade-right" data-aos-duration="1000">
              email: <span>----</span>
            </small>
            <small data-aos="fade-right" data-aos-duration="500">
              Facebook: <span>-----</span>
            </small>
          </div>
          <div class="Host-Inn-Section-2-Right">
            <h5
              style={{color: "green"}}
              id="HSDDRType"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Type
            </h5>
            <p>
              <text data-aos="fade-left" data-aos-duration="1500">
                <data id="Reviews">590</data> Reviews
              </text>
              <text data-aos="fade-left" data-aos-duration="1000">
                Rating{" "}
                <span>
                  <span id="Rating">2</span>/10
                </span>
              </text>
            </p>
          </div>
        </div>
        <div class="hr">
          <hr />
        </div>
        <div class="Host-Inn-Section-3">
          <small
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-offset="20"
          >
            <Link href="#Section-4-Property-Overview">Overview</Link>
          </small>
          <small
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="20"
          >
            <Link href="#Section-4-Overview-Rooms">Rooms</Link>
          </small>
          <small
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="20"
          >
            <Link href="#Section-4-Overview-Reviews">Reviews</Link>
          </small>
          <small
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-offset="20"
          >
            <Link href="#Section-4-Overview-Policies">Policies</Link>
          </small>
        </div>
        <hr />
        <div class="Host-Inn-Section-4-Detailsof3">
          <h5
            class="HIPHeadings"
            id="Section-4-Property-Overview"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Property Overview
          </h5>
          <div class="Section-4-Property-Overview">
            <div
              class="Section-4-Property-Overview-Left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="spans">
                <span>Free Wifi</span>
                <span>Kitchen</span>
                <span>Attach Bathroom</span>
                <span>Air Conditioning</span>
                <span>Door Acess System</span>
                <span>Free Parking</span>
                <span>Open 24hrs</span>
                <span>Beds</span>
                <span>Carpeted Rooms</span>
                <span>Gas</span>
                <span>Cabinets</span>
              </div>
            </div>
            <div
              class="Section-4-Property-Overview-Right"
              data-aos="fade-left"
              data-aos-duration="1000"
            ></div>
          </div>
          <h5
            class="HIPHeadings"
            id="Section-4-Overview-Rooms"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            Rooms
          </h5>
          <div
            class="Section-4-Overview-Rooms"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="120"
          >
            <div class="Display-S4OR">

              <RoomCom/>
              <RoomCom/>
              <RoomCom/>
              <RoomCom/>
              {/* <div class="S4OR">
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
              </div> */}

              {/* <div class="S4OR">
                <img
                  src="/Front+Nav-Images/Bridge.jpeg"
                  alt=""
                />
                <h6>Room Type: Luxury</h6>
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
              </div> */}

              {/* <div class="S4OR">
                <img
                  src="/Front+Nav-Images/Gravity.jpeg"
                  alt=""
                />
                <h6>Room Type: Luxury</h6>
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
              </div> */}

              {/* <div class="S4OR">
                <img
                  src="/Front+Nav-Images/Sea-Town.jpeg"
                  alt=""
                />
                <h6>Room Type: Luxury</h6>
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
              </div> */}
{/* 
              <div class="S4OR">
                <img
                  src="/Front+Nav-Images/Mount-Home.jpeg"
                  alt=""
                />
                <h6>Room Type: Luxury</h6>
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
              </div> */}
            </div>
          </div>
          <h5
            class="HIPHeadings"
            id="Section-4-Overview-Reviews"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            Reviews
          </h5>
          <div
            class="Section-4-Overview-Reviews"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="120"
          >
            <div
              class="S4OREV-Inputs-Range"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="100"
            >
              <label for="">
                <p>Cleanliness</p>
                <span>10/10</span>
              </label>
              <input type="range" step="10" min="0" value="100" max="100" />
              <label for="">
                <p>Comfort</p>
                <span>9/10</span>
              </label>
              <input type="range" step="10" min="0" value="90" max="100" />
              <label for="">
                <p>Environment</p>
                <span>5/10</span>
              </label>
              <input type="range" step="10" min="0" value="50" max="100" />
              <label for="">
                <p>Wi-Fi Connection</p>
                <span>8/10</span>
              </label>
              <input type="range" step="10" min="0" value="80" max="100" />
            </div>
            <div
              class="Section-4-Overview-Reviews-Right"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="100"
            >
              <div class="Section-4-Overview-Review">
                <small>
                  <h6>Short Review</h6>
                  <p>Reviewer Name</p>
                  <blockquote>
                    <p>Some other details</p>
                    <span>Features</span>
                    <span>Features</span>
                    <span>Features</span>
                  </blockquote>
                </small>
                <text>
                  <data>
                    Excellent <span>9.5</span>
                  </data>
                  <p>Date of review</p>
                </text>
              </div>
              <div class="Section-4-Overview-Review">
                <small>
                  <h6>Short Review</h6>
                  <p>Reviewer Name</p>
                  <blockquote>
                    <p>Some other details</p>
                    <span>Features</span>
                    <span>Features</span>
                    <span>Features</span>
                  </blockquote>
                </small>
                <text>
                  <data>
                    Excellent <span>9.5</span>
                  </data>
                  <p>Date of review</p>
                </text>
              </div>
              <div class="Section-4-Overview-Review">
                <small>
                  <h6>Short Review</h6>
                  <p>Reviewer Name</p>
                  <blockquote>
                    <p>Some other details</p>
                    <span>Features</span>
                    <span>Features</span>
                    <span>Features</span>
                  </blockquote>
                </small>
                <text>
                  <data>
                    Excellent <span>9.5</span>
                  </data>
                  <p>Date of review</p>
                </text>
              </div>
            </div>
          </div>
          <h5
            class="HIPHeadings"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            Limitations
          </h5>
          <div
            class="Section-4-Overview-Policies"
            id="Section-4-Overview-Policies"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="30"
          >
            <ol class="first-ol">
              <li>
                <ol>
                  <li>Hostels Opens</li>
                  <li>5:00 am</li>
                </ol>
              </li>
              <li>
                <ol>
                  <li>Hostels Close</li>
                  <li>5:00 am</li>
                </ol>
              </li>
            </ol>
            <p>Beaware</p>
            <ul>
              <li>
                <ol>
                  <li>Pets</li>
                  <li>Not allowed</li>
                </ol>
              </li>
              <li>
                <ol>
                  <li>Smoking</li>
                  <li>Not allowed</li>
                </ol>
              </li>
              <li>
                <ol>
                  <li>Partying</li>
                  <li>Not allowed</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 
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

export default Hostel