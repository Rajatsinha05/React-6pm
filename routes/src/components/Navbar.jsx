import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <a href="/">home</a>
      <a href="/login">login</a>
      <a href="/signup">signup</a> */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup </Link>
    </div>
  );
};

export default Navbar;
