import React from "react"
import { Route } from "react-router-dom"

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function MainRoute({ children, ...props }) {

  const MainComponent = (() => children);

  return (
    <Route {...props}>
      <div className="contents">
        <Header />
        {/* spaces page with sticky header properly */}
        <div className="header-spacing"></div>
        <MainComponent {...props} />
      </div>
      <Footer />
    </Route>
  )
}
