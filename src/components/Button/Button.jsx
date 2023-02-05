import * as React from "react"
import "./Button.scss"
import { Link } from "gatsby"

const Button = ({to = "/", children, variant = `primary`}) => (
  <Link to={to} className={`button ${variant === `primary` ? `buttonPrimary` : `buttonSecondary`}`}>
    {children}
  </Link>
)

export default Button
