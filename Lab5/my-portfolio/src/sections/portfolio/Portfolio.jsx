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
      <Card title={"Web Application development"}  bgcolor={'bg-success'}/>
      <Card title={"Logo-design"}  bgcolor={'bg-danger'}/>
      <Card title={"Mobile-design"}  bgcolor={'bg-primary'}/>
      
      </div>
      
    </div>
    
  )
}

export default Portfolio