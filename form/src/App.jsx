import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    gender: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validateData = (user) => {
    if (
      user.username.length == 0 ||
      user.email.length == 0 ||
      user.number.length != 10 ||
      user.password.length < 6
    ) {
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", userData);
    if (validateData(userData)) {
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })
    } else {
      toast.error('🦄 error!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">username</label>
          <br />
          <input
            type="text"
            id="name"
            name="username"
            value={userData.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="number">number</label>
          <br />
          <input
            type="number"
            id="number"
            name="number"
            value={userData.number}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="gender">gender</label>
          <br />
          <select name="gender" id="gender" onChange={handleInput}>
            <option value="">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input
            type="text"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
          />
        </div>
        <input type="submit" value={"create account"} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default App;
