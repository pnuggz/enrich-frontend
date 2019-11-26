import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WithRouterProps from "./withRouterProps";

import { Notification } from "../modules/notification"

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

  return (
    <React.Fragment>
      {(location.pathname !== "/") ? 
        <React.Fragment>
          <WithRouterProps updateLocation={location => updateLocation(location)} />
          <nav className="fixed-top navbar--transparent navbar navbar--expand-lg" color-on-scroll="100">
            <div className="container">
              <div className="navbar--translate">
                <a 
                  data-placement="bottom" 
                  rel="noopener noreferrer" 
                  title="Designed and Coded by Creative Tim" 
                  class="navbar__brand" href="#/"
                >
                  <span>BLK• </span>
                  Design System React
                </a>
                <button 
                  aria-expanded="false" 
                  class="navbar__navigations--toggler"
                >
                  <span class="bar bar1" />
                  <span class="bar bar2" />
                  <span class="bar bar3" />
                </button>
              </div>
              <div className="top__links is-end">
                <ul>
                  <li><Notification /></li>
                  {links.map((link, key) => {
                    const linkClass = location.pathname === link.path ? "is-selected" : "";
                    return (
                      <Link key={key} exact="true" to={link.path}>
                        <li className={linkClass}>{link.text}</li>
                      </Link>
                    )
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </React.Fragment>
        : null
      }
    </React.Fragment>
  );
};
