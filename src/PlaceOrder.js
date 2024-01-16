import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleardata } from "./State/Action-container/index";
import Header from "./Header";
import Thanks from "./Thanks";
const PlaceOrder = () => {
  // setTimeout(function () {
  //   window.location.replace("/");
  // }, 2000);
  const dispatch = useDispatch(cleardata());
  // const result = useSelector((state) => state);
  const xyz = localStorage.getItem("setitem");
  const [resultdata, setResultdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/user-details/").then((result) => {
      result.json().then((res) => {
        setResultdata([res]);
      });
    });
  }, []);
  const finaldata = resultdata.filter((data) => data.regid === xyz);
  console.log("result", finaldata);
  // console.log(result);
  return (
    <div>
      <Header />
      <div className="xyzzzz">
        {/* <Thanks /> */}
        {resultdata.regid}
        {/* <img src="/img/end.webp" /> */}
        <h1 className="pdesa p-5">Your Order Details</h1>
        <div className="border border-light p-2 rounded bg-light col-lg-6 offset-3">
          {resultdata
            .filter((data) => console.log(data.regid))
            .map((item) => {
              return (
                <>
                  <p className="pdesa text-sm-start">Name : {item.fname}</p>

                  <p className="pdesa text-sm-start">Email : {item.email}</p>

                  <p className="pdesa text-sm-start">
                    Address : {item.add + item.city + item.pincode}
                  </p>

                  <Table>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.product.map((item) => {
                        return (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.qunty}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <h4 className="pdesa">total Amount: {item.tprice}</h4>
                </>
              );
            })}
        </div>
        <br />
      </div>
    </div>
  );
};
export default PlaceOrder;
