import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css"

const SignUp = () => {
  return (
    <body id="SignUp-Main">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <Link
              to="/"
              className="navbar-brand"
            >
              <img src="/Front+Nav-Images/logo.png" alt="logo" />
              <p className="text-body">Hostel4u</p>
            </Link>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row  align-items-center">
          {/* <!-- For Demo Purpose --> */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
              alt=""
              className="img-fluid mb-3"
            />
            <h1>Create an Account</h1>
            <p className="font-italic  mb-0">
              Create your account now to get facilitate by our services.
            </p>
            <p className="font-italic ">
              Click if you :{" "}
              <Link href="Front-Contact-Page.html" className="text-danger">
                <u>Want Help</u>
              </Link>
            </p>
          </div>

          {/* <!-- Registeration Form --> */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form
              action="#"
              className="Sign-Form"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="row">
                {/* <!-- First Name --> */}
                <div className="FLname">
                  <div className="input-group  mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 py-2 border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control bg-white  border-md"
                    />
                  </div>

                  {/* <!-- Last Name --> */}
                  <div className="input-group  mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 py-2 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control bg-white border-md"
                    />
                  </div>
                </div>
                {/* <!-- Email Address --> */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white py-2 px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white border-md"
                  />
                </div>
                {/* <!-- Phone Number --> */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white py-2 px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>

                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control bg-white border-md  pl-3"
                  />
                </div>
                .{/* <!-- Job --> */}
                {/* <!-- */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white py-2 px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="job"
                    name="jobtitle"
                    className="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value="">Choose your job</option>
                    <option value="">Designer</option>
                    <option value="">Developer</option>
                    <option value="">Manager</option>
                    <option value="">Accountant</option>
                  </select>
                </div>
                {/* --> */}
                {/* <!-- Password --> */}
                <div className="FLname Pass2">
                  <div className="input-group  mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white py-2 px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>

                  <div className="input-group  mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white py-2 px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted"></i>
                      </span>
                    </div>
                    <input
                      id="passwordConfirmation"
                      type="text"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </div>
                </div>
                <div
                  className="form-group col-12 col-lg-12 mx-auto mb-0 "
                  style={{ zIndex: "20" }}
                >
                  <Link href="/" className="btn sbmt btn-primary  py-2">
                    <span className="font-weight-bold">
                      Create your account
                    </span>
                  </Link>
                </div>
                <div
                  className="form-group col-lg-12 mx-auto d-flex align-items-center my-2"
                  style={{ zIndex: "20" }}
                >
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small font-weight-bold ">OR</span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
                <div className="Sign-Up-Socials">
                  <Link href="/" className="btn btn-primary">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    <span className="font-weight-bold">
                      Continue with Facebook
                    </span>
                  </Link>
                  <Link href="/" className="btn btn-primary ">
                    <i
                      className="fa-brands fa-twitter "
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    <span className="font-weight-bold">
                      Continue with Twitter
                    </span>
                  </Link>
                </div>
                <div
                  className="text-center mt-3 w-100"
                  style={{ zIndex: "20" }}
                >
                  <p className="font-weight-bold">
                    Already Registered?{" "}
                    <Link
                      to="/signin"
                      className="text-danger ml-2"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 
<script>
  $(function () {
$('input, select').on('focus', function () {
  $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
});
$('input, select').on('blur', function () {
  $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
});
});

</script> */}

      {/* <!-- Bootstrap JavaScript Libraries --> */}
      {/* 
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
</script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
</script>
<script>
AOS.init();
</script> */}
    </body>
  );
};

export default SignUp;
