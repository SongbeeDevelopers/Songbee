import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

{/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:5173/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:5173/user */}

function ProtectedRoute({ component, children, allowedUserClasses=[1,2,3], ...props }) {

  const user = useSelector((store) => store.user);

  const ProtectedComponent = component || (() => children);


  const isUserAllowed = allowedUserClasses.includes(user.class);

  return (
    <Route {...props}>
      {user.id ? (
        isUserAllowed ? (
          <ProtectedComponent />
        ) : (
          <Redirect to="/404" />
        )
      ) : (
        <LoginPage />
      )}
    </Route>
  );
  }

export default ProtectedRoute;
