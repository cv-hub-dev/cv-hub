import { Formik, Form } from "formik";
import * as React from "react"
import Input from '../../components/Input';
import Button from '../../components/Button';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';
import TextArea from "../../components/TextArea";
import Checkbox from '../../components/Checkbox';
import "./experience.scss";

const ExperiencePage = () => {

  const {storedValue: experienceValues, setValue: setExperienceValues} = useLocalStorage('experience')
  
  const initialValues = {
    showBeforeEducation: false,
    jobTitle: ``,
    companyName: ``,
    location: ``,
    description: ``,
    currentWork: false,
    startDate: ``,
    endDate: ``,
  }

  return (
    <div className="duo-layout">
      <Formik initialValues={experienceValues || initialValues}>
        {({values}) => (
        <Form className="form" onChange={(changedValue) => handleOnChange({values, changedValue, setValues: setExperienceValues})}>
          <h3>Work Experience <span className="optional">(Optional)</span></h3>

          <Checkbox name="showBeforeEducation" required label="Show before education" /> 

          <Input name="jobTitle" required type="text" label="Job Title" />
          <Input name="companyName" required type="text" label="Company Name" />
          <Input name="location" type="text" label="Location" />
          <TextArea name="description" label="Description"></TextArea>
      
          <Checkbox name="currentWork" required label="I currently work here" /> 
        
          <div className="datesFieldsWrapper">
            <Input name="startDate" required type="text" label="Start Date" />
            <Input name="endDate" required type="text" label="End Date" />
          </div>

          <div className="addBtn">
            <Button variant="secondary">+ Add</Button>
          </div>

          <div className="buttonsWrapper">
            <Button variant="secondary" to="/">Go Back</Button>
            <Button to="/next">Next</Button>
          </div>
        </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default ExperiencePage;
