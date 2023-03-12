import DataObjectParser from 'dataobject-parser/lib/utils/dataobject-parser'
import merge from 'lodash.merge'
import mergeWith from 'lodash.mergewith'
import isArray from 'lodash.isarray'

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

export const handleOnChangeSkillsArray = ({values, changedValue, setValues, isCheckboxArray = false}) => {

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

  console.log(values)
  console.log(transposed)

  const mergedValues = merge(values, transposed)
  const mergedWithValues = mergeWith(values, transposed, (a, b) => 
    isArray(b) ? b : undefined
  )

  console.log(mergedValues)
  console.log(mergedWithValues)

  const newValues = uncheckedBox ? mergedWithValues : mergedValues
  
  setValues(newValues)
}
