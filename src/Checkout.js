import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { display, addcart, removecart } from "./State/Action-container/index";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Header from "./Header";
const Checkout = () => {
  const result = useSelector((state) => state);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const regidd = localStorage.getItem("setitem");
  let arr = [0];
  result.map((item) => {
    return arr.push(item.qunty * item.price);
  });
  const abc = arr.reduce((acc, item) => acc + item);

  const [data, setData] = useState({
    fname: "",
    email: "",
    cntry: "",
    state: "",
    city: "",
    pincode: "",
    add: "",
    cname: "",
    cnumber: "",
    date: "",
    cvv: "",
    product: result,
    tprice: abc,
    regid: regidd,
  });
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let data1 = fetch("http://localhost:3000/cartitem", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(result),
  });
  const [regid, setregid] = useState(false);
  // console.log("data1", data1);
  async function submithandler() {
    if (
      (data.email == "" && data.fname.length == "") ||
      data.cname.length == "" ||
      data.state.length == "" ||
      data.pincode.length == "" ||
      data.city.length == "" ||
      data.add.length == "" ||
      data.cntry.length == "" ||
      data.date.length == "" ||
      data.cvv.length == "" ||
      data.cnumber.length == ""
    ) {
      // console.log("error");
      setregid(true);
    } else {
      Navigate("/thanks");
    }

    let data1 = await fetch("http://localhost:3000/user-details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    data1 = await data1.json();
  }

  return (
    <div>
      <Header />
      <h1 className="p-3 text-center  pdesa">Product Details</h1>
      <div className="table-dis">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th scope="col">items</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, id) => {
              let pricefinal = data.price * data.qunty;
              return (
                <tr key={id}>
                  <td data-label="Id">{id + 1}</td>
                  <td data-label="Image">
                    <img
                      src={data.img}
                      style={{ height: "100px", width: "100px" }}
                    />
                  </td>
                  <td data-label="Title">{data.title}</td>
                  <td data-label="Price">${pricefinal}</td>
                  <td data-label="Description">{data.des}</td>
                  <td data-label="Quantity">{data.qunty}</td>
                  <td data-label="Actions">
                    <button
                      className="m-2 btn btn-outline-dark "
                      onClick={() => dispatch(removecart(data))}
                    >
                      -
                    </button>
                    <button
                      className="m-2 btn btn-outline-dark"
                      onClick={() => dispatch(addcart(data))}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <h1 className="order-summary-values pdesa text-end">Total ${abc}</h1>
      </div>
      <h1 className="p-3 text-center  pdesa">User Details</h1>
      <div className="border border-dark rounded m-5 p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter full Name"
                name="fname"
                onChange={(e) => changehandler(e)}
              />
              {regid && data.fname.length == "" ? (
                <p className="text-danger">Enter Full Name</p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
            <div className="col-lg-4 ">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email Id"
                name="email"
                onChange={(e) => changehandler(e)}
              />
              {regid && data.email.length == "" ? (
                <p className="text-danger">Enter Email </p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
            <div className="col-lg-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Country  Name"
                name="cntry"
                onChange={(e) => changehandler(e)}
              />{" "}
              {regid && data.cntry.length == "" ? (
                <p className="text-danger">Enter Country </p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter State Name"
                name="state"
                onChange={(e) => changehandler(e)}
              />{" "}
              {regid && data.state.length == "" ? (
                <p className="text-danger">Enter State</p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City Name"
                name="city"
                onChange={(e) => changehandler(e)}
              />{" "}
              {regid && !data.city.length ? (
                <p className="text-danger">Enter City</p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                name="add"
                onChange={(e) => changehandler(e)}
              />{" "}
              {regid && !data.add.length ? (
                <p className="text-danger">Enter Address</p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pincode"
                name="pincode"
                onChange={(e) => changehandler(e)}
              />{" "}
              {regid && !data.pincode.length ? (
                <p className="text-danger">Enter Pincode</p>
              ) : (
                ""
              )}
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <label className="form-label">Card Holder's Name</label>
            <input
              type="text"
              className="form-control"
              name="cname"
              placeholder="Enter Card Holder Name"
              onChange={(e) => changehandler(e)}
            />{" "}
            {regid && data.cname.length == "" ? (
              <p className="text-danger">Enter Card Holder Name</p>
            ) : (
              ""
            )}
            <br />
            <br />
          </div>
          <div className="col-lg-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              name="cnumber"
              placeholder="Enter Card Number"
              onChange={(e) => changehandler(e)}
            />{" "}
            {regid && data.cnumber.length == "" ? (
              <p className="text-danger">Enter Card Number</p>
            ) : (
              ""
            )}
            <br />
            <br />
          </div>

          <div className="col-lg-3">
            <label className="form-label">Expiry</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => changehandler(e)}
              name="date"
            />{" "}
            {regid && data.date.length == "" ? (
              <p className="text-danger">Select Date</p>
            ) : (
              ""
            )}
          </div>

          <div className="col-lg-3">
            <label className="form-label">CVV</label>
            <input
              type="password"
              className="form-control"
              name="cvv"
              onChange={(e) => changehandler(e)}
            />{" "}
            {regid && data.cvv.length == "" ? (
              <p className="text-danger">Enter CVV</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* <NavLink to="/placeorder"> */}
      <button onClick={submithandler} className="btn btn-dark mb-2">
        Placeorder
      </button>
      {/* </NavLink> */}
    </div>
  );
};
export default Checkout;
