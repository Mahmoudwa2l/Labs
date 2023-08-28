import "./Card.css";

function Card(props) {
  return (
    <div className={`card col-md-4 m-4 d-flex justify-content-center align-items-center ${props.bgcolor}`}>
    <div className="row d-flex justify-content-center align-items-center">
      <h1 className="col-12 h3">{props.title}</h1>
      <hr className="col-12 border-black custom-hr w-100" />
    </div>
  </div>
  
    
  );
}

export default Card;
