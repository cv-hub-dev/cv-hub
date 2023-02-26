import * as React from "react"
import {Field} from 'formik'
import "./Select.scss"

const Select = ({label = "Label", id = "", required, disabled, children, ...props}) => (
  <div className="selectGroup">
    <label htmlFor={id} className="selectLabel">{label}{!required && ` (Optional)`}</label>
    <Field
      as="select"
      name="color"
      required={required}
      disabled={disabled}
      className={`select ${disabled ? `selectDisabled` : ``}`}
      {...props}
    >
      {children}
    </Field>
  </div>
)

export default Select
