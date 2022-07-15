import backgroundOfCircle from "../assets/img/landingPage/backgroundOfCircle.png";
import "./CircularItems.css";
// import "./Moonmap/moonMap.js";
// import "./Moonmap/moonMap.css";
function CircularItems() {
  return (
    <div
      className=" col-sm-12 cirleOfElements"
      style={{
        backgroundImage: `url(${backgroundOfCircle})`,
      }}
    >
    </div>
  );
}
export default CircularItems;


        /* <Helmet>
          <script src="./Moonmap/moonMap.js" type="text/javascript" />
        </Helmet> */