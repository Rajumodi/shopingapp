import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Input from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [regid, setregid] = useState(false);
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [result, setResult] = useState([]);

  const fetcharr = () => {
    axios
      .get("http://localhost:3000/registerdetails")
      .then((result) => setResult(result.data));
  };
  useEffect(() => {
    fetcharr();
  }, []);

  const handleclick = (e) => {
    // console.log(/e);
    e.preventDefault();

    result.filter((item) => {
      if (item.email === data.email && item.pass === data.pass) {
        localStorage.setItem("setitem", item.id);
        navigate("/checkout");
      }
    });
    if (data.email.length == "" || data.pass == "") {
      // console.log("error");
      setregid(true);
    }
  };
  // console.log("hii", regid);
  return (
    <div>
      <Header />
      <Form>
        <div className="login-main rounded">
          <br />
          <h3 className="text">LOGIN PAGE</h3>
          <br />
          <input
            type="text"
            placeholder="Enter Email.."
            name="email"
            onChange={(e) => changedata(e)}
            className="w-50 rounded-pill p-2"
          />

          <br />
          <br />
          {regid && data.email.length == "" ? (
            <p className="text-danger">Enter Email</p>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="Enter Password.."
            name="pass"
            className="w-50 rounded-pill p-2 "
            onChange={(e) => changedata(e)}
          />

          <br />
          <br />
          {regid && data.pass.length == "" ? (
            <p className="text-danger">Enter Password</p>
          ) : (
            ""
          )}
          <button
            type="button"
            className="btn btn-secondary rounded-pill w-25 p-2"
            onClick={(e) => handleclick(e)}
          >
            LOGIN
          </button>
          <br />
          <br />
        </div>
      </Form>
    </div>
  );
};
export default Login;
