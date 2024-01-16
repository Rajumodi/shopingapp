import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { display, addcart, removecart } from "./State/Action-container/index";
import { useNavigate } from "react-router-dom";
const Cartdisplay = () => {
  const result = useSelector((state) => state);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const regisid = localStorage.getItem("setitem");
  // console.log("result", regisid);

  let arr = [0];
  result.map((item) => {
    return arr.push(item.qunty * item.price);
  });
  const totalprice = arr.reduce((acc, item) => acc + item);
  const [data, setData] = useState({
    items: result,
    regisid: regisid,
    totalprice: totalprice,
  });

  fetch("http://localhost:3000/cartitem", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // Navigate("/checkout");
  // console.log("data", data);
  return (
    <div>
      <Header />
      <h1 className="p-5">Product Details</h1>
      <div className="table-dis">
        <table>
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
                      className="ImageTag"
                      style={{ height: "100px", width: "100px" }}
                      src={data.img}
                      alt="dhfjh"
                    />
                  </td>
                  <td data-label="Title">{data.title}</td>
                  <td data-label="Price">${pricefinal}</td>
                  <td data-label="Description">{data.des}</td>
                  <td data-label="Quantity">{data.qunty}</td>
                  <td data-label="Action">
                    <button
                      className="m-2"
                      onClick={() => dispatch(removecart(data))}
                    >
                      -
                    </button>
                    <button
                      className="m-2"
                      onClick={() => dispatch(addcart(data))}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h1 className="order-summary-values tedit">Total ${totalprice}</h1>
      <Button
        className="btn btn-dark"
        onClick={() => (regisid ? Navigate("/checkout") : Navigate("/login"))}
      >
        CHECKOUT
      </Button>
    </div>
  );
};

export default Cartdisplay;
