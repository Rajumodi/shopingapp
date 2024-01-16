import { Button } from "react-bootstrap";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { display, addcart, removecart } from "./State/Action-container/index";
import { Actioncontainer } from "./State/index";
import { useDispatch, useSelector } from "react-redux";
const ViewDetails = () => {
  const dispatch = useDispatch();
  const viewdata = localStorage.getItem("viewdata");
  // console.log(viewdata);

  const [resultdata, setResultdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product/" + viewdata).then((result) => {
      result.json().then((res) => {
        setResultdata([res]);
      });
    });
  }, []);
  console.log("result", [resultdata]);

  return (
    <div className="vdata">
      <Header />

      <div className="view-data">
        <br />
        <h1>hello</h1>
        <h1>View Details</h1>
        {resultdata.map((item) => {
          return (
            <>
              <img src={item.img} className="img-f" alt="img" />
              <br />
              <div className="des-data">
                {/* {console.log(resultdata)} */}

                <h4>Name Of Product:{item.title} </h4>
                {/* <h4>Cart Data</h4> */}
                <h4> Price: ${item.price}</h4>
                <h4>Description:{item.des}</h4>
              </div>
              <div className="des-q">
                <Button
                  className="btn btn-secondary bt-q"
                  value="-"
                  onClick={() => dispatch(removecart(item))}
                >
                  -
                </Button>
                <label className="lbl-q"> Quantity</label>
                <Button
                  className="btn btn-secondary bt-q"
                  value="+"
                  onClick={() => dispatch(addcart(item))}
                >
                  +
                </Button>
              </div>

              <Button
                className="btn btn-secondary b-data"
                onClick={() => dispatch(display(item))}
              >
                ADD CART
              </Button>

              <br />
              <br />
            </>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
};

export default ViewDetails;
