import "./Skills.css";
import Skillper from "../../components/skillsper/Skillper";
function Skills() {
  return (
    <div className="container-fluid bg-color mt-5  p-5">
      <div className="head d-flex flex-column align-items-center justify-content-center m-5">
        <div className="text-center text-white mb-4">
          <h1>Skills</h1>
        </div>
        <div className="text-center text-white">
          I possess a strong set of technical skills that enable me to develop
          and design engaging web experiences. On the front-end, I am proficient
          in HTML5, CSS3, and JavaScript, and I have hands-on experience in
          building dynamic user interfaces using React. On the back-end, I have
          expertise in Node.js and Express.js, allowing me to create robust
          server-side applications. I am also skilled in database management,
          working with both MongoDB and MySQL to efficiently store and retrieve
          data. My ability to ensure seamless user experiences extends to
          responsive web design, as I'm well-versed in crafting interfaces that
          adapt flawlessly across various devices. I have a solid understanding
          of UI/UX design principles, which helps me create user-friendly
          interfaces that prioritize both aesthetics and functionality. I am
          adept at optimizing web performance to deliver lightning-fast load
          times and a smooth browsing experience.
        </div>
      </div>
      <div className="skills">
        <div className="myfocus"></div>
        <div className="percentage"></div>
      </div>

      <div className="row p-5 d-flex justify-content-center text-white">
        <div className="col-sm-2 d-flex justify-content-end ">
          <div className="row">
            <div className="col-12 d-flex flex-column ">
              <h5 className="mb-1 text-center">My Focus</h5>
              <hr className="border-white custom-hr w-200" />
            </div>
            <div className="col-12 text-center">
              <h5>UI / UX design</h5>
          </div>
            <div className="col-12 text-center">
              <h5>React</h5>
          </div>
            <div className="col-12 text-center">
              <h5>Mobile design</h5>
          </div>
            <div className="col-12 text-center">
              <h5>Web-application</h5>
          </div>

          </div>
          
          
        </div>
        <div className="col-sm-4 ms-3 ">
          <Skillper skill={"HTML"} per={"3"}/>
          <Skillper skill={"css"} per={"2"}/>
          <Skillper skill={"JavaScript"} per={"5"}/>
          <Skillper skill={"React"} per={"4"}/>
          
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Skills;
