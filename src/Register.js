import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const result = useSelector((state) => state);
  console.log("register", result);
  const [data, setData] = useState();
  const Navigate = useNavigate();
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = () => {
    let data1 = fetch("http://localhost:3000/registerdetails", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    localStorage.setItem("user-info", JSON.stringify(data1));
    Navigate("/");
  };
  return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={(e) => changehandler(e)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        onChange={(e) => changehandler(e)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter password"
        name="pass"
        onChange={(e) => changehandler(e)}
      />
      <br />
      <br />
      <button onClick={submithandler}>Register</button>
    </div>
  );
};
export default Register;
