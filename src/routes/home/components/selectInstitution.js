import React, { useState } from "react"
import classnames from "classnames";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

const SelectInstitution = props => {
  const institutions = props.institutions
  const onSelectInstitution = props.onSelectInstitution

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  if (institutions.length === 0) {
    return (
      <Row>
        <Col>
          <Dropdown className="input-select" isOpen={dropdownIsOpen} toggle={() => setDropdownIsOpen(!dropdownIsOpen)}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    )
  }

  return (
    <div className="is-select">
      <select onChange={event => onSelectInstitution(event)}>
        <option value={0}>-- Select institution --</option>
        {institutions.map(institution => {
          return (
            <option key={institution.id} value={institution.id}>{institution.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectInstitution