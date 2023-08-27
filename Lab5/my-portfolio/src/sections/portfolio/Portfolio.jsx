import './Portfolio.css';
import Card from '../../components/card/Card'
function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row ">
      <Card title={"React"} bgcolor={'bg-primary'}/>
      <Card title={"Mobile design"} bgcolor={'bg-danger'}/>
      <Card title={"Logo-design"} bgcolor={'bg-success'}/>
      
      
      </div>
      <div className="row ">
      <Card title={"Web Application development"}/>
      <Card title={"Logo-design"}/>
      <Card title={"Mobile-design"}/>
      </div>
    </div>
    
  )
}

export default Portfolio