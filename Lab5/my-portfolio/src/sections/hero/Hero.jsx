import "./Hero.css";
import portfolioImg from "../../assets/port2.jpg";
function Hero() {
  return (
    <div className="container-fluid bg-black p-5">
      <div className="row m-3 justify-content-center">
        <div className="col-lg-5 col-sm-6 col-md-6 text-white mt-5 d-flex align-items-center justify-content-center flex-column">
          <h1 className="h1">Mahmoud Wael</h1>
          <h4 className="h6">Web developer & designer</h4>
          <button className="btn btn-outline-light btnn mt-3">Contact Me</button>
        </div>

        <img className="col-lg-2 col-sm-6 col-md-6 " src={portfolioImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
