// Main.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout"; // Layout containing Navbar and Outlet
import App from "./App"; // Home page
import AboutUs from "./aboutus"; // About Us page
import Agents from "./agents"; // Agents page
import Services from "./services"; // Services page
import PropertyListing from "./listings"; // Property Listings page
import Login from "./login"; // Login page

import { useState } from "react";
import W from "./within_range";

const Main = () => {
  let [log,set_Log] = useState(0);
  let [prof,set_Prof] = useState("");

  let change_log = (k)=>{
    
    set_Log(1);
    set_Prof(k.profilePicture);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout v={prof} log={log} />, // Pass user state to Layout
      children: [
        { path: "/", element: <App /> }, // Main page route
        { path: "aboutus", element: <AboutUs /> }, // About Us route
        { path: "agents", element: <Agents /> }, // Agents route
        { path: "services", element: <Services /> }, // Services route
        { path: "PropertyListing", element: <PropertyListing /> }, // Property Listing route
        { path: "login", element: <Login updateParentState={change_log} /> }, // Pass user state and setter to Login
        { path: "w", element: <W/> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Main;