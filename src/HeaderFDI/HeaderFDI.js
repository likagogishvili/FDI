import "bootstrap/dist/css/bootstrap.min.css";
import logoGeo from "../assets/img/logo/geo-logo.svg";
import "./HeaderFDI.css";
import world_icon from "../assets/img/headerIcons/world_icon.png";
import fb_icon from "../assets/img/headerIcons/fb_icon.png";
import twitter_icon from "../assets/img/headerIcons/twitter_icon.png";
import linkedIn_icon from "../assets/img/headerIcons/linkedIn-icon.png";
import translate_icon from "../assets/img/headerIcons/translate-icon.png";

function HeaderFDI() {

  return (
    <div >
      <div
        className="row justify-content-around headertyles; headertyles"
      >
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <img
            src={logoGeo}
            className="img-thumbnail"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
        </div>
        <div className="col-sm-5 d-flex justify-content-center align-items-center">
          <h3
            style={{ color: "#32297C" }}
            className="portalHeading"
          >
            პირდაპირი უცხოური ინვესტიციების პორტალი
          </h3>
        </div>
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <img
            src={world_icon}
            className="img-thumbnail"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
          <img
            src={fb_icon}
            className="img-thumbnail"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
          <img
            src={twitter_icon}
            className="img-thumbnail"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
          <img
            src={linkedIn_icon}
            className="img-thumbnail"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
          <img
            src={translate_icon}
            className="img-thumbnail mr-2"
            alt="..."
            style={{ backgroundColor: "#F5F6FF", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
export default HeaderFDI;
