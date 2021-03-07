import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {CHANGE_MODE} from '../../store/actions/actionTypes';
import CIcon from '@coreui/icons-react';
import {
  cilSun,
  cilMoon
} from '@coreui/icons';

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Modebutton = (props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      var d = new Date();
      var day = days[d.getDay()];
      var hr = d.getHours();
      var min = d.getMinutes();
      if (min < 10) {
        min = "0" + min;
      }
      var ampm = "AM";
      if (hr > 12) {
        hr -= 12;
        ampm = "PM";
      }
      var date = d.getDate();
      var month = months[d.getMonth()];
      var year = d.getFullYear();
      setTime(
        day +
          " " +
          hr +
          ":" +
          min +
          " " + 
          ampm +
          ", " +
          month +
          " " +
          date +
          " " +
          year
      );
      return () => {
        clearInterval(timer);
      }

    }, 1000);
  }, []);

  const toggleTheme = () => {
    if (props.mode === 'light') {
      props.changeMode('dark');
    } else if (props.mode === 'dark') {
      props.changeMode('light');
    }
  };

  return (
    <div className="w-100 d-flex justify-content-between align-items-center mb-3">
      <span>{time}</span>
      <div onClick={() => {toggleTheme()}} className="toggleIcon">
        {props.mode == 'light' ? <CIcon content={cilMoon} size="xl" /> : null}
        {props.mode == 'dark' ? <CIcon content={cilSun} size="xl" /> : null}
      </div>
      {/* <div onClick={() => {toggleTheme()}} className="toggleIcon">
        
        {mode}
        {props.mode == 'light' ? <CIcon content={cilMoon} size="xl" /> : <CIcon content={cilSun} size="xl" />} 
      </div> */}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    mode: state.modeReducer.mode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: (currentMode) => dispatch({type: CHANGE_MODE, selectedMode: currentMode})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modebutton);
