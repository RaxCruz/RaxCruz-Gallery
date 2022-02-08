import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NavLeft from "./NavLeft";
import ShowArea from "./ShowArea";

function NavRouter() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          //Layout and sidebar can now receive props
          <App {...props}>
            <Routes>
              <Route path="/" exact element={<ShowArea />} />
            </Routes>
          </App>
        )}
      />
    </BrowserRouter>
  );
}

export default NavRouter;
