import Select from "react-select";
import dateIcon from "../assets/img/landingPage/dateIcon.png";
import "./LandingPage.css";
function SelectedYear() {
  function Selected(e) {
    console.log(e);
  }

  const years = [
    2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007,
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 72,
      minHeight: 72,
      backgroundImage: `url(${dateIcon})`,
      borderRadius: "10px",
      border: "none",
      backgroundRepeat: "no-repeat",
      width: "50%",
      backgroundPosition: "right 6% top 50%",
    }),
  };
  const optionsSector = [
    {
      value: years[0],
      label: <div className="dateOptions">{years[0]}</div>,
    },
    {
      value: years[1],
      label: <div className="dateOptions">{years[1]}</div>,
    },
    {
      value: years[2],
      label: <div className="dateOptions">{years[2]}</div>,
    },
    {
      value: years[3],
      label: <div className="dateOptions">{years[3]}</div>,
    },
    {
      value: years[4],
      label: <div className="dateOptions">{years[4]}</div>,
    },
    {
      value: years[5],
      label: <div className="dateOptions">{years[5]}</div>,
    },
    {
      value: years[6],
      label: <div className="dateOptions">{years[6]}</div>,
    },
    {
      value: years[7],
      label: <div className="dateOptions">{years[7]}</div>,
    },
    {
      value: years[8],
      label: <div className="dateOptions">{years[8]}</div>,
    },
    {
      value: years[9],
      label: <div className="dateOptions">{years[9]}</div>,
    },
    {
      value: years[10],
      label: <div className="dateOptions">{years[10]}</div>,
    },
    {
      value: years[11],
      label: <div className="dateOptions">{years[11]}</div>,
    },
    {
      value: years[12],
      label: <div className="dateOptions">{years[12]}</div>,
    },
    {
      value: years[13],
      label: <div className="dateOptions">{years[12]}</div>,
    },
    {
      value: years[14],
      label: <div className="dateOptions">{years[12]}</div>,
    },
  ];
  return (
    <Select
      name="sector"
      id="sector"
      placeholder="2021"
      className="chooseCountrySelect"
      options={optionsSector}
      styles={customStyles}
      components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
      onChange={(e) => Selected(e)}
    />
  );
}
export default SelectedYear;
