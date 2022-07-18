import greenArrow from "../assets/img/landingPage/arrows/greenArrow.png";
function FooterLandingPage() {
  return (
    <footer>
      <div className="row justify-content-md-center">
        <div className="col-lg-3 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center colorOfText pt-2 pb-2">
          პირდაპირი უცხოური <br /> ინვესტიციები 2020 წელს
        </div>
        <div
          className="col-lg-1 mt-3 mb-3 p-1 d-flex flex-row justify-content-around align-items-center colorOfText border border-primary rounded mln"
          style={{ fontSize: "23px" }}
        >
          572 მლნ $
        </div>
        <div
          className="col-lg-3 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center colorOfText"
          style={{
            display: "inline-block",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <img src={greenArrow} alt="" />
          <div style={{ display: "inline-block" }}>
            ცვლილება წინა <br />
            წელთან შედარებით:
            <div style={{ display: "inline-block", paddingLeft: "4px" }}>
              - 51.5%
            </div>
          </div>
        </div>

        <div className="col-lg-1 mt-3 mb-3 d-flex flex-row justify-content-around align-items-center">
          <button className="sheadare">შეადარე </button>
        </div>
      </div>
    </footer>
  );
}
export default FooterLandingPage;
