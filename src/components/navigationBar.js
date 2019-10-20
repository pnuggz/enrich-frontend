import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WithRouterProps from "./withRouterProps";

const links = [
  {
    path: "/",
    text: "Home"
  },
  {
    path: "/about",
    text: "About"
  },
  {
    path: "/contact",
    text: "Contact"
  }
];

export const NavigationBar = props => {
  const [location, setLocation] = useState({});
  const propsLocation = props.location;

  const updateLocation = newLocation => {
    setLocation(newLocation);
  };

  useEffect(() => {
    setLocation(propsLocation);
  }, [propsLocation]);

  const renderLinks = () => {
    return links.map((link, key) => {
      const linkClass = location.pathname === link.path ? "is-selected" : "";
      return (
        <Link key={key} exact="true" to={link.path}>
          <li className={linkClass}>{link.text}</li>
        </Link>
      );
    });
  };

  return (
    <div className="grid">
      <WithRouterProps updateLocation={location => updateLocation(location)} />
      <div className="column is-full has-no-padding">
        <nav className="top">
          <div className="top__brand">
            <img width="60px" src="logo192.png" />
          </div>
          <div className="top__links is-end">
            <ul>{renderLinks()}</ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
