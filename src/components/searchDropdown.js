import React, { useState } from "react";

import { InputGroupAddon, InputGroupText } from "reactstrap";

import ObjectsQueryFilter from "../lib/objectsQueryFilter";

const SearchDropdown = props => {
  const defaultPlaceholder = props.placeholder || "Search";
  const defaultItems = props.items || [];
  // const onSelectItem = props.onSelectItem;
  const onSelectItem = e => console.log(e);

  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState(defaultItems);

  const searchFocus = e => {
    const input = e.target.value;
    let query;
    if (input === defaultPlaceholder) {
      setPlaceholder("");
      query = "";
    } else {
      query = input;
    }
    setItems(
      ObjectsQueryFilter({ query: query, objects: defaultItems, key: "name" })
    );
    setIsFocus(true);
  };

  const searchFilter = e => {
    const input = e.target.value;
    if (input === "") {
      setValue(null);
    }
    setPlaceholder(input);

    setItems(
      ObjectsQueryFilter({ query: input, objects: defaultItems, key: "name" })
    );
  };

  const resetFilter = e => {
    const relatedEvent = e.relatedTarget;
    if (relatedEvent !== null) {
      return;
    }

    const input = document.getElementsByClassName("search-dropdown__input")[0].value;
    if (input === "") {
      setPlaceholder(defaultPlaceholder);
      setValue(null);
    }
    setIsFocus(false);
  };

  const selectItem = (e = null) => {
    if (e === null) {
      resetFilter();
      return;
    }

    const value = e.target.getAttribute("value");
    const text = e.target.textContent;

    setPlaceholder(text);
    setValue(value);
    onSelectItem(value);

    setIsFocus(false);
  };

  return (
    <React.Fragment>
      <div className="search-dropdown">
        <input
          type="text"
          className="search-dropdown__input"
          value={placeholder}
          onFocus={e => searchFocus(e)}
          onChange={e => searchFilter(e)}
          onBlur={e => resetFilter(e)}
        />
        <div className="search-dropdown__caret-wrapper">
          <div
            className="search-dropdown__caret"
            style={{ lineHeight: 1, cursor: "pointer" }}
            onClick={() => {
              document.getElementsByClassName("search-dropdown__input")[0].focus();
            }}
          >
            {/* <i className="tim-icons icon-lock-circle" /> */}
            {isFocus ? ">" : "<"}
          </div>
        </div>
        <div
          className="search-dropdown__item-wrapper"
          style={{ display: isFocus ? "block" : "none" }}
        >
          {items.map(item => {
            return item.id === 0 ? (
              <div
                className="search-dropdown-item text-warning"
                key={item.id}
                value={item.id}
                tabIndex={0}
              >
                {item.name}
              </div>
            ) : (
              <div
                className="search-dropdown-item"
                key={item.id}
                value={item.id}
                onClick={e => selectItem(e)}
                tabIndex={0}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchDropdown;
