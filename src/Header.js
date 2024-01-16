import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
// import { Dispatch } from "react";
import { logout } from "./State/Action-container/index";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [log, setLog] = useState(false);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState();
  console.log(search, "search");

  useEffect(() => {
    fetch("http://localhost:3000/product").then((result) => {
      result.json().then((res) => {
        console.log("datatatat",res)
        setResult(res);
      });
    });
  }, []);

  let fresult = [];
  fresult = result.filter((item) => item.title.toLowerCase().includes(search));
  // navigation('/search')
  // console.log("search", fresult);
//   useEffect(() => {
  
//     if (search == null) {
//       navigation("/");
//     } else {
//       navigation("/search");
//     }
// },[])

  // console.log("result", result);
  // let data;

  const data = localStorage.getItem("setitem");

  const loguser = () => {
    if (data) {
      setLog(true);
    }
  };
  const logoutuser = () => {
    setLog(false);
    localStorage.clear();
    dispatch(logout());
  };
  useEffect(() => {
    loguser();
  }, [logoutuser]);

  return (
    <div>
      <Navbar className="main">
        <Container>
          <Navbar.Brand className="text-black">
            <Link to="/" className="links-nav">
              Shoppiee...
            </Link>
          </Navbar.Brand>
          <Nav className=" titles">
            <Link to="/" className="links-nav">
              HOME
            </Link>
            <Link to="/about" className="links-nav">
              ABOUT
            </Link>
            <Link to="/product" className="links-nav">
              PRODUCT
            </Link>
            {data ? (
              <Link to="/" className="links-nav" onClick={logoutuser}>
                LOGOUT
              </Link>
            ) : (
              ""
            )}
          </Nav>
          <div>
            <div className="input-group">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-dark">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <Cart />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
