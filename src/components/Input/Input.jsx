import * as React from "react"
import {Field} from 'formik'
import "./Input.scss"

const Input = ({label = "Label", id = "", required, ...props}) => (
  <div className="inputGroup">
    <label htmlFor={id} className="inputLabel">{label}{!required && ` (Optional)`}</label>
    <Field id={id} required={required} className='input' {...props} />
  </div>
)

export default Input
