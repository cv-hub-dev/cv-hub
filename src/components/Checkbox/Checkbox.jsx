import * as React from "react"
import {Field} from 'formik'
import "./Checkbox.scss"

const Checkbox = ({label = "Label", id = "", required, ...props}) => (
  <div className="checkboxGroup">
    <label className="checkboxLabel">
      <Field type="checkbox" required={required} className='checkbox' {...props} />
      <div>{label}{!required && ` (Optional)`}</div>
    </label>
  </div>
)

export default Checkbox
