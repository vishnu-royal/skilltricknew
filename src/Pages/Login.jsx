// src/pages/Login.jsx
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    // Optional: Add dynamic changes if needed here
    document.body.classList.add("login-page"); // Add class for page-specific styles
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  // Toggle Password Visibility
  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  };

  return (
    <>
    <style>
        {`
        header,footer{display:none}
        body{background:transparent}
         * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', 'Space Grotesk', sans-serif;
}
html {
    scrollbar-width: none;
    -ms-overflow-style: none; 
}

html::-webkit-scrollbar {
    display: none;
}

/* default CSS */
.text-primary{color: #fff  !important;}

/* Login page CSS */
.login-page .container {
    position: relative;
    width: 70vw;
    height: 80vh;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
.login-page .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 101%;
    /* background: linear-gradient(-45deg, #df4adf, #520852); */
    background: linear-gradient(-45deg, #037ba0, #520852);
    z-index: 6;
    transform: translateX(100%);
    transition: 1s ease-in-out;
}
.login-page .signin-signup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
}
.login-page form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    min-width: 238px;
    padding: 0 10px;
}
.login-page form.sign-in-form {
    opacity: 1;
    transition: 0.5s ease-in-out;
    transition-delay: 1s;
}
.login-page form.sign-up-form {
    opacity: 0;
    transition: 0.5s ease-in-out;
    transition-delay: 1s;
}
.login-page .title {
    font-size: 35px;
    color: #1882ae;
    margin-bottom: 10px;
}
.login-page .input-field {
    width: 100%;
    height: 50px;
    background: #f0f0f0;
    margin: 10px 0;
    border: 2px solid #1882ae;
    border-radius: 50px;
    display: flex;
    align-items: center;
}
.login-page .input-field i {
    flex: 1;
    text-align: center;
    color: #666;
    font-size: 18px;
}
.login-page .input-field .form-control {
    flex: 5;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #444;
}
.login-page .input-field .form-control:focus{box-shadow: none}
.login-page .ttl{font-weight: 700;font-size: 36px;margin-bottom: 20px;}
/* .login-page .btn {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background: #1882ae;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    text-transform: uppercase;
    cursor: pointer;
}
.login-page .btn:hover {
    background: #000;
} */
.login-page .social-text {
    margin: 10px 0;
    font-size: 16px;
}
.login-page .social-media {
    display: flex;
    justify-content: center;
}
.login-page .content .img-wrap img{width: 150px;margin-bottom: 15px;}
.login-page .social-icon {
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    border: 1px solid #444;
    border-radius: 50px;
    margin: 0 5px;
}
.login-page a {
    text-decoration: none;
}
.login-page .btn-outline-primary{border:1px solid #ddd;box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.login-page .btn-outline-primary:hover{background:transparent;color:#000;box-shadow:0 0 4px rgba(0,0,0,0.2);}
.login-page .social-icon:hover {
    color: #1882ae;
    border-color:#1882ae;
}
.login-page .panels-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.login-page .panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 35%;
    min-width: 238px;
    padding: 0 10px;
    text-align: center;
    z-index: 6;
}
.login-page .left-panel {
    pointer-events: none;
}
.login-page .content {
    color: #fff;
    transition: 1.1s ease-in-out;
    transition-delay: 0.5s;
}
.login-page .panel h3 {
    font-size: 24px;
    font-weight: 600;
}
.login-page .panel p {
    font-size: 15px;
    padding: 10px 0;
}
.login-page .image {
    width: 100%;
    transition: 1.1s ease-in-out;
    transition-delay: 0.4s;
}
.login-page .left-panel .image,
.login-page .left-panel .content {
    transform: translateX(-200%);
}
.login-page .right-panel .image,
.login-page .right-panel .content {
    transform: translateX(0);
}
.login-page .account-text {
    display: none;
}
/*Animation*/
.login-page .container.sign-up-mode::before {
    transform: translateX(0);
}
.login-page .container.sign-up-mode .right-panel .image,
.login-page .container.sign-up-mode .right-panel .content {
    transform: translateX(200%);
}
.login-page .container.sign-up-mode .left-panel .image,
.login-page .container.sign-up-mode .left-panel .content {
    transform: translateX(0);
}
.login-page .container.sign-up-mode form.sign-in-form {
    opacity: 0;
}
.login-page .container.sign-up-mode form.sign-up-form {
    opacity: 1;
}
.login-page .container.sign-up-mode .right-panel {
    pointer-events: none;
}
.login-page .container.sign-up-mode .left-panel {
    pointer-events: all;
}
/* ./Login page css */
.login-page .hiddenbg{padding: 150px 200px;overflow: hidden;}
.login-page .hiddenbg img{box-shadow: 0 24px 88px rgba(0, 0, 0, .55);border-radius:37px;height: 500px;;}
.login-page .img-wrap img{width: 150px;padding:24px;}


.hiddenbg{padding: 150px 200px;overflow: hidden;}
.hiddenbg img{box-shadow:0 24px 88px rgba(0, 0, 0, .55);}

.form-section .form-group{width: 100%;margin-bottom: 10px;}
.form-group label{text-align: left;width: 100%;color: #7b8396;font-size: 14px;}
.login-page .container-tight{padding: 0px 150px;}


.login-page .btn-outline-primary{/*! box-shadow:0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1); */ transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;background: transparent;
    color: #000;
    font-size: 13px;}

.login-page .form-section .form-control::placeholder {  font-size: 12px;}
.login-page .form-section .form-control{border-radius: 10px;}
.login-page .btn-blue{background:#3e8da6;width:100%;color: #fff;border-radius: 50px;}
.login-page .btn-blue:hover{opacity: 0.8;}
.login-page .fs-12{font-size:12px}

.login-page .lqd-input-label-txt{color: #7b8396;font-size: 14px;}
.login-page .text-indigo-600{font-size:14px}


.login-page .form-group .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.login-page .dark-text-white{color: #828282 !important;}
.login-page .bg-secondary{background-color: #bebdbd !important;}
.login-page .form-group .toggle-password{color: #828282;font-size: 12px;}



/*Responsive*/
@media (max-width:779px) {
   .login-page .container {
        width: 100vw;
        height: 100vh;
    }
}
@media (max-width:635px) {
   .login-page .container::before {
        display: none;
    }
    .login-page form {
        width: 80%;
    }
    .login-page form.sign-up-form {
        display: none;
    }
    .login-page .container.sign-up-mode2 form.sign-up-form {
        display: flex;
        opacity: 1;
    }
    .login-page .container.sign-up-mode2 form.sign-in-form {
        display: none;
    }
    .login-page .panels-container {
        display: none;
    }
    .login-page .account-text {
        display: initial;
        margin-top: 30px;
    }
}
@media (max-width:320px) {
    .login-page form {
        width: 90%;
    }
}
        `}
      </style>
    <div className="login-page">
      <div className="container-fluid p-0">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-6 mt-5">
            <div className="img-wrap d-flex">
              <a href="/">
              <img src="assets/images/Logo.png" alt="Logo" />
              </a>
            </div>
            <div className="flex-grow d-flex align-items-center w-md-50">
              <div className="w-100 px-4 text-center text-extra-small w-lg-50">
                <div className="container-tight">
                  <h1 className="ttl">Sign in</h1>

                  {/* Social Login Buttons */}
                  <div className="row gx-3">
                    <div className="col-lg-6">
                      <a
                        className="btn btn-outline-primary d-inline-flex align-items-center py-2 px-4 w-100 sm-w-45 text-start"
                        href="https://myaccount.google.com/"
                      >
                        <svg class="shrink-0" width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.001 12.2332C23.001 11.3699 22.9296 10.7399 22.7748 10.0865H12.7153V13.9832H18.62C18.501 14.9515 17.8582 16.4099 16.4296 17.3898L16.4096 17.5203L19.5902 19.935L19.8106 19.9565C21.8343 18.1249 23.001 15.4298 23.001 12.2332Z" fill="#4285F4"></path>
                                            <path d="M12.714 22.5C15.6068 22.5 18.0353 21.5666 19.8092 19.9567L16.4282 17.3899C15.5235 18.0083 14.3092 18.4399 12.714 18.4399C9.88069 18.4399 7.47596 16.6083 6.61874 14.0766L6.49309 14.0871L3.18583 16.5954L3.14258 16.7132C4.90446 20.1433 8.5235 22.5 12.714 22.5Z" fill="#34A853"></path>
                                            <path d="M6.62046 14.0767C6.39428 13.4234 6.26337 12.7233 6.26337 12C6.26337 11.2767 6.39428 10.5767 6.60856 9.92337L6.60257 9.78423L3.25386 7.2356L3.14429 7.28667C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z" fill="#FBBC05"></path>
                                            <path d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z" fill="#EB4335"></path>
                                        </svg>
                        &nbsp; Login with Google
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a
                        className="btn btn-outline-primary d-inline-flex align-items-center py-2 px-4 w-100 sm-w-45 text-start"
                        href="https://www.linkedin.com/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          {/* LinkedIn Icon */}
                          <path
                            d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72v20.56C0 23.23 0.79 24 1.77 24h20.46c0.98 0 1.77-0.77 1.77-1.72V1.72C24 0.77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5c-1.14 0-2.06-0.92-2.06-2.06s0.92-2.06 2.06-2.06 2.06 0.92 2.06 2.06-0.92 2.06-2.06 2.06zm15.11 12.95h-3.56v-5.57c0-1.33-0.03-3.04-1.85-3.04s-2.13 1.44-2.13 2.94v5.67H9.3V9h3.42v1.57h0.05c0.48-0.91 1.65-1.85 3.4-1.85 3.64 0 4.32 2.4 4.32 5.52v6.21z"
                            fill="#0077B5"
                          />
                        </svg>
                        &nbsp; Login with LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-3 d-flex align-items-center gap-3 text-black opacity-60 dark-text-white dark-opacity-60">
                    <span
                      className="d-inline-block flex-grow-1 bg-secondary opacity-10"
                      style={{ height: "1px" }}
                    ></span>
                    or
                    <span
                      className="d-inline-block flex-grow-1 bg-secondary opacity-10"
                      style={{ height: "1px" }}
                    ></span>
                  </div>

                  {/* Login Form */}
                  <form className="w-100 form-section">
                    <div className="form-group position-relative">
                      <label>Email Address</label>
                      <input
                        id="email_register"
                        required
                        className="form-control"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <div className="position-relative">
                        <input
                          id="password"
                          required
                          className="form-control"
                          type="password"
                          placeholder="Your password"
                        />
                        <span
                          className="toggle-password"
                          onClick={togglePassword}
                        >
                          <i id="eye-icon" className="fas fa-eye"></i>
                        </span>
                      </div>
                    </div>

                    {/* Remember & Forgot Password */}
                    <div className="my-2 d-flex justify-content-between w-100">
                      <div className="grow">
                        <label
                          className="lqd-input-label d-flex align-items-center"
                          htmlFor="remember"
                        >
                          <input
                            id="remember"
                            className="lform-control"
                            type="checkbox"
                          />
                          <span className="lqd-input-label-txt mx-1">
                            {" "}
                            Remember me
                          </span>
                        </label>
                      </div>
                      <div className="ms-auto text-end">
                        <a
                          className="text-indigo-600"
                          href="/forgot-password"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    {/* Sign In Button */}
                    <button className="btn btn-md btn-blue mt-2" type="submit">
                      Sign in
                    </button>
                  </form>

                  {/* Sign Up Link */}
                  <div className="text-muted mt-4 mb-2 lqd-input-label-txt">
                    Don't have an account yet?{" "}
                    <a
                      className="font-medium text-indigo-600 underline fs-12"
                      href="/register"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side with Background */}
          <div className="col-lg-6">
            <div
              className="hiddenbg"
              style={{
                backgroundImage: "url(assets/images/bg-auth.jpg)",
              }}
            >
              <img
                className="translate-x-[27%]"
                src="assets/images/dash-mockup.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
