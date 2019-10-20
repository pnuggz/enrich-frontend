import React from "react"

const SelectInstitution = props => {
  const institutions = props.institutions
  const onSelectInstitution = props.onSelectInstitution

  if (institutions.length === 0) {
    return (
      <div className="is-select">
        <select>
          <option>Loading...</option>
        </select>
      </div>
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