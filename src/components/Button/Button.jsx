import * as React from "react"
import "./Button.scss"
import { Link } from "gatsby"

const Button = ({to = "/", children}) => (
  <Link to={to} className='button'>
    {children}
  </Link>
)

export default Button
