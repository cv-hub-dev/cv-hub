import React, { useEffect } from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChangeArray } from '../helpers';

const EducationPage = () => {
  const { storedValue: educationValues, setValue: setEducationValues } = useLocalStorage("education");

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

  const removeEducationItemFromStoredValue = (index) => {
    const newEducationValues = educationValues.education.filter((_, i) => i !== index);
    setEducationValues({ ...educationValues, education: newEducationValues });
  }

  return (
    <div className="duo-layout">
      <Formik
        initialValues={educationValues || initialValues}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setEducationValues })}>
            <h3>Education</h3>

            <FieldArray name="education">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.education.map((_, index) => (
                    <div key={index} className="displayContents">
                      <Input name={`education[${index}].schoolName`} required type="text" label="School Name" />
                      <Input name={`education[${index}].degree`} required type="text" label="Degree" />
                      <div className="formDateWrapper">
                        <Input name={`education[${index}].startDate`} required type="date" label="Start Date" />
                        <Input name={`education[${index}].endDate`} required type="date" label="End Date" />
                      </div>
                      <TextArea name={`education[${index}].description`} required type="text" label="Description" />
                      {values.education.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" onClick={() => {
                              remove(index);
                              removeEducationItemFromStoredValue(index);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {values.education.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.education[0]})}>
                        Add Education
                      </Button>
                    </div>
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
