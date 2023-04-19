import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="mb-3">
        <label for="Full name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full name"
          name="fullname"
        />
      </div>
      <div className="mb-3">
        <label for="Email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="mb-3">
        <label for="Confirmpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmpassword"
          placeholder="Confirm password"
          name="confirmpassword"
        />
      </div>
      <div className="">
    <button type="submit" className="btn btn-primary mb-3">Sign up</button>
  </div>
    </div>
  );
};

export default Signup;
