import * as React from "react"
import "./Button.scss"
import { Link } from "gatsby"

const Button = ({to = "/", children, variant = `primary`, type, ...props}) => {
  if (type === `button`) {
    return (
      <button className={`button ${variant === `primary` ? `buttonPrimary` : `buttonSecondary`}`} {...props}>
        {children}
      </button>
    )
  }
  else return (
    <Link to={to} className={`button ${variant === `primary` ? `buttonPrimary` : `buttonSecondary`}`}>
      {children}
    </Link>
  )
}

export default Button
