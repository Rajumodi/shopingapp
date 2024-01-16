import Header from "./Header";
import { useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { display} from "./State/Action-container/index";

const Product = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // usestate data
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product").then((result) => {
      result.json().then((res) => {
        setResult(res);
      });
    });
  }, []);

  const viewdata = (post) => {
    console.log("post", post);
    localStorage.setItem("viewdata", post);
    Navigate("/viewdetails");
  };
  // console.log("result", result);

  return (
    <div>
      <Header />

      <h1 className="text mt-5">Products</h1>
      <br />

      <div className="d-flex justify-content-center flex-wrap flex-direction-column">
        {result.map((post, id) => {
          return (
            <div className="d-flex justify-content-center mx-2 flex-wrap flex-direction-column ">
              <div
                className="card backabc shadow-lg p-3 mb-5 bg-body rounded"
                key={id}
                style={{ width: "350px" }}
              >
                <span key={post.id}></span>
                <img
                  src={post.img}
                  className="img-fluid card-img-top border border-dark"
                  alt="ABC"
                  style={{ height: "350px" }}
                  onClick={() => viewdata(post.id)}
                />
                {/* <button
                  onClick={() => viewdata(post.id)}
                  className="btn btn-outline-dark"
                >
                  view
                </button> */}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">${post.price}</p>

                  <button
                    className="btn btn-dark"
                    onClick={() => dispatch(display(post))}
                  >
                    ADD CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
