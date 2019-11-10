import React, { useState } from "react";

import { InputGroupAddon, InputGroupText } from "reactstrap";

import ObjectsQueryFilter from "../lib/objectsQueryFilter";

const SearchDropdown = props => {
  const defaultPlaceholder = props.placeholder || "Search";
  const defaultItems = props.items || [];
  const onSelectItem = props.onSelectItem;

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

    const input = document.getElementsByClassName("search-dropdown")[0].value;
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
      <input
        type="text"
        className="form-control search-dropdown"
        value={placeholder}
        onFocus={e => searchFocus(e)}
        onChange={e => searchFilter(e)}
        onBlur={e => resetFilter(e)}
      />
      <InputGroupAddon addonType="append">
        <InputGroupText
          className="input-group-text has-border-right-radius"
          style={{ lineHeight: 1, cursor: "pointer" }}
          onClick={() => {
            document.getElementsByClassName("search-dropdown")[0].focus();
          }}
        >
          {/* <i className="tim-icons icon-lock-circle" /> */}
          {isFocus ? ">" : "<"}
        </InputGroupText>
      </InputGroupAddon>
      <div
        className="search-dropdown-menu scrollbar-styling"
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
    </React.Fragment>
  );
};

export default SearchDropdown;
