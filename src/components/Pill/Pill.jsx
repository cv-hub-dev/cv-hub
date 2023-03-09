import * as React from "react"
import {Field} from 'formik'
import "./Pill.scss"

const Pill = ({children, active, ...props}) => {
  return (
    <label className={`pill ${active ? `pillActive` : ``}`}>
      <Field className={`pillCheckbox`} type="checkbox" {...props} />
      {!active && `+ `}{children}
    </label>
  )
}

export default Pill
