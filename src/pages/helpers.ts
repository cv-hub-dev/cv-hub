export const handleOnChange = ({values, changedValue, setValues}) => {
  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedValue.target.name]: changedValue.target.checked}
  : {[changedValue.target.name]: changedValue.target.value}
  setValues({...values, ...changedKeyValPair})
}


export const handleOnChangeArray = ({values, changedValue, setValues}) => {
  const changedArrayKeyName = changedValue.target.name.split(`[`)[0]
  const changedField = changedValue.target.name.split(`.`)[1]
  const changedIndex = changedValue.target.name.replace( /(^.*\[|\].*$)/g, '' );

  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedField]: changedValue.target.checked}
  : {[changedField]: changedValue.target.value}

  const changedArray = values[changedArrayKeyName]
  changedArray[changedIndex] = {...changedArray[changedIndex], ...changedKeyValPair}

  const newArrayValues = {
    [changedArrayKeyName]: changedArray
  }

  setValues({...values, ...newArrayValues})
}
