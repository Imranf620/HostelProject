import React from 'react'
import { Link } from 'react-router-dom'
import "./signIn.css"

const SignIn = () => {
  return (
    <div>
            <body id="SignIn-Main">
      <div className="container px-5 py-4 mx-auto">
        <div className="card card0 overflow-hidden">
          <div className="d-flex flex-lg-row flex-column-reverse overflow-hidden">
            <div
              className="card card1"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10 my-3">
                  <div className="row  justify-content-center px-3 mb-3">
                    <Link
                      href="Front-Main-Page.html#Home-Main"
                      className="anchset"
                    >
                      <img id="logo" alt="" src="/Front+Nav-Images/logo.png" />
                    </Link>
                  </div>
                  <h3 className="mb-4 text-center heading">We are Hostler'z</h3>

                  <h6 className="msg-info">Please login to your account</h6>

                  <div className="form-group">
                    <label className="form-control-label pb-2 text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="User ID"
                      className="form-control signin-form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-control-label pt-2 pb-2 text-muted">
                      Password
                    </label>
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>

                  <div className="row justify-content-center my-3 px-3">
                    <button className="btn-block btn-color">
                      Login to H4U
                    </button>
                  </div>

                  <div className="row justify-content-center my-2">
                    <Link href="/">
                      <small className="text-muted">Forgot Password?</small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bottom text-center mb-5">
                <p href="/" className="sm-text mx-auto mb-3">
                  Don't have an account?
                  <Link to="/signup">
                    <button className="btn btn-white ml-2">Create new</button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="card card2 overflow-hidden">
              <div
                className="my-auto mx-md-5  right"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <img src="/Front+Nav-Images/Login-right-2.png" alt="" />
                <h3>We are more than just a company.</h3>
                <small>
                  Welcome to H4U, your one-stop solution for seamless hostel
                  management and hassle-free bookings. Our platform offers a
                  user-friendly interface that caters to both hostel
                  administrators and guests, streamlining the entire process for
                  a more efficient and enjoyable experience.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      
{/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
    <script>
        AOS.init();
      </script>  */}
    </body>
    </div>
  )
}

export default SignIn