export const handleOnChange = ({values, changedValue, setValues}) => {
  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedValue.target.name]: changedValue.target.checked}
  : {[changedValue.target.name]: changedValue.target.value}
  setValues({...values, ...changedKeyValPair})
}
