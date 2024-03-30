import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar.jsx/Navbar";
import Card from "../../components/Card/Card";
import ViewHostel from "../../components/ViewHostel/ViewHostel";

const Home = () => {


  

  const scrollToTop = () => {
    const element = document.getElementById('homeMain');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <body className="Home-Main" id="homeMain">
        <div className="Move-Rotate">
          <div className="move">
            <img src="/Front+Nav-Images/RED-PLASRIC.png" alt="" />
          </div>
          <div className="move">
            <img src="/Front+Nav-Images/RED-PLASRIC.png" alt="" />
          </div>
          <div className="move">
            <img src="/Front+Nav-Images/Mount-Home.jpeg" alt="" />
          </div>
          <div className="move">
            <img src="/Front+Nav-Images/RED-PLASRIC.png" alt="" />
          </div>
        </div>

        <Navbar />

        {/* <div className="Nav">
          <nav id="menu">
            <input
              type="checkbox"
              id="responsive-menu"
              onClick="updatemenu()"
            />
            <label></label>
            <div className="Logo">
              <Link href="/">
                <img src="/Front+Nav-Images/logo.png" alt="" />
              </Link>
            </div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link className="dropdown-arrow" href="http://">
                  Products
                </Link>
                <ul className="sub-menus">
                  <li>
                    <Link href="http://">Boys Hostels</Link>
                  </li>
                  <li>
                    <Link href="http://">Girls Hostels</Link>
                  </li>
                  <li>
                    <Link href="http://">Coming Soon</Link>
                  </li>
                  <li>
                    <Link href="http://">Coming Soon</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li id="Services">
                <Link
                  className="dropdown-arrow"
                  href="Front-Services-Page.html#Services-Main"
                >
                  Services
                </Link>
                <ul className="sub-menus">
                  <li>
                    <Link href="http://">Services 1</Link>
                  </li>
                  <li>
                    <Link href="http://">Services 2</Link>
                  </li>
                  <li>
                    <Link href="http://">Services 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="http://">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <div className="Signin-Up">
              <Link to="signin">
                <button>Sign_In</button>
              </Link>
              <Link to="signup">
                <button>Sign_Up</button>
              </Link>
            </div>
          </nav>
        </div> */}

        <div className="ClickToTop" onClick={scrollToTop} >
          <Link href="">⇮</Link>
        </div>

        <div className="Flower-Html">
          <div className="flower">
            <div className="f-wrapper">
              <div className="flower__line"></div>
              <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
              </div>
            </div>

            <div className="f-wrapper f-wrapper--2">
              <div className="flower__line"></div>
              <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
              </div>
            </div>

            <div className="f-wrapper f-wrapper--3">
              <div className="flower__line"></div>
              <div className="f">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__leaf flower__leaf--5"></div>
                <div className="flower__leaf flower__leaf--6"></div>
                <div className="flower__leaf flower__leaf--7"></div>
                <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
              </div>
            </div>
            <div className="flower__glass"></div>
          </div>
        </div>

        {/*   <div className="Flickty">
      <div className="carousel" data-flickity='{ "autoPlay": true }'>
    <div className="carousel-cell"><img src="/Html/Data/PXH2.jpeg" alt=""/></div>
    <div className="carousel-cell"><img src="/Html/Data/PXH1.jpeg" alt=""/></div>
    <div className="carousel-cell"><img src="/Html/Data/PXH3.jpeg" alt=""/></div>
    <div className="carousel-cell"><img src="/Html/Data/PXH3.jpeg" alt=""/></div>
    <div className="carousel-cell"><img src="/Html/Data/PXH5.jpeg" alt=""/></div>
    </div>
  
    </div>   */}

        <div className="Wel" id="Home">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div className="Wtext">
              <div className="wrapper">
                <svg>
                  <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    WELCOME!!
                  </text>
                </svg>
              </div>
              {/*   <h1>WELCOME TO MY WEB</h1>
          <h2>WE ARE HERE TO SERVE YOU</h2>   */}
              <Link to="/list">
                <button type="menu">Explore</button>
              </Link>
            </div>
          </div>
          <div className="Filters" data-aos="fade-up" data-aos-duration="2000">
            <input type="search" placeholder="Enter Location" />
            <input type="search" placeholder="Hostel Type" />
            <input type="search" placeholder="Facilities" />
            <p id="Filters-Forward-Btn2">
              <Link href="/Html/Main-Hostels/Hostels-List-Page.html#Hostels-List-Page">
                ➽
              </Link>
            </p>

            <div className="Labels">
              <label for="##">Where to go !!</label>
              <label for="##">Match Gender !!</label>
              <label for="##">Facilities for you !!</label>
            </div>
          </div>
        </div>

        <section className="MostViewed">
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="div3">
              <h2 id="ran">HIGHLY PREFERED HOSTELS</h2>
              <div className="boxs">
                <Card />
                <Card />
                <Card />

                {/* <Link
                  href="/"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="70"
                >
                  <div className="box1">
                    <h2>
                      <span className="sp">#1</span>
                    </h2>

                    <div className="tra">
                      <h2>Aswad Hostel</h2>
                      <div className="SideCome">
                        <small>Top Hostel</small>
                        <button>Check More</button>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="70"
                >
                  <div className="box1">
                    <h2>
                      <span className="sp">#2</span>
                    </h2>

                    <div className="tra">
                      <h2>Aswad Hostel</h2>
                      <div className="SideCome">
                        <small>Top Hostel</small>
                        <button>Check More</button>
                      </div>
                    </div>
                  </div>
                </Link>
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
                        <button>Check More</button>
                      </div>
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/*   <----------------------Hostels Details HTML-------------------------------   */}
        <div
          className="HostD-Div1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="70"
        >
          <h1>SOME HOSTELS</h1>
        </div>

        <div className="HostD-Div2">
          <div className="Find">
            <h2
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              FIND WHAT'S BEST FOR YOU!!
            </h2>
            <h1
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              WITH US
            </h1>
          </div>
        </div>

        <div className="HostD-Div3">

          <ViewHostel/>
          <ViewHostel/>
          {/* <div
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
              <Link href="/">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="./Front+Nav-Images/h18.jpg" alt="" />
          </div>
          <div
            className="FirstHost-Left"
            data-aos="fade-left"
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
              <Link href="/">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="/Front+Nav-Images/h18.jpg" alt="" />
          </div> */}
        </div>

        <div className="HostD-Div3">
          <ViewHostel/>
          {/* <div
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
              <Link href="/">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="/Front+Nav-Images/h18.jpg" alt="" />
          </div> */}
          {/* <div
            className="FirstHost-Left"
            data-aos="fade-left"
            data-aos-offset="100"
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
              <Link href="/">
                <button>
                  <Link href="../Html/Main-Hostels/Hostels-List-Page.html#Hostels-List-Page">
                    View Hostel
                  </Link>
                </button>
              </Link>
            </div>
            <img src="/Front+Nav-Images/h18.jpg" alt="" />
          </div> */}
          <ViewHostel/>
        </div>
        <div className="HostD-Div3">
          {/* <div
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
              <Link href="/">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="/Front+Nav-Images/h18.jpg" alt="" />
          </div> */}
          <ViewHostel/>
          {/* <div
            className="FirstHost-Left"
            data-aos="fade-left"
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
              <Link href="/">
                <button>View Hostel</button>
              </Link>
            </div>
            <img src="/Front+Nav-Images/h18.jpg" alt="" />
          </div> */}
          <ViewHostel/>
        </div>

        <div className="Dbut">
          <Link to="/list" style={{textDecoration:"none"}}>
          <button id="More-Hostels-Btn1">More Hostels</button>
          </Link>
        </div>
        {/*   <----------------------Hostels Details Ends-------------------------------   */}

        {/*   <----------------------Aims  HTML-------------------------------   */}

        <div className="Aim-Div1" data-aos="fade-up" data-aos-duration="1000">
          <h1>Services - Areas - Routes</h1>
        </div>
        <div className="Aims-Main">
          <div
            className="Aims-Portion1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="70"
          >
            <div className="Portion1-Data">
              <h3>Following Services we are Providing For your facilities!</h3>
              <ul>
                <li>Boys Hostel</li>
                <li>Girls Hostels</li>
                <li>Locations</li>
                <li>Hostel Details</li>
                <li>Owner Details</li>
                <li>Inruite Hostel</li>
                <li>Others</li>
              </ul>
            </div>
            <div className="Portion1-img">
              <img src="/Front+Nav-Images/srvs.png" alt="" />
            </div>
          </div>

          <div
            className="Aims-Portion2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="70"
          >
            <div className="Portion2-Data">
              <h3>Areas That we are covering following!</h3>
              <ul>
                <li>Near Abbasia Campus</li>
                <li>Bus Stand</li>
                <li>Fareed Gate</li>
                <li>Sadar Puli</li>
                <li>One Unit</li>
                <li>Technical Chowk</li>
                <li>Mela Gali</li>
                <li>10 BC</li>
                <li>Khurram Petrolium</li>
                <li>Near Baghdad Campus</li>
              </ul>
            </div>
            <div className="Portion2-img">
              <img src="/Front+Nav-Images/rds.png" alt="" />
            </div>
          </div>

          <div
            className="Aims-Portion3"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="70"
          >
            <div className="Portion3-Data">
              <h3>Following Colonies!</h3>
              <ul>
                <li>Riaz Colony</li>
                <li>Goher Town</li>
                <li>Muslam Town</li>
                <li>Maqbool Colony</li>
                <li>Commercial Area</li>
                <li>Technical Chowk</li>
                <li>Mela Gali</li>
                <li>10 BC</li>
                <li>Khurram Petrolium</li>
                <li>Near Baghdad Campus</li>
              </ul>
            </div>
            <div className="Portion3-img">
              <img src="/Front+Nav-Images/cols.png" alt="" />
            </div>
          </div>
        </div>

        {/*   <----------------------Aims  HTML Ends-------------------------------   */}

        <div className="div4">
          <div className="d4a">
            <Link href="/">
              <div data-aos="zoom-in" data-aos-duration="1000">
                Hostel
              </div>
            </Link>
          </div>
          <div className="d4a">
            <Link href="/">
              <div data-aos="zoom-in" data-aos-duration="1500">
                Hostel
              </div>
            </Link>
          </div>
          <div className="d4a">
            <Link href="/">
              <div data-aos="zoom-in" data-aos-duration="2000">
                Hostel
              </div>
            </Link>
          </div>
          <div className="d4a">
            <Link href="/">
              <div data-aos="zoom-in" data-aos-duration="2500">
                Hostel
              </div>
            </Link>
          </div>
          <div className="d4a">
            <Link href="/">
              <div data-aos="zoom-in" data-aos-duration="3000">
                Hostel
              </div>
            </Link>
          </div>
        </div>

        
      </body>
    </div>
  );
};

export default Home;
