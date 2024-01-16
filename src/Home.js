
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SimpleImageSlider from "react-simple-image-slider";
const Home = () => {
  const sliderImages = [
    {
      url: "../Img/ssale.jpg"
    },
    {
      url: "../Img/ssale.webp"
    },
    {
      url: "../Img/divhome.jpg"
    },

  ];

  const productData = [
    {
      title: "Clothes",
      imgSrc: "Img/abc.webp",
    },
    {
      title: "Makeup",
      imgSrc: "Img/makeup.jpg",
    },
    {
      title: "Watches",
      imgSrc: "Img/watch.webp",
    },
    {
      title: "Footwear",
      imgSrc: "Img/footwear.jpg",
    },
  ];

  return (
    <div >
      <Header />
      <div>
        <img src="Img/homediv.gif" className="img-home1" />
        <br />
        <br />
        {/* <br /> */}
        <p style={{ fontSize: "40px" }}>Women's Product</p>
        <div className="d-flex justify-content-around mx-2 flex-wrap p-5">
          {productData.map((product, index) => (
            <Card key={index} style={{ width: "18rem", padding: "10px" }}>
              <Card.Img variant="top" src={product.imgSrc} style={{ height: "300px" }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Button variant="primary">
                  Shop now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <p style={{ fontSize: "40px", marginTop: "2%" }}>Men's Product</p>
        {/* !important */}
        <div className="d-flex justify-content-around mx-2 flex-wrap flex-direction-column">
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src="Img/men-cloth.jpeg "
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Clothes</Card.Title>

              <Button variant="primary">Shop now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src="Img/makeup.jpg"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Makeup</Card.Title>

              <Button variant="primary">Shop now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src="Img/men-watch.jpeg"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Watches</Card.Title>

              <Button variant="primary">Shop now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img
              variant="top"
              src="Img/men-foot.jpg"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Footwear</Card.Title>

              <Button variant="primary">Shop now</Button>
            </Card.Body>
          </Card>
        </div>
        {/* <Search/> */}
      </div>
      {/* <Card style={{ width: "80%",marginLeft:"10%",height:"70%" }}> */}
      <Card.Img variant="top" src="Img/sale.png" />
      <Card.Body></Card.Body>
      <div>
        <SimpleImageSlider width={900} height={900} images={sliderImages} showNav={true} autoPlay={true} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
