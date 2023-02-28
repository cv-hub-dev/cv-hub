import DataObjectParser from 'dataobject-parser/lib/utils/dataobject-parser'
import merge from 'lodash.merge'

export const handleOnChange = ({values, changedValue, setValues}) => {
  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedValue.target.name]: changedValue.target.checked}
  : {[changedValue.target.name]: changedValue.target.value}
  setValues({...values, ...changedKeyValPair})
}


export const handleOnChangeArray = ({values, changedValue, setValues}) => {

  const d = new DataObjectParser();
  
  changedValue.target.type === `checkbox`
  ? d.set(changedValue.target.name, changedValue.target.checked)
  : d.set(changedValue.target.name, changedValue.target.value)

  const transposed = d.data();
  const newValues = merge(values, transposed)
  
  setValues(newValues)
}
