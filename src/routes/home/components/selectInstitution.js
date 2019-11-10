import React, { useState } from "react";

import { Row, Col, InputGroup } from "reactstrap";

import SearchDropdown from "../../../components/searchDropdown";

const SelectInstitution = props => {
  const institutions = props.institutions;
  const onSelectInstitution = props.onSelectInstitution;

  const institutionsSample = [
    {
      id: 1,
      name: "Item 1"
    },
    {
      id: 2,
      name: "Item 2"
    },
    {
      id: 3,
      name: "Item 3"
    },
    {
      id: 4,
      name: "Item 4"
    },
    {
      id: 5,
      name: "Item 5"
    },
    {
      id: 6,
      name: "Item 2"
    },
    {
      id: 7,
      name: "Item 3"
    },
    {
      id: 8,
      name: "Item 4"
    }
  ];

  if (institutions.length === 0) {
    return (
      <Row>
        <Col>
          <InputGroup>
            <SearchDropdown
              placeholder={"Select Institution"}
              items={institutionsSample}
              onSelectItem={onSelectInstitution}
            />
          </InputGroup>
        </Col>
      </Row>
    );
  }

  return (
    <div className="is-select">
      <select onChange={event => onSelectInstitution(event)}>
        <option value={0}>-- Select institution --</option>
        {institutions.map(institution => {
          return (
            <option key={institution.id} value={institution.id}>
              {institution.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInstitution;
