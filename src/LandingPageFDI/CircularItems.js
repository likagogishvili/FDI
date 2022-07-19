import backgroundOfCircle from "../assets/img/landingPage/backgroundOfCircle.png";
import "./CircularItems.css";
import "./Moonmap/moonMap.css";
import { useRef, useEffect } from "react";
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

import britaneti from "../assets/img/flagsForCircle/britaneti.svg";
import niderlandebi from "../assets/img/flagsForCircle/niderlandebi.svg";
import chexeti from "../assets/img/flagsForCircle/chexeti.svg";
import usa from "../assets/img/flagsForCircle/usa.svg";
import turketi from "../assets/img/flagsForCircle/turketi.svg";
import malta from "../assets/img/flagsForCircle/malta.svg";
import safrangeti from "../assets/img/flagsForCircle/safrangeti.svg";
import seisheli from "../assets/img/flagsForCircle/seisheli.svg";
import ruseti from "../assets/img/flagsForCircle/ruseti.svg";
import chineti from "../assets/img/flagsForCircle/chineti.svg";
import azerbaijani from "../assets/img/flagsForCircle/azerbaijani.svg";
import ukraina from "../assets/img/flagsForCircle/ukraina.svg";
import danarchenebi from "../assets/img/flagsForCircle/danarchenebi.svg";

import { useSelector } from "react-redux/es/exports";
function CircularItems() {
  // const [itemHovered, setItemHovered] = useState();
  var imgArray = [
    soflisMeurneoba,
    mainingi,
    damamushavebeli,
    eqsporti,
    mshenebloba,
    sastumroebi,
    transporti,
    kavshirgabmuloba,
    ganatleba,
    jandacva,
    udzraviQoneba,
    finansebi,
    sxva,
  ];

  const tabswitch = useSelector((state) => state.tabswitch);

  const ref = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line
    var map = new window.MoonMap("#center", {
      moonSelector: ".moonSelector",
      radius: 183,
    });
    function changeImage(id, n) {
      let item1 = document.getElementById(id);
      item1.src = imgArray[n];
    }
    changeImage("item1", 0);
    changeImage("item2", 1);
    changeImage("item3", 2);
    changeImage("item4", 3);
    changeImage("item5", 4);
    changeImage("item6", 5);
    changeImage("item7", 6);
    changeImage("item8", 7);
    changeImage("item9", 8);
    changeImage("item10", 9);
    changeImage("item11", 10);
    changeImage("item12", 11);
    changeImage("item13", 12);


  }, [tabswitch]);

  if (tabswitch === "ქვეყნების") {
    imgArray = [
      britaneti,
      niderlandebi,
      chexeti,
      usa,
      turketi,
      malta,
      safrangeti,
      seisheli,
      ruseti,
      chineti,
      azerbaijani,
      ukraina,
      danarchenebi,
    ];
  }

  return (
    <div
      className=" col-sm-12 cirleOfElements"
      style={{
        backgroundImage: `url(${backgroundOfCircle})`,
      }}
      id="par"
    >
      <div
        id="center"
        className="orbit-center"
        ref={ref}
        style={{ background: "white" }}
      >
        <span className="centerCircle">
          
        </span>
      </div>
      <span className="moonSelector">
        <img src={soflisMeurneoba} alt="" className="imgOnHover" id="item1" />
      </span>
      <span className="moonSelector">
        <img src={mainingi} alt="" id="item2" />
      </span>
      <span className="moonSelector">
        <img src={damamushavebeli} alt="" id="item3" />
      </span>
      <span className="moonSelector">
        <img src={eqsporti} alt="" id="item4" />
      </span>
      <span className="moonSelector">
        <img src={mshenebloba} alt="" id="item5" />
      </span>
      <span className="moonSelector">
        <img src={sastumroebi} alt="" id="item6" />
      </span>
      <span className="moonSelector">
        <img src={transporti} alt="" id="item7" />
      </span>
      <span className="moonSelector">
        <img src={kavshirgabmuloba} alt="" id="item8" />
      </span>
      <span className="moonSelector">
        <img src={ganatleba} alt="" id="item9" />
      </span>
      <span className="moonSelector">
        <img src={jandacva} alt="" id="item10" />
      </span>
      <span className="moonSelector">
        <img src={udzraviQoneba} alt="" id="item11" />
      </span>
      <span className="moonSelector">
        <img src={finansebi} alt="" id="item12" />
      </span>
      <span className="moonSelector">
        <img src={sxva} alt="" id="item13" />
      </span>
    </div>
  );
}
export default CircularItems;
