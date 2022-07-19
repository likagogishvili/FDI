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
import { useSelector } from "react-redux/es/exports";
function CircularItems() {
  const [itemHovered, setItemHovered] = useState();
  const ref = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line
    var map = new window.MoonMap("#center", {
      moonSelector: ".moonSelector",
      radius: 183,
    });
    // let test = document.getElementById("parent");

    // document.onmouseover = function (e) {
    //   setItemHovered(e.target.id);
    // };
  }, []);

  const tabswitch = useSelector((state) => state.tabswitch);
  if(tabswitch === "სექტორების"){
    var imarray=[soflisMeurneoba, mainingi,damamushavebeli,eqsporti ]
  }else{
    imarray=[eqsporti, mainingi,damamushavebeli,eqsporti ]

  }
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
      <span className="moonSelector" >
        <img src={imarray[0]} alt="" className="imgOnHover" id="item1" />
      </span>
      <span className="moonSelector" id="item2">
        <img src={mainingi} alt="" />
      </span>
      <span className="moonSelector" id="item3">
        <img src={damamushavebeli} alt="" />
      </span>
      <span className="moonSelector" id="item4">
        <img src={eqsporti} alt="" />
      </span>
      <span className="moonSelector" id="item5">
        <img src={mshenebloba} alt="" />
      </span>
      <span className="moonSelector" id="item6">
        <img src={sastumroebi} alt="" />
      </span>
      <span className="moonSelector" id="item7">
        <img src={transporti} alt="" />
      </span>
      <span className="moonSelector" id="item8">
        <img src={kavshirgabmuloba} alt="" />
      </span>
      <span className="moonSelector" id="item9">
        <img src={ganatleba} alt="" />
      </span>
      <span className="moonSelector" id="item10">
        <img src={jandacva} alt="" />
      </span>
      <span className="moonSelector" id="item11">
        <img src={udzraviQoneba} alt="" />
      </span>
      <span className="moonSelector" id="item12">
        <img src={finansebi} alt="" />
      </span>
      <span className="moonSelector" id="item13">
        <img src={sxva} alt="" />
      </span>
    </div>
  );
}
export default CircularItems;
