import React from "react";
import "./services.css"
import Navbar from "../../components/navbar.jsx/Navbar";
import { Link } from "react-router-dom";

const Services = () => {

    const scrollToTop = () => {
        const element = document.getElementById('Services-Main');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <body id="Services-Main">

        <Navbar/>
      {/* <div class="Nav">
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
          <label></label>
          <div class="Logo">
            <Link href="Front-Main-Page.html#Home-Main">
              <img
                src="/Front+Nav-Images/logo.png"
                alt=""
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link href="Front-Main-Page.html#Home-Main">Home</Link>
            </li>
            <li>
              <Link class="dropdown-arrow" href="http://">
                Products
              </Link>
              <ul class="sub-menus">
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
                class="dropdown-arrow"
                href="Front-Services-Page.html#Services-Main"
              >
                Services
              </Link>
              <ul class="sub-menus">
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
              <Link href="Front-Contact-Page.html#Contact-Main">Contact Us</Link>
            </li>
          </ul>

          <div class="Signin-Up">
            <Link href="Front-Login-Page.html#SignIn-Main">
              <button>Sign_In</button>
            </Link>
            <Link href="Front-SignUp-Page.html#SignUp-Main">
              <button>Sign_Up</button>
            </Link>
          </div>
        </nav>
      </div> */}

      <div class="ClickToTop" onClick={scrollToTop}>
        <Link href="#Services-Main">⇮</Link>
      </div>

      <div class="Services">
        <div class="container-fluid">
          <div class="row ps-4">
            <div
              class="serviceA col-6 col-sm-12 col-md-6"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div class="heading  ms-3">
                <h1 style={{color: "#402619"}}>
                  <span>HOSTELS DISCOVERY,</span> Check for booking
                </h1>
                <small>
                  Explore a diverse selection of hostels worldwide. Whether
                  you're a budget traveler, a solo adventurer, or a group of
                  friends, our platform features a wide array of hostels with
                  varying amenities and atmospheres. Discover hidden gems and
                  popular destinations alike.
                </small>
                <button class="mt-4 mb-1">Start looking</button>
              </div>
            </div>
            <div
              class="service4 col-3 col-sm-12 col-md-3"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div class="carton">
                <img
                  src="/Front+Nav-Images/CartoonSERVICEtable1-removebg-preview.png"
                  alt=""
                />
                <div class="service2 mb-5  d-flex justify-content-start">
                  <div class="service3">
                    <div class="logo55">
                      <i class="fa-solid fa-bolt" style={{color: "#f5f7f9"}}></i>
                    </div>
                    <p>#TRENDING!</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="serviceB col-3 col-sm-12 col-md-3"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div class="carda">
                <div class="carda-img">
                  <div class="a77">
                    <img
                      src="/Front+Nav-Images/CartoonSERVICEtable1-removebg-preview.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="carda-title" style={{zIndex:"10"}}>
                  Why Choose Us?
                </div>
                <div class="carda-subtitle"style={{zIndex:"10"}}>
                  <small>
                    <b>Variety:</b> Choose from a wide range of hostels, each
                    offering a unique experience.
                  </small>
                  <small>
                    <b>Reliability:</b> Count on us for accurate information and
                    secure bookings.
                  </small>
                  <small>
                    <b>Convenience:</b> Enjoy a hassle-free booking process with
                    our user-friendly platform.
                  </small>
                  <small>
                    <b>Affordability:</b> Find budget-friendly options without
                    compromising on quality.
                  </small>
                </div>
                <hr class="carda-divider" />
                <div class="carda-footer">
                  <div class="carda-price" style={{zIndex:"10"}}>
                    See more
                  </div>
                  <button class="carda-btn">click</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="onestop" data-aos="fade-up" data-aos-duration="2000">
          <h1>FURTHER!!</h1>
        </div>
        <div class="container mb-5">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="service5 col-7 col-sm-12 col-md-8">
              <div class="mainbook">
                <div
                  class="book"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h2>Seamless Booking System</h2>
                  <p>
                    Our user-friendly booking system makes it easy to find and
                    book your ideal hostel accommodation |
                  </p>
                  <div class="fancyA">
                    {" "}
                    <Link to="/services"> Red more</Link>
                    <div class="fancy">
                      <img
                        src="/Front+Nav-Images/Desert.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="cover">
                    <small>Hover Me</small>
                  </div>
                </div>
                <div
                  class="book"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h2 class="m-3">Exclusive Offers</h2>
                  <p>
                    We understand the value of a good deal. Keep an eye out for
                    discounts, and special offers available only to our users |
                  </p>
                  <div class="fancyA">
                  <Link to="/services"> Red more</Link>
                    <div class="fancy">
                      <img
                        src="/Front+Nav-Images/Gravity.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="cover">
                    <small>Hover Me</small>
                  </div>
                </div>
                <div
                  class="book"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h2 class="m-3">Interactive Maps</h2>
                  <p>
                    Our interactive maps provide a visual representation of the
                    hostel's location, allowing you to assess its proximity to
                    local attractions |
                  </p>
                  <div class="fancyA IntMapsImg">
                  <Link to="/services"> Red more</Link>
                    <div class="fancy ">
                      <img
                        src="/Front+Nav-Images/h18.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="cover">
                    <small>Hover Me</small>
                  </div>
                </div>
                <div
                  class="book"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <h2 class="m-3">Customer Support</h2>
                  <p>
                    Our dedicated customer support team is available to assist
                    you with any questions or concerns you may have |
                  </p>
                  <div class="fancyA">
                  <Link to="/services">  Red more</Link>
                    <div class="fancy">
                      <img
                        src="/Front+Nav-Images/h4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="cover">
                    <small>Hover Me</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="service6 col-3  col-sm-12 col-md-4">
              <div class="card" data-aos="zoom-in" data-aos-duration="2000">
                <h2>Detailed Hostel Information at Your Fingertips</h2>
                <p>
                  Each hostel listing on our website provides comprehensive
                  information to help you make an informed decision. Explore
                  high-quality images, read detailed descriptions, and check
                  reviews from fellow travelers!
                </p>
                <Link to="/services"> Read more</Link>
                <div class="learn">
                  <img
                    src="/Front+Nav-Images/h12.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container bg-light">
          <div
            class="row service-portion3"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div class="service7 col-6 col-sm-12 col-md-6">
              <div class="sera">
                <div class="ser70">
                  <div class="ser71">
                    <img
                      src="/Front+Nav-Images/h14.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ser72">
                    <img
                      src="/Front+Nav-Images/h13.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="service8 col-6 col-sm-12 col-md-6">
              <div class="ser80">
                <h1>Unparalleled Filter Options for Personalized Searches!</h1>
                <p>
                  Our advanced filter options allow you to narrow down your
                  search based on specific criteria, such as:
                </p>
                <ul>
                  <li>
                    {" "}
                    <b>Hostel type:</b> Choose from private rooms, shared dorms,
                    or a mix of both
                  </li>
                  <li>
                    <b>Location:</b> Select hostels in the heart of the city, in
                    a peaceful suburb, or near popular attractions
                  </li>
                  <li>
                    <b>Amenities:</b> Find hostels with Wi-Fi, laundry
                    facilities, common areas, and more
                  </li>
                  <li>
                    <b>Price range:</b> Set your budget and find hostels that
                    fit your financial needs.
                  </li>
                  <button class="mt-4">More intrested |</button>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="sermainA">
          <div class="ser11" data-aos="zoom-out-up" data-aos-duration="2000">
            <div class="ser9">
              <h1 class="">Featured product of the season</h1>
            </div>
            <div class="ser10">
              <button>All</button>
              <select name="" id="">
                <option value="">Hostels</option>
                <option value="">Hostels</option>
                <option value="">Hostels</option>
              </select>
              <select name="" id="">
                <option value="">City</option>
                <option value="">Hostels</option>
                <option value="">Hostels</option>
              </select>
              <select name="" id="">
                <option value="">Location</option>
                <option value="">Hostels</option>
                <option value="">Hostels</option>
              </select>
              <button>Price</button>
            </div>
          </div>
          <div class="sermain" data-aos="zoom-out-up" data-aos-duration="2000">
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h15.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/H1.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h13.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h2.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/hos1.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h16.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h5.jpg"
                alt=""
              />
            </div>
            <div class="ser12">
              <img
                src="/Front+Nav-Images/h15.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="ser555a">
          <h1>SPECIAL OFFER👇</h1>
          <div
            class="container ser555"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <div class="row">
              <div class="ser13 col-8 col-sm-12 col-md-8">
                <h1 class="">
                  Join our newsletter and never miss a great offer
                </h1>
                <div class="input-group">
                  <input
                    type="email"
                    class="input"
                    id="Email"
                    name="Email"
                    placeholder="Enter your email here"
                    autocomplete="off"
                  />
                  <input class="button--submit" value="join us" type="submit" />
                </div>
              </div>
              <div class="ser14 col-2 col-sm-12 col-md-4">
                <div class="ser15">
                  <img
                    src="/Front+Nav-Images/h12.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
        <script>
            AOS.init();
          </script>
</body>
<script>
    AOS.init();
</script> */}
    </body>
  );
};

export default Services;
