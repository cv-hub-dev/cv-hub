import { Formik, Form } from "formik";
import * as React from "react"
import Input from '../../components/Input';
// import TextArea from '../../components/TextArea';
// import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';


const PersonalPage = () => {

  const {storedValue: personalValues, setValue: setPersonalValues} = useLocalStorage('personal')
  
  const initialValues = {
    name: ``,
    phone: ``,
    email: ``,
    address: ``,
    title: ``,
    linkedin: ``,
    github: ``,
    // someTextArea: ``,
    // someCheckBox: false
  }

  return (
    <div className="duo-layout">
      <Formik initialValues={personalValues || initialValues}>
        {({values}) => (
        <Form className="form" onChange={(changedValue) => handleOnChange({values, changedValue, setValues: setPersonalValues})}>
          <h3>General</h3>
          <Input name="name" required type="text" label="Full Name" />
          <Input name="phone" type="tel" label="Phone number" />
          <Input name="email" type="email" label="Email address" />
          <Input name="address" type="text" label="Home address" />
          <Input name="title" type="text" label="Job Title" />

          <h3>Social</h3>
          <Input name="linkedin" type="url" label="LinkedIn" />
          <Input name="github" type="url" label="GitHub" />

          {/* <TextArea name="someTextArea" label="Something" />
          <Checkbox name="someCheckbox" label="Something" /> */}

          <div className="buttonsWrapper">
            <Button variant="secondary" to="/education">Back</Button>
            <Button to="/education">Next</Button>
          </div>
        </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default PersonalPage
