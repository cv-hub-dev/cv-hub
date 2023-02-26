import { Formik, Form } from "formik";
import * as React from "react"
import Input from '../../components/Input';
import Button from '../../components/Button';
import Preview from '../../components/Preview';
import Stepper from '../../components/Stepper';
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';


const PersonalPage = ({location}) => {

  const {storedValue: personalValues, setValue: setPersonalValues} = useLocalStorage('personal')
  
  const initialValues = {
    name: ``,
    phone: ``,
    email: ``,
    address: ``,
    title: ``,
    linkedin: ``,
    github: ``,
  }

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
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
            <div className="buttonsWrapper">
              <Button variant="secondary" to="/">Back</Button>
              <Button to="/education">Next</Button>
            </div>
          </Form>
          )}
        </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default PersonalPage
