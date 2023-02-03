import * as React from "react"
import {Field} from 'formik'
import "./TextArea.scss"

const TextArea = ({label = "Label", id = "", required, rows, ...props}) => (
  <div className="inputGroup">
    <label htmlFor={id} className="inputLabel">{label}{!required && ` (Optional)`}</label>
    <Field id={id} required={required} className='input' as='textarea' rows="4" {...props} />
  </div>
)

export default TextArea
