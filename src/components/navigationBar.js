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
  const [scrollY, setScrollY] = useState(0);
  const propsLocation = props.location;

  const updateLocation = newLocation => {
    setLocation(newLocation);
  };

  useEffect(() => {
    setLocation(propsLocation);
  }, [propsLocation]);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      const scrollPos = window.scrollY
      const navSize = document.getElementsByTagName('nav')

      if(scrollPos <= navSize && scrollY !== 0) {
        setScrollY(scrollPos)
      } else if(scrollPos > navSize && scrollY === 0) {
        setScrollY(scrollPos)
      }
    })
  }, [])

  useEffect(() => {
    console.log(scrollY)
  })

  return (
    <React.Fragment>
      {(location.pathname !== "/test") ? 
        <React.Fragment>
          <WithRouterProps updateLocation={location => updateLocation(location)} />
          <nav className={`fixed-top navbar navbar--expand-lg ${(scrollY > 0 ? '' : 'navbar--transparent')}`} color-on-scroll="100">
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
              <div className="justify-content-end undefined collapse navbar--collapse">
                <div class="navbar--collapse">
                  <div className="header">
                    <div class="row">
                      <div class="collapse-brand col-6">
                        <a href="#pablo">BLK•React</a>
                      </div>
                      <div class="collapse-close text-right col-6">
                        <button aria-expanded="false" class="navbar--toggler">
                          <i class="tim-icons icon-simple-remove"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="navbar__navigations">
                  <li className="p-0 navbar__navigations--link"><Notification /></li>
                  {links.map((link, key) => {
                    const linkClass = location.pathname === link.path ? "is-selected" : "";
                    return (
                      <li className={`${linkClass} p-0 navbar__navigations--link`}>
                        <Link key={key} exact="true" to={link.path}>
                          {link.text}
                        </Link>
                      </li>
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
