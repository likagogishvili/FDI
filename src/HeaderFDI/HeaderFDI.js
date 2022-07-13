import "bootstrap/dist/css/bootstrap.min.css";
import logoGeo from "../assets/img/logo/geo-logo.svg";
import './HeaderFDI.css'
function HeaderFDI() {
  return (
    <div>
      <div
        className="  d-flex flex-row justify-content-around pt-2 bg"
        style={{ backgroundColor: "#F5F6FF", height: " 100px" }}
      >
        <div className="col-2 d-flex justify-content-center align-items-center" >
          <img src={logoGeo} className="img-thumbnail" alt="..."  style={{ backgroundColor: "#F5F6FF", border: "none" }}/>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center">
        <p className="h3" style={{ color: "#32297C"}}>პირდაპირი უცხოური ინვესტიციების პორტალი</p>
          </div>
        <div className="col-2 d-flex justify-content-center align-items-center">3 of 3</div>
      </div>
    </div>
  );
}
export default HeaderFDI;
