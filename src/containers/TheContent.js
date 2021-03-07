import React, { Suspense, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { CFade, CRow } from "@coreui/react";
import { connect } from "react-redux";
import { fetchAuthors } from "../store/actions/authors";
import { fetchCategories } from "../store/actions/categories";
import { useMediaQuery } from "react-responsive";
import Home from "../views/Home";
import C1 from "../views/c1/c1";
import C2 from "../views/c2/c2";
import Modebutton from "../views/modebutton/modebutton";

const TheContent = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  useEffect(() => {
    props.fetchAuthors();
    props.fetchCategories();
  }, []);

  return (
    <main className="c-main">
      <Suspense fallback={null}>
        {isDesktopOrLaptop ? (
          <Switch>
            <Route
              path="/"
              render={(props) => {
                return (
                  <CFade>
                    <Home {...props}/>
                  </CFade>
                )
              }} />
          </Switch>
        ) : (
          <>
            <Modebutton />
            <Switch>
              <Route
                path="/home/"
                exact
                render={(props) => (
                  <CFade>
                    <CRow>
                      <C1 {...props} />
                    </CRow>
                  </CFade>
                )}
              />
              <Route
                path="/blog/:slug/"
                render={(props) => (
                  <CFade>
                    <CRow>
                      <C2 {...props} />
                    </CRow>
                  </CFade>
                )}
              />
              <Route
                path="/about/"
                exact
                render={(props) => (
                  <CFade>
                    <CRow>
                      <C2 {...props} />
                    </CRow>
                  </CFade>
                )}
              />
              <Redirect from="/" to="/home/" />
            </Switch>
          </>
        )}
      </Suspense>
    </main>
  );
};

export default connect(null, { fetchAuthors, fetchCategories })(TheContent);
