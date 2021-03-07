import React from "react";
import { CCol, CRow } from "@coreui/react";
import Modebutton from "../modebutton/modebutton";
import Notefield from "../../components/notefield";
import Subscribe from '../../components/Subscribe';
import ListSocial from '../../components/ListSocial';
import Copyright from '../../components/Copyright';
import { Scrollbars } from "react-custom-scrollbars";

const C3 = (props) => {
  return (
    <CCol lg="3" className="rounded-lg py-3 adjust-container container-right np-out-container">
      <Scrollbars
        autoHide
        autoHideTimeout={300} 
        autoHideDuration={200}
        renderThumbVertical={({ style, ...props }) => {
          const thumbStyle = {
            borderRadius: 6,
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          };
          return <div style={{ ...style, ...thumbStyle }} {...props} />;
        }}>
          <div className="row container-right__content">
            <div className="adjust-width">
              <Modebutton />
              <Notefield />
              <Subscribe />
              <ListSocial />
              <Copyright />
            </div>
          </div>
        </Scrollbars>
      
    </CCol>
  );
};

export default C3;
