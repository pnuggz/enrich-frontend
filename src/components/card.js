import React from "react";

const Card = props => {
  const { children, header, footer, cardClass = '', headerClass = '', bodyClass = '', footerClass = '' } = props

  return (
    <div className={`card ${cardClass}`}>
      {header ?
        (
          <div className={`card__header ${headerClass}`}>
            {header}
          </div>
        ) : null
      }

      <div className={`card__body ${bodyClass}`}>
        {children}
      </div>

      {footer ?
        (
          <div className={`card__footer ${footerClass}`}>
            {footer}
          </div>
        ) : null
      }
    </div>
  )
}

export default Card