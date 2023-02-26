import * as React from "react"
import "./Pill.scss"

const Pill = ({children, active, ...props}) => {
  return (
    <button type="button" className={`pill ${active ? `pillActive` : ``}`} {...props}>
      {!active && `+ `}{children}
    </button>
  )
}

export default Pill
