import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Navbar from "../../components/navbar.jsx/Navbar";

const About = () => {

  const scrollToTop = () => {
    const element = document.getElementById('About-Main');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <body id="About-Main" >
        <div className="main">
          <div className="about">
            <div className="main-styles">
              <div className="style1"></div>
              <div className="style2"></div>
              <div className="style3"></div>
            </div>
            <div className="a1">
              <Link to="/">Home</Link>
            </div>
            <h1>About Us</h1>
          </div>
        </div>

        <Navbar/>

        {/* <div className="Nav">
          <nav id="menu">
            <input
              type="checkbox"
              id="responsive-menu"
              onClick="updatemenu()"
            />
            <label></label>
            <div className="Logo">
              <Link href="Front-Main-Page.html#Home-Main">
                <img src="/Front+Nav-Images/logo.png" alt="" />
              </Link>
            </div>
            <ul>
              <li>
                <Link href="Front-Main-Page.html#Home-Main">Home</Link>
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
                <Link href="Front-About-Page.html#About-Main">About</Link>
              </li>
              <li>
                <Link href="Front-Team-Page.html#Team-Main">Team</Link>
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
                <Link href="Front-Contact-Page.html#Contact-Main">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="Signin-Up">
              <Link href="Front-Login-Page.html#SignIn-Main">
                <button>SIGN_IN</button>
              </Link>
              <Link href="Front-SignUp-Page.html#SignUp-Main">
                <button>SIGN_UP</button>
              </Link>
            </div>
          </nav>
        </div> */}

        <div className="ClickToTop" onClick={scrollToTop}>
          <Link href="#About-Main">⇮</Link>
        </div>
        <div
          className="Start"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="70"
        >
          <small>Intentions</small>
        </div>
        <div className="container-fluid ww ">
          <div className="row d-flex intentions justify-content-center">
            <div
              className="col-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              <div className="card card1 cr1 border-2">
                <img
                  src="/Front+Nav-Images/About-History1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title ">History</h3>
                  <p className="card-text">
                    At [Hostel Management Website Name], our story is one of
                    innovation, dedication, and a passion for transforming the
                    landscape of hostel management. From our humble beginnings
                    to becoming a leading force in hospitality technology, our
                    journey is a testament to the power of vision and
                    commitment.
                  </p>
                  <li>
                    Founded in [Year], [Hostel Management Website Name] emerged
                    from the vision of [Founder/Founding Team]
                  </li>
                  <li>
                    In the early days, we faced the challenges synonymous with
                    any groundbreaking venture.
                  </li>
                  <li>
                    Our journey is not just about technology; it's about people.
                  </li>
                </div>
                <button
                  className=" d-flex m-auto mb-3 "
                  style={{ width: "auto" }}
                >
                  <span>Continue</span>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke="black"
                      stroke-width="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="col-4 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              <div className="card card1 cr2 border-2">
                <img
                  src="/Front+Nav-Images/About-Intro2.jpeg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body MissValue">
                  <h3 className="card-title">Introduction</h3>
                  <p className="card-text">
                    At [Hostel Name], our mission is to provide a welcoming and
                    inclusive home away from home for students and travelers.
                    Discover a streamlined and innovative approach to hostel
                    management with [Hostel Management Website Name]. Our
                    platform is designed to empower hostel owners, streamline
                    operations, and enhance the overall guest experience
                  </p>
                  <li>
                    Our comprehensive management tools bring simplicity to the
                    complexities of running a hostel
                  </li>

                  <li>
                    Say goodbye to the hassle of manual tasks and embrace the
                    power of automation
                  </li>

                  <li>
                    Trust and security are paramount in the hospitality industry
                  </li>
                </div>
                <button
                  className=" d-flex m-auto mb-3 "
                  style={{ width: "auto" }}
                >
                  <span>Continue</span>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke="black"
                      stroke-width="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              <div className="card card1 cr3 border-2">
                <img
                  src="/Front+Nav-Images/About-Poilicies1.jpeg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title">Policies</h3>
                  <li>
                    All content on this website, including text, images,
                    graphics, and logos, is the property of [Your Hostel
                    Management Website Name] and is protected by copyright laws
                  </li>
                  <li>
                    We strive to provide accurate and up-to-date information on
                    our website
                  </li>
                  <li>
                    We collect and process personal information in accordance
                    with our Privacy Policy
                  </li>
                  <li>
                    Our website may use cookies to enhance your user experience
                  </li>
                  <li>Our website may contain links to third-party websites</li>
                  <li>
                    We implement reasonable security measures to protect the
                    confidentiality and integrity of information transmitted to
                    and from our website
                  </li>
                </div>
                <button
                  className=" d-flex m-auto mb-3"
                  style={{ width: "auto" }}
                >
                  <span>Continue</span>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke="black"
                      stroke-width="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container happy text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="70"
        >
          <h1>Happy Clients & Feedbacks</h1>
        </div>
        <div className="flickty3">
          <div
            className="carousel"
            data-flickity='{ "groupCells": false }'
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-offset="70"
          >
            <div className="carousel-cell crous1">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row fl3data">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row ">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row ">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row ">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row ">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="card border-0 boki mb-3 mt-5">
                <div className="book">
                  <img src="" alt="" />
                </div>
                <div className="row ">
                  <div className="col-md-2 ">
                    <img
                      src=""
                      className="wakeel rounded-circle mt-4 ms-3 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="para card-text ms-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <h5 className="card-title ms-4 mt-4">Wakeel ahmed</h5>
                      <p className="para card-text ms-4  pb-3">
                        <small className="text-muted">Businessman</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container happy hpyy2 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="70"
        >
          <h1>Here's Our Moto</h1>
        </div>
        <div className="container-fluid akhri">
          <div className="ofr">
            <div
              className="laptop col-6 col-sm-12 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              <img src="/Front+Nav-Images/Img-Frame.jpeg" alt="" />
              <div>
                <h1>Mission and Value</h1>
                <p>
                  At [Hostel Name], our mission is to provide a welcoming and
                  inclusive home away from home for travelers from around the
                  world. We strive to create a vibrant and communal atmosphere
                  where guests can connect, share experiences, and forge lasting
                  memories. Our commitment is to offer affordable accommodation
                  without compromising on comfort and security. Through our
                  dedicated service and cultural initiatives, we aim to enrich
                  the travel experience of every individual who chooses to stay
                  with us.
                </p>
              </div>
            </div>
            <div
              className="col-6 col-sm-12  lastright"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-offset="70"
            >
              <h1 className="offer">Our Core Values |</h1>
              <p>
                At [Hostel Management Website Name], our success is rooted in a
                set of core values that guide our every decision and action.
                These values reflect who we are, what we stand for, and the
                commitment we have to our users, partners, and the community.
              </p>

              <div className="container-fluid OMoto">
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Hospitality</h4>
                  <p>
                    We believe in the power of genuine hospitality to create a
                    warm and inviting environment
                  </p>
                </div>
                <div className="Offer-Img">➲</div>
                <div className="Offer-Data">
                  <h4>Community</h4>
                  <p>
                    Fostering a sense of community is at the heart of what we
                    do. We encourage interaction among guests
                  </p>
                </div>
              </div>
              <div className="container-fluid OMoto">
                <div className="Offer-Img">➲</div>
                <div className="Offer-Data">
                  <h4>Inclusion</h4>
                  <p>
                    Our goal is to make everyone feel at home, regardless of
                    where they come from
                  </p>
                </div>

                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Diversity</h4>
                  <p>
                    We celebrate diversity and strive to create an inclusive
                    space that welcomes guests of all backgrounds, cultures, and
                    identities
                  </p>
                </div>
              </div>
              <div className="container-fluid OMoto">
                <div className="Offer-Img">➲ </div>

                <div className="Offer-Data">
                  <h4>Sustainability</h4>
                  <p>
                    we aim to contribute to a more sustainable and responsible
                    travel industry
                  </p>
                </div>
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Sustainability Factor</h4>
                  <p>
                    We are committed to minimizing our environmental impact.
                    From eco-friendly practices to promoting responsible
                    tourism.
                  </p>
                </div>
              </div>
              <div className="container-fluid OMoto">
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Comfort</h4>
                  <p>We prioritize the comfort and well-being of our guests.</p>
                </div>
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Quality</h4>
                  <p>
                    Whether it's the cleanliness of our facilities, the quality
                    of our amenities, or the friendliness of our staff
                  </p>
                </div>
              </div>
              <div className="container-fluid OMoto">
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Cultural Exchange</h4>
                  <p>
                    We believe in the enriching power of cultural exchange.
                    Through events, partnerships, and local engagement
                  </p>
                </div>
                <div className="Offer-Img">➲ </div>
                <div className="Offer-Data">
                  <h4>Transparency</h4>
                  <p>
                    Open communication and transparency are essential to
                    building trust. We are committed to providing clear
                    information about our services, policies, and any other
                    relevant details to ensure a seamless and enjoyable
                    experience for our guests
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container happy text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="70"
          >
            <h1>Any Query ?</h1>
          </div>
          <div
            className=" pti pb-3"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-offset="70"
          >
            <div className=" container-fluid ablst pt-5 p-5">
              <div className="row">
                <div className="rental col-3 col-sm-12 col-md-6 col-xl-3  col-xxl-3">
                  <h1 className="pb-4">Vacation Rental</h1>
                  <p>
                    <h4 className="">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia
                    </h4>
                  </p>
                  <Link href="/">
                    <h4>Read more &gt;</h4>
                  </Link>
                </div>
                <div className="anker col-3 col-sm-12 col-md-6 col-xl-3 col-xxl-3 ">
                  <h1 className="pb-4">Services</h1>
                  <Link href="/">
                    <h4>Map Direction</h4>
                  </Link>
                  <Link href="/">
                    <h4>Accomodation Service</h4>
                  </Link>
                  <Link href="/">
                    <h4>Great Experience</h4>
                  </Link>
                  <Link href="/">
                    <h4>Perfect central location</h4>
                  </Link>
                </div>
                <div className="col-3 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
                  <h1 className="pb-4">Tag cloud</h1>
                  <div className="tagcloud">
                    <Link href="/">APARTEMENT</Link>
                    <Link href="/">HOME</Link>
                    <Link href="/">VACATION</Link>
                    <Link href="/">RENTAL</Link>
                    <Link href="/">RENT</Link>
                    <Link href="/">HOUSE</Link>
                    <Link href="/">PLACE</Link>
                    <Link href="/">DRINKS</Link>
                  </div>
                </div>
                <div className="col-3 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
                  <h1 className="pb-4">Subscribe</h1>
                  <div className="input-container">
                    <input placeholder="Enter your email" type="text" />
                    <button className="button">email</button>
                  </div>
                  <h1 className="mt-5">Follow us</h1>
                  <div className="main5 d-flex justify-content-between">
                    <div className="last22">
                      <Link href="/">
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                      </Link>
                    </div>
                    <div className="last22">
                      <Link href="/">
                        <i className="fa-brands fa-facebook-f fa-2xl"></i>
                      </Link>
                    </div>
                    <div className="last22">
                      <Link href="/">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bootstrap JavaScript Libraries --> */}
          {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
  <script>
    AOS.init();
  </script> */}
        </div>
      </body>
    </div>
  );
};

export default About;
