import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Views/Home";
import About from "./Views/About";
import Page404 from "./Views/404";

const container = document.querySelector("app-layout");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
