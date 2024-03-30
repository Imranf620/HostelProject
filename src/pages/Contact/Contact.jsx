import React from "react";
import { Link } from "react-router-dom";
import "./contact.css"
import Navbar from "../../components/navbar.jsx/Navbar";

const Contact = () => {

  const scrollToTop = () => {
    const element = document.getElementById('Contact-Main');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <body id="Contact-Main">
      <div data-aos="fade-down" data-aos-duration="2000">
        <div class="image">
          <div class="contact">
            <div class="contact-styles">
              <div class="contact-style1"></div>
              <div class="contact-style2"></div>
              <div class="contact-style3"></div>
            </div>
            <div class="a1">
              <Link href="Front-Main-Page.html#Home-Main">Home</Link>
            </div>
            <h1 class="mb-0 bread">Contact Us</h1>
          </div>
        </div>
      </div>

      <Navbar/>

      {/* <div class="Nav">
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
          <label></label>
          <div class="Logo">
            <Link href="Front-Main-Page.html#Home-Main">
              <img src="/Front+Nav-Images/logo.png" alt="" />
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
              <button>SIGN_IN</button>
            </Link>
            <Link href="Front-SignUp-Page.html#SignUp-Main">
              <button>SIGN_UP</button>
            </Link>
          </div>
        </nav>
      </div> */}

      <div class="ClickToTop" onClick={scrollToTop}>
        <Link href="#Contact-Main">⇮</Link>
      </div>

      <div class="container-fluid bb ">
        <div class="row cont-part2 ">
          <div class="aa col-12 col-sm-6 col-md-4 col-xl-6 col-xxl-6 ">
            <div data-aos="fade-right" data-aos-duration="2000">
              <div class="Flickty2">
                <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Bridge.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Desert.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/dine.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Mount-Home.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Host-Rooms.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/dine.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Mount-Home.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Sea-Town.jpeg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/Front+Nav-Images/Img-Frame.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            class="col-12 col-sm-12 col-md-8 col-xl-6 col-xxl-6 hmza2"
          >
            <div class="hamza">
              <div class="Contact-Corners2">
                <div class="contact-corners">
                  <div class="corn1"></div>
                  <div class="corn2"></div>
                  <div class="corn3"></div>
                  <div class="corn4"></div>
                </div>
              </div>

              <div class="Con2-rside">
                <h1 class="h11">Want to Talk? |</h1>
                <h4 class="para">
                  Welcome to [Your Hostel Name]! We're here to assist you and
                  provide the best possible experience during your stay. If you
                  have any questions, concerns, or feedback, please don't
                  hesitate to contact us using the information below
                </h4>
                <h4 class="para">
                  For general inquiries, feedback, or assistance, please email
                  our customer support team at [General Email Address]. We
                  strive to respond to all inquiries within 24 hours
                </h4>
                <button>Learn More </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid confld">
        <div class="row cont-part3 d-flex justify-content-center">
          <div class="col-11 col-ms-12 col-md-6 col-xl-6 col-xxl-6 ">
            <div data-aos="fade-right" data-aos-duration="2000">
              <div class="ahmed ">
                <h1 class="h11 ">Send Your Thoughts |</h1>
                <p class="para my-4">Waiting for your message!</p>
                <div class="ddd ">
                  <div class="container my-4">
                    <input required="" type="text" name="text" class="input" />
                    <label class="label">FULL NAME</label>
                  </div>
                  <div class="container my-4">
                    <input required="" type="text" name="text" class="input" />
                    <label class="label">EMAIL</label>
                  </div>
                </div>

                <div class="container my-4">
                  <input required="" type="text" name="text" class="input1" />
                  <label class="label">SUBJECT</label>
                </div>

                <div class="container my-4">
                  <input required="" type="text" name="text" class="input1" />
                  <label class="label">MESSAGE</label>
                </div>
                <button class="ms-3">SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 cont3-Rit2">
            <div data-aos="fade-left" data-aos-duration="2000">
              <div class="main">
                <div>
                  <h1 class="h11"> Let's get in Touch |</h1>
                  <h4>We are open for any suggestion!</h4>
                </div>
                <div class="main1">
                  <div class="location">
                    <i class="fa-solid fa-location-dot fa-xl"></i>
                  </div>
                  <div class="address d-flex align-items-center ">
                    <h4>
                      Address:{" "}
                      <h5 class="ms-3">
                        198 west 31 street,bahawalpur 665 pakistan
                      </h5>
                    </h4>
                  </div>
                </div>
                <div class="main1">
                  <div class="location">
                    <i class="fa-solid fa-phone fa-xl"></i>{" "}
                  </div>
                  <div class="address d-flex align-items-center ">
                    <h4>
                      Phone:{" "}
                      <h5 class="ms-3">
                        <Link href="##">+3456798365</Link>
                      </h5>
                    </h4>
                  </div>
                </div>
                <div class="main1">
                  <div class="location">
                    <i class="fa-sharp fa-solid fa-paper-plane fa-xl"></i>
                  </div>
                  <div class="address d-flex align-items-center ">
                    <h4>
                      Email:{" "}
                      <h5 class="ms-3">
                        <Link href="##">@khangmail.com</Link>
                      </h5>
                    </h4>
                  </div>
                </div>

                <div class="main1">
                  <div class="location">
                    <i class="fa-solid fa-earth-oceania fa-xl"></i>
                  </div>
                  <div class="address adresss d-flex align-items-center ">
                    <h4>
                      Website{" "}
                      <h5 class="ms-3">
                        <Link href="##">your site.com</Link>
                      </h5>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pti p-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          <div class=" container-fluid pt-5 p-5 downmain">
            <div class="row">
              <div class="rental col-6 col-sm-12 col-md-6 col-xl-3  col-xxl-3">
                <h1 class="pb-4">Vacation Rental</h1>
                <p>
                  <h4>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia{" "}
                  </h4>
                </p>
                <Link href="/">
                  <h4>Read more &gt;</h4>
                </Link>
              </div>
              <div class="anker col-6 col-sm-12 col-md-6 col-xl-3 col-xxl-3 ">
                <h1 class="pb-4">Services</h1>
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
              <div class="col-6 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
                <h1 class="pb-4">Tag cloud</h1>
                <div class="tagcloud">
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
              <div class="col-12 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
                <h1 class="pb-4">Subscribe</h1>
                <div class="input-container">
                  <input placeholder="Enter your email" type="text" />
                  <button class="button w-50">email</button>
                </div>
                <h1 class="mt-5">Follow us</h1>
                <div class="main5 d-flex justify-content-between">
                  <div class="last">
                    <Link href="/">
                      <i class="fa-brands fa-twitter fa-2xl"></i>
                    </Link>
                  </div>
                  <div class="last">
                    <Link href="/">
                      <i class="fa-brands fa-facebook-f fa-2xl"></i>
                    </Link>
                  </div>
                  <div class="last">
                    <Link href="/">
                      <i class="fa-brands fa-instagram fa-2xl"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
      </script>

  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
      integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
      </script>
<script>
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
</script>
</body>
<script>
  AOS.init();
</script> */}
    </body>
  );
};

export default Contact;
