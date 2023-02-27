import set from 'lodash.set'

export const handleOnChange = ({values, changedValue, setValues}) => {
  const changedKeyValPair = changedValue.target.type === `checkbox`
  ? {[changedValue.target.name]: changedValue.target.checked}
  : {[changedValue.target.name]: changedValue.target.value}
  const newValues = {
    ...values,
  }

  Object.keys(changedKeyValPair).forEach(key => {
    set(newValues, key, changedKeyValPair[key])
  })

  setValues(newValues)
}
