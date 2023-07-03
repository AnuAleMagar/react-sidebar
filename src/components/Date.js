import React,{useState} from "react";
import "../styles/Datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Date = (props) => {
    const [startDate, setStartDate] = useState("");
    return (<div><h5>{props.content}</h5>
      <DatePicker className="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>);
  };
  export default Date;