import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const AppForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Col md={6}>
      <div className="appForm">
        <div className="toggle_sign mx-auto mx-md-0 my-4">
          <button
            className={`btn sign ${isSignIn ? "active" : ""}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign-in
          </button>
          <button
            className={`btn sign ${isSignIn ? "" : "active"}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign-up
          </button>
        </div>
        <form>
          <Form.Control
            placeholder="Email"
            aria-label="email"
            className="mb-3"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <div className="position-relative mb-3">
            <Form.Control
              type={show ? "text" : "password"}
              placeholder="Password"
              aria-label="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <div className="form_icon" onClick={() => setShow(!show)}>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_957)">
                  <path
                    d="M8.00002 2.66666C4.66669 2.66666 1.82002 4.73999 0.666687 7.66666C1.82002 10.5933 4.66669 12.6667 8.00002 12.6667C11.3334 12.6667 14.18 10.5933 15.3334 7.66666C14.18 4.73999 11.3334 2.66666 8.00002 2.66666ZM8.00002 11C6.16002 11 4.66669 9.50666 4.66669 7.66666C4.66669 5.82666 6.16002 4.33332 8.00002 4.33332C9.84002 4.33332 11.3334 5.82666 11.3334 7.66666C11.3334 9.50666 9.84002 11 8.00002 11ZM8.00002 5.66666C6.89335 5.66666 6.00002 6.55999 6.00002 7.66666C6.00002 8.77332 6.89335 9.66666 8.00002 9.66666C9.10669 9.66666 10 8.77332 10 7.66666C10 6.55999 9.10669 5.66666 8.00002 5.66666Z"
                    fill="#6D747A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_957">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {isSignIn ? (
            <div className="form-actions d-flex justify-content-between mb-3">
              <label htmlFor="checkbox" className="d-flex align-items-center">
                <input type="checkbox" id="checkbox" className="me-2" />
                <p className="m-0">Remember me</p>
              </label>

              <p className="m-0">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_964)">
                    <path
                      d="M12 5.33332H11.3334V3.99999C11.3334 2.15999 9.84002 0.666656 8.00002 0.666656C6.16002 0.666656 4.66669 2.15999 4.66669 3.99999V5.33332H4.00002C3.26669 5.33332 2.66669 5.93332 2.66669 6.66666V13.3333C2.66669 14.0667 3.26669 14.6667 4.00002 14.6667H12C12.7334 14.6667 13.3334 14.0667 13.3334 13.3333V6.66666C13.3334 5.93332 12.7334 5.33332 12 5.33332ZM8.00002 11.3333C7.26669 11.3333 6.66669 10.7333 6.66669 9.99999C6.66669 9.26666 7.26669 8.66666 8.00002 8.66666C8.73335 8.66666 9.33335 9.26666 9.33335 9.99999C9.33335 10.7333 8.73335 11.3333 8.00002 11.3333ZM6.00002 5.33332V3.99999C6.00002 2.89332 6.89335 1.99999 8.00002 1.99999C9.10669 1.99999 10 2.89332 10 3.99999V5.33332H6.00002Z"
                      fill="#939CA3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_964">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Forgot Password
              </p>
            </div>
          ) : (
            <div className="password_strength d-flex   justify-content-between mb-3">
              <p className="m-0 level d-flex">
                <div></div>
                <div></div>
                <div></div>
              </p>
              <p className="m-0">Password strength</p>
            </div>
          )}
          <Button className="main_btn w-100 mb-3" type="submit">
            Continue
          </Button>
        </form>

        <div className="or text-center mb-3">
          <span className="or_hr" />
          <p className="m-0 mx-3">Or connect with</p>
        </div>

        <div className="social_login mb-5">
          <Button
            variant="outline-danger"
            className="social_btn mb-3 w-100 text-center"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_980)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.44815 8.00004C3.44815 7.48041 3.5344 6.98216 3.68853 6.51491L0.992276 4.45604C0.466776 5.52291 0.170776 6.72516 0.170776 8.00004C0.170776 9.27391 0.466526 10.4753 0.991151 11.5415L3.6859 9.47866C3.53328 9.01354 3.44815 8.51716 3.44815 8.00004Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.18212 3.27275C9.311 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2214 0 8.18212 0C5.01612 0 2.29512 1.8105 0.992249 4.456L3.68837 6.51487C4.30962 4.62912 6.0805 3.27275 8.18212 3.27275Z"
                  fill="#EA4335"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.18212 12.7274C6.08062 12.7274 4.30975 11.371 3.6885 9.48524L0.992249 11.5437C2.29512 14.1896 5.01612 16.0001 8.18212 16.0001C10.1361 16.0001 12.0017 15.3062 13.4019 14.0062L10.8426 12.0277C10.1205 12.4826 9.21112 12.7274 8.18212 12.7274Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8293 8.0002C15.8293 7.52745 15.7564 7.01833 15.6471 6.5457H8.18213V9.63658H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.0002Z"
                  fill="#4285F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_980">
                  <rect width={16} height={16} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </Button>
          <Button
            variant="outline-primary"
            className="social_btn mb-3 w-100 text-center"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_991)">
                <path
                  d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94434 3.125 9.77172 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5537C9.55994 5.25 9.25 5.86666 9.25 6.49931V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                  fill="#1877F2"
                />
                <path
                  d="M11.1141 10.3125L11.4688 8H9.25V6.49931C9.25 5.86666 9.55991 5.25 10.5537 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77172 3.125C7.94434 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.15728 15.9667 7.57475 16 8 16C8.42525 16 8.84269 15.9667 9.25 15.9028V10.3125H11.1141Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_991">
                  <rect width={16} height={16} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with Facebook
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default AppForm;
