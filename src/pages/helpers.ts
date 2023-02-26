export const handleOnChange = ({values, changedValue, setValues}) => {
  if (changedValue) {
    const changedKeyValPair = changedValue.target.type === `checkbox`
    ? {[changedValue.target.name]: changedValue.target.checked}
    : {[changedValue.target.name]: changedValue.target.value}
    setValues({...values, ...changedKeyValPair})
  } else {
    console.log(values)
    setValues({...values})
  }
}
