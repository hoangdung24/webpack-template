import { CImg } from "@coreui/react";
import React from "react";
import image from "../assets/1.png";


const Searchbar = (props) => {
  return (
    <div className="searchbar mb-3 ">
      <div className="searchbar__inner d-flex align-items-center np-in-btn">
        <CImg className="searchbar__icon" src={image}></CImg>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Say something..."
          onChange={(e) =>
            props.onSearch ? props.onSearch(e.target.value) : null
          }
        />
      </div>
    </div>
  );
};

export default Searchbar;
