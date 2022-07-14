import { useState } from "react";
import "./LandingPage.css";
import dateIcon from "../assets/img/landingPage/dateIcon.png";

import backgroundOfCircle from "../assets/img/landingPage/backgroundOfCircle.png";
import SelectWorldOrSector from "./SelectWorldOrSector";

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
              <select
                name="years"
                id="years"
                style={{
                  backgroundImage: `url(${dateIcon})`,
                  backgroundRepeat: "no-repeat",
                  width: "50%",
                  backgroundPosition: "right 6% top 50%",
                }}
              >
                <option className="dateOptions" value="2021">
                  2021
                </option>
                <option className="dateOptions" value="2020">
                  2020
                </option>
                <option className="dateOptions" value="2019">
                  2019
                </option>
                <option className="dateOptions" value="2018">
                  2018
                </option>
                <option className="dateOptions" value="2017">
                  2017
                </option>
                <option className="dateOptions" value="2016">
                  2016
                </option>
                <option className="dateOptions" value="2015">
                  2015
                </option>
                <option className="dateOptions" value="2014">
                  2014
                </option>
                <option className="dateOptions" value="2013">
                  2013
                </option>
                <option className="dateOptions" value="2012">
                  2012
                </option>
                <option className="dateOptions" value="2011">
                  2011
                </option>
                <option className="dateOptions" value="2010">
                  2010
                </option>
                <option className="dateOptions" value="2009">
                  2009
                </option>
                <option className="dateOptions" value="2008">
                  2008
                </option>
                <option className="dateOptions" value="2007">
                  2007
                </option>
              </select>
            </div>
          </div>
          <div className=" text-center col-lg-5 col-sm-12 pt-5 pb-2">
            <div>
              <img src={backgroundOfCircle} alt="" />
            </div>
          </div>
          <div className="text-center col-lg-3 col-sm-5">
            <div className="chooseCountry">
              <SelectWorldOrSector tabswitch={tabswitch} />
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{ width: "50%", margin: "auto" }}
        color="black"
        className="line"
      />
      <div class="row justify-content-md-center mt-4">
        <div class="col-lg-3 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center colorOfText">
          პირდაპირი უცხოური <br /> ინვესტიციები 2020 წელს
        </div>
        <div class="col-lg-1 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center colorOfText border border-primary rounded ">
          572 მლნ $
        </div>
        <div class="col-lg-3 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center colorOfText">
          ცვლილება წინა <br />
          წელთან შედარებით: -51.5%
        </div>
        <div class="col-lg-1 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center">
          <button className="sheadare">შეადარე </button>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
