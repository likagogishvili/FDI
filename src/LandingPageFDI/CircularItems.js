import backgroundOfCircle from "../assets/img/landingPage/backgroundOfCircle.png";
import "./CircularItems.css";
import {useRef, useEffect} from "react";

function CircularItems() {

  console.log("MoonMap", window.MoonMap)

  const ref = useRef(null);

  useEffect(() => {
    // ref

    // window.addEventListener('DOMContentLoaded', (event) => {
    //  console.log(document.querySelector('.center'))
    // });

    console.log("ref", ref.current)

    var map = new window.MoonMap('#center', {
      n: 8
    });

  
  }, []);

  return (
    <div
      className=" col-sm-12 cirleOfElements"
      style={{
        backgroundImage: `url(${backgroundOfCircle})`,
      }}
    >

    <div id="center" className="orbit-center" ref={ref}>
      <span>Center</span>
    </div>

    </div>
  );
}
export default CircularItems;


        /* <Helmet>
          <script src="./Moonmap/moonMap.js" type="text/javascript" />
        </Helmet> */
