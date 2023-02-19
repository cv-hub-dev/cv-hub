import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';

const EducationPage = () => {
  const { storedValue: educationValues, setValue: setEducationValues } = useLocalStorage("education")

  const initialValues = {
    education: [
      {
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  };

  return (
    <div className="duo-layout">
      <Formik
        initialValues={educationValues || initialValues}
        onSubmit={(values) => {
          setEducationValues(values.education);
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChange({ values, changedValue, setValues: setEducationValues })}>
            <h3>Education</h3>

            <FieldArray name="education">
              {({ push, remove }) => (
                <div>
                  {values.education.map((_, index) => (
                    <div key={index}>
                      <Input name={`education[${index}].schoolName`} required type="text" label="School Name" />
                      <Input name={`education[${index}].degree`} required type="text" label="Degree" />
                      <Input name={`education[${index}].startDate`} required type="date" label="Start Date" />
                      <Input name={`education[${index}].endDate`} required type="date" label="End Date" />
                      <TextArea name={`education[${index}].description`} required type="text" label="Description" />
                      {values.education.length > 1 && (
                        <Button variant="secondary" onClick={() => remove(index)}>
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  {values.education.length < 3 && (
                    <Button variant="secondary" onClick={() => push(initialValues.education[0])}>
                      Add Education
                    </Button>
                  )}
                  {errors.education && touched.education && <div>{errors.education}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/personal">Back</Button>
            <Button to="/">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default EducationPage
