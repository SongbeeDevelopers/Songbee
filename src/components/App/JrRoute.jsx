import React from "react"
import { Route } from "react-router-dom"

import JrHeader from "../JrHeader/JrHeader";
import JrFooter from "../JrFooter/JrFooter";


export default function JrRoute({ children, ...props }) {

  const JrComponent = (() => children);

  return (
    <Route {...props}>
      <JrHeader />
      {/* spaces page with sticky header properly */}
      <div className="jr-header-spacing"></div>
      <JrComponent {...props} />
      <JrFooter />
    </Route>
  )
}
