import { Formik, Form } from "formik";
import * as React from "react"
import Input from '../../components/Input';
// import TextArea from '../../components/TextArea';
// import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';


const PersonalPage = () => {

  const {storedValue: personalValues, setValue: setPersonalValues} = useLocalStorage('personal')

  const handleOnChange = ({values, changedValue}) => {
    const changedKeyValPair = changedValue.target.type === `checkbox`
    ? {[changedValue.target.name]: changedValue.target.checked}
    : {[changedValue.target.name]: changedValue.target.value}
    setPersonalValues({...values, ...changedKeyValPair})
  }
  
  const initialValues = {
    name: ``,
    phone: ``,
    email: ``,
    address: ``,
    linkedin: ``,
    github: ``,
    // someTextArea: ``,
    someCheckBox: false
  }

  return (
    <div className="duo-layout">
      <Formik initialValues={personalValues || initialValues}>
        {({values}) => (
        <Form className="form" onChange={(changedValue) => handleOnChange({values, changedValue})}>
          <h3>General</h3>
          <Input name="name" required type="text" label="Full Name" />
          <Input name="phone" type="tel" label="Phone number" />
          <Input name="email" type="email" label="Email address" />
          <Input name="address" type="text" label="Home address" />

          <h3>Social</h3>
          <Input name="linkedin" type="url" label="LinkedIn" />
          <Input name="github" type="url" label="GitHub" />

          {/* <TextArea name="someTextArea" label="Something" /> */}
          {/* <Checkbox name="someCheckbox" label="Something" /> */}

          <Button to="/">Next</Button>
        </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default PersonalPage
