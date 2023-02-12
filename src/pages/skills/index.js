import React from "react"
import { Formik, Form } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';


const SkillsPage = () => {

  const {storedValue: skillsValues, setValue: setSkillsValues} = useLocalStorage('skills')
  
  const initialValues = {
    chooseYourField: ``
  }

  return (
    <div className="duo-layout">
      <Formik initialValues={skillsValues || initialValues}>
        {({values}) => (
        <Form className="form" onChange={(changedValue) => handleOnChange({values, changedValue, setValues: setSkillsValues})}>
          <h3>Skills</h3>
          <select name="chooseYourField" label="Field:">
            <option value ="data science">Data Science</option>
            <option value ="web development">Web Development</option>
            <option value ="systems engineering">Systems Engineering</option>
          </select>


          <div className="buttonsWrapper">
            <Button variant="secondary" to="/education">Back</Button>
            <Button to="/">Next</Button>
          </div>
        </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default SkillsPage
