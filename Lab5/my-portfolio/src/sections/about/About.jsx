import "./About.css";
import DownloaderButton from "../../components/DownloaderButton/DownloaderButton";

function About() {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-2 justify-content-center d-flex">
          <h1 h1>About me</h1>
        </div>
        <div className="col-md-9">
          <p>
            Welcome to my portfolio! I am a passionate and creative developer
            with a strong focus on web technologies. With a keen eye for design
            and a love for coding, I strive to create beautiful and functional
            websites that leave a lasting impression. My journey in the world of
            programming started several years ago, and I have since honed my
            skills in front-end and back-end development. I'm experienced in
            working with modern frameworks such as React and Node.js, and I
            enjoy solving complex problems to deliver elegant solutions. In
            addition to my technical skills, I'm a dedicated learner who stays
            up-to-date with the latest industry trends and best practices. I'm
            always excited to take on new challenges and collaborate with others
            to turn ideas into reality. Feel free to explore my portfolio and
            check out some of the projects I've worked on. Each project
            showcases my attention to detail, creativity, and commitment to
            excellence. If you're interested in working together or have any
            questions, don't hesitate to get in touch. Thank you for visiting,
            and I look forward to connecting with you!
          </p>
        <div className="col-sm-2 btn-lg mt-5 btn btn-secondary text-decoration-none text-white">
          <DownloaderButton />
          
        </div>
        </div>

      </div>
    </div>
  );
}

export default About;
