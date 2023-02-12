import React from "react"
import { Formik, Form } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';

const EducationPage = () => {
  const { storedValue: educationValues, setValue: setEducationValues } = useLocalStorage("education")

  const initialValues = {
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  }

  return (
    <div className="duo-layout">
      <Formik initialValues={educationValues || initialValues}>
        {({ values }) => (
          <Form className="form" onChange={(changedValue) => handleOnChange({ values, changedValue, setValues: setEducationValues })}>
            <h3>Education</h3>
            <Input name="schoolName" required type="text" label="School Name" />
            <Input name="degree" required type="text" label="Degree" />
            <Input name="startDate" required type="date" label="Start Date" />
            <Input name="endDate" required type="date" label="End Date" />
            <TextArea name="description" required type="text" label="Description" />

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/personal">Back</Button>
              <Button to="/skills">Next</Button>
            </div>
          </Form>
        )}
        
      </Formik>
      <Preview />
    </div>
  )
}

export default EducationPage
