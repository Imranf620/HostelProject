import React from "react";
import "./list.css";
import { Link } from "react-router-dom";
import SearchHostel from "../../components/SearchHostel/SearchHostel";

const List = () => {
  return (
    <body id="Hostels-List-Page">
      <div class="Nav-Bar">
        <small>
          <Link to="/">➥</Link>
        </small>

        <div class="logo">
          <Link to="/">
            <img src="/Front+Nav-Images/logo.png" alt="" />
          </Link>
        </div>
        <p>
          <Link href="/Html/Front-Main-Page.html">Hostels4u</Link>
        </p>
      </div>
      <div class="Main-Hostels-Lists-2" />
      <div class="Hostels-List-Filters">
        <h5 data-aos="fade-right" data-aos-duration="1000">
          Your Search:
        </h5>
        <label for="" data-aos="fade-right" data-aos-duration="1000">
          Area
        </label>
        <text data-aos="fade-right" data-aos-duration="1000">
          ☫
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1000" />
        <label for="" data-aos="fade-right" data-aos-duration="1300">
          Hostel Type
        </label>
        <text data-aos="fade-right" data-aos-duration="1300">
          ⎗
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1300" />
        <label for="" data-aos="fade-right" data-aos-duration="1600">
          No of Rooms
        </label>
        <text data-aos="fade-right" data-aos-duration="1600">
          ⚄
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1600" />
        <label for="" data-aos="fade-right" data-aos-duration="1900">
          Space vailable
        </label>
        <text data-aos="fade-right" data-aos-duration="1900">
          ⛼
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1900" />

        <hr />
        <hr />
        <p data-aos="fade-right" data-aos-duration="1000">
          Some Extra Filters
        </p>
        <h5 data-aos="fade-right" data-aos-duration="1000" data-aos-offset="20">
          Popular Filters:
        </h5>
        <label
          for=""
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="10"
        >
          Hostel Mess
        </label>
        <text
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="5"
        >
          🍽
        </text>
        <input
          type="search"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="5"
        />
        <label for="" data-aos="fade-right" data-aos-duration="1000">
          Near Shuttle
        </label>
        <text data-aos="fade-right" data-aos-duration="1000">
          ⛜
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1000" />
        <label for="" data-aos="fade-right" data-aos-duration="1000">
          Under Price to
        </label>
        <text data-aos="fade-right" data-aos-duration="1000">
          ₨
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1000" />
        <label for="" data-aos="fade-right" data-aos-duration="1000">
          Hostel Type
        </label>
        <text data-aos="fade-right" data-aos-duration="1000">
          ₨
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1000" />
        <label for="" data-aos="fade-right" data-aos-duration="1000">
          Hostel Rating
        </label>
        <text data-aos="fade-right" data-aos-duration="1000">
          ✫
        </text>
        <input type="search" data-aos="fade-right" data-aos-duration="1000" />

        <hr />
        <hr />
        <div
          class="Hostels4u-Data"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h5>
            <Link href="##">Hostels4u</Link>
          </h5>
          <p>Explore the best with us!</p>
          <article>
            <p>Satisfy with our work?</p>
            <input type="button" value="Yes 👍" />
            <input type="button" value="No 👎" />
          </article>

          <h6>
            Follow the <Link href="##">Privacy</Link>
            <span>&</span>
            <Link href="##">Terms</Link>as good instructions.
          </h6>
        </div>
      </div>
      <div class="Hostels-List-Right">
        <div class="Screen-Filters">
          <p>
            <Link href="##">Add Filters ✨</Link>
          </p>
        </div>

        <p>Total results of your Search!!</p>



        <SearchHostel/>
        <SearchHostel/>
        <SearchHostel/>
        <SearchHostel/>
        <SearchHostel/>
        <SearchHostel/>
        <SearchHostel/>
        {/* <div
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

        <div
          class="Hostels-Displays"
          data-aos="fade-left"
          data-aos-duration="2000"
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
              <input type="button" value="#Hot-deal" id="btn1" />
              <input type="button" value="#Popular" id="btn2" />
            </div>
            <div class="Hostels-Displays-Data-Right">
              <h5 style={{ color: "green" }} id="HSDDRType">
                Type
              </h5>
              <p>
                <text>
                  <data id="Reviews">590</data> Reviews
                </text>
                <text>
                  Rating{" "}
                  <span>
                    <span id="Rating">2</span>/10
                  </span>
                </text>
              </p>
              <h5 class="Down-price">Price$</h5>
              <small>Per Person</small>
              <input type="button" value="See more details" />
            </div>
          </div>
        </div>

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
              <h5 style={{ color: "green" }}>Type</h5>
              <p>
                <text>No of Reviews</text>
                <text>
                  Rating <span>0/10</span>
                </text>
              </p>
              <h5 class="Down-price">Price$</h5>
              <small>Per Person</small>
              <input type="button" value="See more details" />
            </div>
          </div>
        </div>

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
              <div>
                <input type="button" value="Hot-deal" />
                <input type="button" value="Popular" />
              </div>
              <div class="Hostels-Displays-Data-Right">
                <h5 style={{ color: "green" }}>Type</h5>
                <p>
                  <text>No of Reviews</text>
                  <text>
                    Rating <span>0/10</span>
                  </text>
                </p>
                <h5 class="Down-price">Price$</h5>
                <small>Per Person</small>
                <input type="button" value="See more details" />
              </div>
            </div>
          </div>
          <div class="Hostels-Lists-Pagination">
            <div class="demo">
              <nav class="pagination-outer" aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <Link href="#" class="page-link" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li class="page-item active">
                    <Link class="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      4
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" href="#">
                      5
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link href="#" class="page-link" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
      </div>

      {/* <script>
        const reviewElement = document.getElementById("Reviews");
        const ratingElement = document.getElementById("Rating");

        if(reviewElement.textContent.trim() >= 500){
            document.getElementById("Rating").textContent = "8";
        }
        else if(reviewElement.textContent.trim() >= 200 && reviewElement.textContent.trim() <= 499){
            document.getElementById("Rating").textContent = "5";
        }
        else if(reviewElement.textContent.trim() <= 199){
            document.getElementById("Rating").textContent = "3";
        }

if (ratingElement.textContent.trim() >= 8 && ratingElement.textContent.trim() <= 10) {
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("HSDDRType").textContent = "Excellent";
} 
else if (ratingElement.textContent.trim() >= 5 && ratingElement.textContent.trim() <= 7.9) {
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("HSDDRType").textContent = "Good";
}
else if (ratingElement.textContent.trim() >= 3 && ratingElement.textContent.trim() <= 4.9) {
    document.getElementById("HSDDRType").textContent = "Average";
}
else {
    document.getElementById("HSDDRType").textContent = "Bad";
}

    </script> */}

      {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
            AOS.init();
          </script>  */}
    </body>
  );
};

export default List;
