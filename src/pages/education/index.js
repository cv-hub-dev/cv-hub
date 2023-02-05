import React from "react"
import { Formik, Form } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
const EducationPage = () => {
  const { storedValue: educationValues, setValue: setEducationValues } = useLocalStorage("education")

  const handleOnChange = ({ values, changedValue }) => {
    const changedKeyValPair =
      changedValue.target.type === "checkbox"
        ? { [changedValue.target.name]: changedValue.target.checked }
        : { [changedValue.target.name]: changedValue.target.value }
    setEducationValues({ ...values, ...changedKeyValPair })
  }

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
          <Form className="form" onChange={(changedValue) => handleOnChange({ values, changedValue })}>
            <h3>Education</h3>
            <Input name="schoolName" required type="text" label="School Name" />
            <Input name="degree" required type="text" label="Degree" />
            <Input name="startDate" required type="date" label="Start Date" />
            <Input name="endDate" required type="date" label="End Date" />
            <Input name="description" required type="text" label="Description" />

            <Button to="/personal">Back</Button>
            <Button to="/">Next</Button>
          </Form>
        )}
        
      </Formik>
      <Preview />
    </div>
  )
}

export default EducationPage