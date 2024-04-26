import React from "react"
import { Route } from "react-router-dom"

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function MainRoute({ children, ...props }) {

  const MainComponent = (() => children);

  return (
    <Route {...props}>
      <Header />
      <MainComponent {...props} />
      <Footer />
    </Route>
  )
}
