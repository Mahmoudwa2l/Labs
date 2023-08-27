import './Portfolio.css';
import Card from '../../components/card/Card'
function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row d-flex justify-content-center">
      <Card />
      <Card />
      <Card />
      </div>
      <div className="row d-flex justify-content-center">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
    
  )
}

export default Portfolio