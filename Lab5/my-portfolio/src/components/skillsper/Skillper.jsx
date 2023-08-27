import './Skillper.css';

function Skillper(props) {
  return (
    <div className="wrapper row row align-items-center m-2">
        <div className={'col-3 width color'}>
            {props.skill}
        </div>
        <div className="col-9">
            {props.per}
        </div>
    </div>
  )
}

export default Skillper