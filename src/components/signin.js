import React from 'react';
import Navbar from './Navbar';
import '../css/signin.css'

const signin = () => {
  return (
    <>
    <Navbar/>
    <div className="signin">
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
      <div className="">
    <button type="submit" className="btn btn-primary mb-3">Sign in</button>
  </div>
    </div>
    </>
  );
}

export default signin;