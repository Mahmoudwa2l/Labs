import './Footer.css';
import Button from '../../components/button/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
  return (
    <div className="container-fluid bg-dark d-flex flex-row text-white justify-content-between p-5">
      <div className="getintouch d-flex flex-column">
        <div className="h2">Get in Touch</div>
        <div className="links d-flex flex-column">
          <div className="email  ">
            <a className="d-flex flex-row text-decoration-none textcol linkhover" href="#1">
              <EmailIcon />
              <h6 className='ms-2 '>Example@gmial.com</h6>
            </a>
            
          </div>
          <div className="phone mt-2">
            <a className="d-flex flex-row text-decoration-none textcol linkhover" href="#1">
              <LocalPhoneIcon />
              <h6 className='ms-2 '>+20 010 203 20 20</h6>
            </a>
          </div>
          
        </div>
      </div>
      <div className="contactus">
        <Button />
      </div>
      <div className="socialnetworks d-flex flex-column">
        <div className="icons mb-4">
        <a className="m-2" href="#1"><LinkedInIcon /></a>
        <a className="m-2" href="#1"><FacebookIcon /></a>
        <a className="m-2" href="#1"><TwitterIcon /></a>
        
        </div>
        <div className="copyrights">
          <h6>Copyright@2019</h6>
        </div>
        
      </div>
    </div>
  )
}

export default Footer