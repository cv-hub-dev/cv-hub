import DataObjectParser from 'dataobject-parser/lib/utils/dataobject-parser'
import mergeWith from 'lodash.mergewith'
import isArray from 'lodash.isarray'

export const handleOnChange = ({values, changedValue, setValues}) => {
  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedValue.target.name]: changedValue.target.checked}
  : {[changedValue.target.name]: changedValue.target.value}
  setValues({...values, ...changedKeyValPair})
}


export const handleOnChangeArray = ({values, changedValue, setValues, isCheckboxArray = false}) => {

  const d = new DataObjectParser();

  const targetName = `${changedValue.target.name}`
  const targetValue = `${changedValue.target.value}`
  let uncheckedBox = false
  
  if (changedValue.target.type === `checkbox`) {
    if (isCheckboxArray && changedValue.target.checked) {
      const existingValues = values[targetName] || []
      const newArrayValues = [...existingValues, targetValue]
      d.set(targetName, newArrayValues)
    } else if (isCheckboxArray && !changedValue.target.checked) {
      const newItems = values[targetName].filter(
        (item) => item !== targetValue
      )
      d.set(targetName, newItems)
      uncheckedBox = true
    } else {
      d.set(targetName, changedValue.target.checked)
    }
  } else {
    d.set(targetName, targetValue)
  }

  const transposed = d.data();
  const newValues = mergeWith(values, transposed, (a, b) => 
    isArray(b) ? b : undefined
  )
  
  setValues(newValues)
}
