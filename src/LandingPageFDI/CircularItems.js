import backgroundOfCircle from "../assets/img/landingPage/backgroundOfCircle.png";
import "./CircularItems.css";
import "./Moonmap/moonMap.css";
import { useRef, useEffect, useState } from "react";
import soflisMeurneoba from "../assets/img/IconsForCircle/1.svg";
import mainingi from "../assets/img/IconsForCircle/2.svg";
import damamushavebeli from "../assets/img/IconsForCircle/3.svg";
import eqsporti from "../assets/img/IconsForCircle/4.svg";
import mshenebloba from "../assets/img/IconsForCircle/5.svg";
import sastumroebi from "../assets/img/IconsForCircle/6.svg";
import transporti from "../assets/img/IconsForCircle/7.svg";
import kavshirgabmuloba from "../assets/img/IconsForCircle/8.svg";
import ganatleba from "../assets/img/IconsForCircle/9.svg";
import jandacva from "../assets/img/IconsForCircle/10.svg";
import udzraviQoneba from "../assets/img/IconsForCircle/11.svg";
import finansebi from "../assets/img/IconsForCircle/12.svg";
import sxva from "../assets/img/IconsForCircle/13.svg";

function CircularItems() {
  const [itemHovered, setItemHovered] = useState();
  const ref = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line
    var map = new window.MoonMap("#center", {
      moonSelector: ".moonSelector",
      radius: 183,
    });
    let test = document.getElementById("parent");
    test.addEventListener(
      "mouseover",
      function (event) {
        setItemHovered(event.target.value);
        console.log(event.target.value)
      },
      false
    );
  }, []);

  console.log(itemHovered);

  return (
    <div
      className=" col-sm-12 cirleOfElements"
      style={{
        backgroundImage: `url(${backgroundOfCircle})`,
      }}
      id="parent"
    >
      <div
        id="center"
        className="orbit-center"
        ref={ref}
        style={{ background: "white" }}
      >
        <span className="centerCircle">dsadsa</span>
      </div>
      <span className="moonSelector" value="item1">
        <img src={soflisMeurneoba} alt="" className="imgOnHover" />
      </span>
      <span className="moonSelector" id="item2">
        <img src={mainingi} alt="" />
      </span>
      <span className="moonSelector">
        <img src={damamushavebeli} alt="" />
      </span>
      <span className="moonSelector">
        <img src={eqsporti} alt="" />
      </span>
      <span className="moonSelector">
        <img src={mshenebloba} alt="" />
      </span>
      <span className="moonSelector">
        <img src={sastumroebi} alt="" />
      </span>
      <span className="moonSelector">
        <img src={transporti} alt="" />
      </span>
      <span className="moonSelector">
        <img src={kavshirgabmuloba} alt="" />
      </span>
      <span className="moonSelector">
        <img src={ganatleba} alt="" />
      </span>
      <span className="moonSelector">
        <img src={jandacva} alt="" />
      </span>
      <span className="moonSelector">
        <img src={udzraviQoneba} alt="" />
      </span>
      <span className="moonSelector">
        <img src={finansebi} alt="" />
      </span>
      <span className="moonSelector">
        <img src={sxva} alt="" />
      </span>
    </div>
  );
}
export default CircularItems;
