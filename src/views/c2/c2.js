import React from "react";
import { CCol, CRow } from "@coreui/react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import About from "../about/About";
import Blog from "../blog/Blog";
import { Scrollbars } from "react-custom-scrollbars";

const C2 = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  console.log("C2", props);

  return (
    // <CCol lg={`${isDesktopOrLaptop ? "6" : "12"}`} className="rounded p-3 adjust-container">
    <CCol className="rounded p-3 adjust-container adjust-col-width container-mid np-in-container">
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
        <CRow>
          {isDesktopOrLaptop ? (
              <Switch>
                {/* <Redirect from='/about' to="/" /> */}
                <Route 
                  path="/about"
                  exact
                  render={(props) => <About {...props} />}
                />

                <Route
                  path="/blogs/:slug"
                  render={(props) => <Blog {...props} />}
                />
                <Redirect from="*" to="/about"/>
              </Switch>
          ) : (
            <div>
              {props.location.pathname.includes("about") ? (
                <About {...props} />
              ) : (
                <Blog {...props} />
              )}
            </div>
          )}
        </CRow>
      </Scrollbars>
    </CCol>
  );
};

export default C2;
