import { useState } from "react";
import "./LandingPage.css";

import SelectWorldOrSector from "./SelectWorldOrSector";
import CircularItems from "./CircularItems";
import FooterLandingPage from "./FooterLandingPage";
import SelectedYear from "./SelectedYear";
import Credits from "./Credits";

function LandingPage() {
  const [tabswitch, setTabSwitch] = useState("სექტორების");

  function GetTabSwitch(e) {
    const id = e.target.id;
    if (id === "q") {
      setTabSwitch("ქვეყნების");
    }
    if (id === "s") {
      setTabSwitch("სექტორების");
    }
  }

  return (
    <div className="LandingPageContainer">
      <main className="row d-flex flex-row justify-content-around align-items-center">
        <div className="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center"></div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <h3 className="textOfContent">
            <p>პირდაპირი უცხოური ინვესტიციები</p>
            <p>{tabswitch} მიხედვით</p>
          </h3>
        </div>
        <div className="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center">
          <div className="wrapper">
            <div
              className={
                tabswitch === "სექტორების"
                  ? "tab-switch left text-center"
                  : "tab-switch right text-center"
              }
            >
              <div
                className={tabswitch === "სექტორების" ? "tab active" : "tab"}
                tab-direction="righ"
                id="s"
                onClick={(e) => GetTabSwitch(e)}
              >
                სექტორები
              </div>
              <div
                className={tabswitch === "ქვეყნების" ? "tab active" : "tab"}
                tab-direction="left"
                id="q"
                onClick={(e) => GetTabSwitch(e)}
              >
                ქვეყნები
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="spinner">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="text-center col-lg-3 col-sm-5 ">
            <div className="chooseDate">
              <SelectedYear />
            </div>
          </div>
          <div className=" text-center col-lg-5 col-sm-12 pt-5 d-flex justify-content-center align-items-center">
            <CircularItems />
          </div>
          <div className="text-center col-lg-3 col-sm-5">
            <div className="chooseCountry">
              <SelectWorldOrSector tabswitch={tabswitch} />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{ width: "50%", margin: "auto"}}
        color="black"
        className="line"
      />
      <FooterLandingPage />
      <Credits/>
    </div>
  );
}
export default LandingPage;
