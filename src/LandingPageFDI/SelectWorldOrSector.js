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
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {counterActions} from '../store/index'

function SelectWorldOrSector(props) {
  const sectionNames = [
    "სოფლის მეურნეობა, თევზჭერა",
    "სამთომოპოვებითი მრეწველობა",
    "დამამუშავებელი მრეწველობა",
    "ენერგეტიკა",
    "მშენებლობა",
    "სასტუმროები და რესტორნები",
    "ტრანსპორტი",
    "კავშირგაბმულობა",
    "განათლება",
    "ჯანდაცვა და სოციალური დახმარება",
    "უძრავი ქონება",
    "საფინანსო სექტორი",
    "დანარჩენი სექტორები",
  ];

  const cuntries = [
    "ამერიკის შეერთებული შტატები",
    "ჩინეთი",
    "თურქეთი",
    "საფრანგეთი",
    "უკრაინა",
    "აზერბაიჯანი",
    "სომხეთი",
    "რუსეთი",
    "იტალია",
    "უზბეკეთი",
    "ავსტრია",
    "ბელგია",
    "ბულგარეთი",
    "ხორვატია",
    "კვიპროსი",
    "ესტონეთი",
    "საბერძნეთი",
    "ლუქსემბურგი",
    "ყირგიზეთი",
    "თურქმენეთი",
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
      width: "90%",
      backgroundPosition: "right 6% top 50%",
      paddingLeft: "6%",
      color: "#808083",
      borderRadius: "10px",
      border: "none",
      textAlign: "left",
    }),
  };
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
      value: sectionNames[2],
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
  const optionCountry = [
    {
      value: cuntries[0],
      label: (
        <div className="selectiondiv">
          <img src={soflis_meurneoba} alt="" className="SeqtorebisIcons" />
          {cuntries[0]}
        </div>
      ),
    },
    {
      value: cuntries[1],
      label: (
        <div className="selectiondiv">
          <img src={samtomopovebiti} alt="" className="SeqtorebisIcons" />
          {cuntries[1]}
        </div>
      ),
    },
    {
      value: cuntries[2],
      label: (
        <div className="selectiondiv">
          <img src={damamushavebeli} alt="" className="SeqtorebisIcons" />
          {cuntries[2]}
        </div>
      ),
    },
    {
      value: cuntries[3],
      label: (
        <div className="selectiondiv">
          <img src={energetika} alt="" className="SeqtorebisIcons" />
          {cuntries[3]}
        </div>
      ),
    },
    {
      value: cuntries[4],
      label: (
        <div className="selectiondiv">
          <img src={mshenebloba} alt="" className="SeqtorebisIcons" />
          {cuntries[4]}
        </div>
      ),
    },
    {
      value: cuntries[5],
      label: (
        <div className="selectiondiv">
          <img src={sastumroebi} alt="" className="SeqtorebisIcons" />
          {cuntries[5]}
        </div>
      ),
    },
    {
      value: cuntries[6],
      label: (
        <div className="selectiondiv">
          <img src={transporti} alt="" className="SeqtorebisIcons" />
          {cuntries[6]}
        </div>
      ),
    },
    {
      value: cuntries[7],
      label: (
        <div className="selectiondiv">
          <img src={kavshirgabmuloba} alt="" className="SeqtorebisIcons" />
          {cuntries[7]}
        </div>
      ),
    },
    {
      value: cuntries[8],
      label: (
        <div className="selectiondiv">
          <img src={ganatleba} alt="" className="SeqtorebisIcons" />
          {cuntries[8]}
        </div>
      ),
    },
    {
      value: cuntries[9],
      label: (
        <div className="selectiondiv">
          <img src={jandacva} alt="" className="SeqtorebisIcons" />
          {cuntries[9]}
        </div>
      ),
    },
    {
      value: cuntries[10],
      label: (
        <div className="selectiondiv">
          <img src={jandacva} alt="" className="SeqtorebisIcons" />
          {cuntries[10]}
        </div>
      ),
    },
    {
      value: cuntries[11],
      label: (
        <div className="selectiondiv">
          <img src={safinanso} alt="" className="SeqtorebisIcons" />
          {cuntries[11]}
        </div>
      ),
    },
    {
      value: cuntries[12],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[12]}
        </div>
      ),
    },
    {
      value: cuntries[13],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[13]}
        </div>
      ),
    },
    {
      value: cuntries[14],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[14]}
        </div>
      ),
    },
    {
      value: cuntries[15],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[15]}
        </div>
      ),
    },
    {
      value: cuntries[16],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[16]}
        </div>
      ),
    },
    {
      value: cuntries[17],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[17]}
        </div>
      ),
    },
    {
      value: cuntries[18],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[18]}
        </div>
      ),
    },
    {
      value: cuntries[19],
      label: (
        <div className="selectiondiv">
          <img src={danarcheni} alt="" className="SeqtorebisIcons" />
          {cuntries[19]}
        </div>
      ),
    },
  ];

  const [sectionCountry, SetSecCou] = useState(1);

  //adding sectionOrCountry in redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(counterActions.addcountryOrSectore(sectionCountry));
  }, [sectionCountry, dispatch]);

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
      onChange={(e) => SetSecCou(e.value)}
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
      options={optionCountry}
      onChange={(e) => SetSecCou(e.value)}
    />
  );
}
export default SelectWorldOrSector;
