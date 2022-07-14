import Select from "react-select";
import countryIcon from "../assets/img/landingPage/countryIcon.png";
import sectorIcon from "../assets/img/landingPage/sector-icon.png";
import "./LandingPage.css";
import soflis_meurneoba from "../assets/img/landingPage/iconsForSectors/soflis_meurneoba.svg";
import samtomopovebiti from "../assets/img/landingPage/iconsForSectors/samtomopovebiti.svg";
import damamushavebeli from "../assets/img/landingPage/iconsForSectors/damamushavebeli.svg";
import energetika from "../assets/img/landingPage/iconsForSectors/energetika.svg";
import mshenebloba from "../assets/img/landingPage/iconsForSectors/mshenebloba.svg";
import sastumroebi from "../assets/img/landingPage/iconsForSectors/sastumroebi.svg";
import transporti from "../assets/img/landingPage/iconsForSectors/transporti.svg";
import kavshirgabmuloba from "../assets/img/landingPage/iconsForSectors/kavshirgabmuloba.svg";
import ganatleba from "../assets/img/landingPage/iconsForSectors/ganatleba.svg";
import jandacva from "../assets/img/landingPage/iconsForSectors/jandacva.svg";
import safinanso from "../assets/img/landingPage/iconsForSectors/safinanso.svg";
import danarcheni from "../assets/img/landingPage/iconsForSectors/danarcheni.svg";



const sectionNames = [
    'სოფლის მეურნეობა, თევზჭერა',
    'სამთომოპოვებითი მრეწველობა',
    'დამამუშავებელი მრეწველობა',
    'ენერგეტიკა',
    'მშენებლობა',
    'სასტუმროები და რესტორნები',
    'ტრანსპორტი',
    'კავშირგაბმულობა',
    'განათლება',
    'ჯანდაცვა და სოციალური დახმარება',
    'უძრავი ქონება',
    'საფინანსო სექტორი',
    'დანარჩენი სექტორები'
]
function SelectWorldOrSector(props) {
  const optionsSector = [
    {
      value: sectionNames[0],
      label: (
        <div className="selectiondiv">
          <img src={soflis_meurneoba} alt="" className="SeqtorebisIcons" />
          {sectionNames[0]}
        </div>
      ),
    },
    {
      value: sectionNames[1],
      label: (
        <div className="selectiondiv">
          <img src={samtomopovebiti} alt="" className="SeqtorebisIcons" />
          {sectionNames[1]}
        </div>
      ),
    },
    {
      value:sectionNames[2],
      label: (
        <div className="selectiondiv">
          <img src={damamushavebeli} alt="" className="SeqtorebisIcons" />
          {sectionNames[2]}
        </div>
      ),
    },
    {
      value: sectionNames[3],
      label: (
        <div className="selectiondiv">
          <img src={energetika} alt="" className="SeqtorebisIcons" />
          {sectionNames[3]}
        </div>
      ),
    },
    {
      value: sectionNames[4],
      label: (
        <div className="selectiondiv">
          <img src={mshenebloba} alt="" className="SeqtorebisIcons" />
          {sectionNames[4]}
        </div>
      ),
    },
    {
      value: sectionNames[5],
      label: (
        <div className="selectiondiv">
          <img src={sastumroebi} alt="" className="SeqtorebisIcons" />
          {sectionNames[5]}
        </div>
      ),
    },
    {
      value: sectionNames[6],
      label: (
        <div className="selectiondiv">
          <img src={transporti} alt="" className="SeqtorebisIcons" />
          {sectionNames[6]}
        </div>
      ),
    },
    {
      value: sectionNames[7],
      label: (
        <div className="selectiondiv">
          <img src={kavshirgabmuloba} alt="" className="SeqtorebisIcons" />
          {sectionNames[7]}
        </div>
      ),
    },
    {
      value: sectionNames[8],
      label: (
        <div className="selectiondiv">
          <img src={ganatleba} alt="" className="SeqtorebisIcons" />
          {sectionNames[8]}
        </div>
      ),
    },
    {
      value: sectionNames[9],
      label: (
        <div className="selectiondiv">
          <img src={jandacva} alt="" className="SeqtorebisIcons" />
          {sectionNames[9]}
        </div>
      ),
    },
    {
      value: sectionNames[10],
      label: (
        <div className="selectiondiv">
          <img src={jandacva} alt="" className="SeqtorebisIcons" />
          {sectionNames[10]}
        </div>
      ),
    },
    {
      value: sectionNames[11],
      label: (
        <div className="selectiondiv">
          <img src={safinanso} alt="" className="SeqtorebisIcons" />
          {sectionNames[11]}
        </div>
      ),
    },
    {
      value: sectionNames[12],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {sectionNames[12]}
        </div>
      ),
    },
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 72,
      minHeight: 72,
      backgroundImage: `url(${
        props.tabswitch === "სექტორების" ? sectorIcon : countryIcon
      })`,
      backgroundRepeat: "no-repeat",
      width: "100%",
      backgroundPosition: "right 6% top 50%",
      paddingLeft: "6%",
      color: "#808083",
      borderRadius: "10px",
      border: "none",
    }),
  };

  return props.tabswitch === "სექტორების" ? (
    <Select
      name="sector"
      id="sector"
      placeholder="აირჩიეთ სასურველი სექტორი"
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      className="chooseCountrySelect"
      options={optionsSector}
    />
  ) : (
    <Select
      name="country"
      id="country"
      placeholder="აირჩიეთ სასურველი ქვეყანა"
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      className="chooseCountrySelect"
      options={optionsSector}
    />
  );
}
export default SelectWorldOrSector;
