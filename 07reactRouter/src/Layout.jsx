import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;

//Short Notes:-
//Outlet :-Suppose we are giving outlet in between header and fooeter tag, both will remain same.Only middle part will chnage.
//Wherever we will use outlet, we can change things.

//We are using this layout component, so that header and footer should always appear,and we are loopong it in main.jsx
//first we are routing to layout component which and then we are routing other component.
//for this reason only, header and footer is always appearing.
