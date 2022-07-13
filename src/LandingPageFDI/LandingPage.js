import { useState } from "react";
import "./LandingPage.css";
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
  console.log(tabswitch);

  return (
    <div className="LandingPageContainer">
      <main className=" d-flex flex-row justify-content-around align-items-center">
        <div className="col-3 d-flex justify-content-center align-items-center"></div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <h3 className="textOfContent">
            <p>პირდაპირი უცხოური ინვესტიციები</p>
            <p>{tabswitch} მიხედვით</p>
          </h3>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
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
    </div>
  );
}
export default LandingPage;
