import React, { useEffect } from "react"
import { Formik, Form, FieldArray, Field } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChange } from '../helpers';

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
        isCurrent: false,
      },
    ],
  };

  const removeEducationItemFromStoredValue = (index) => {
    const newEducationValues = educationValues.education.filter((_, i) => i !== index);
    setEducationValues({ ...educationValues, education: newEducationValues });
  }

  const formValidation = () => {}

  return (
    <div className="duo-layout">
      <Formik
        initialValues={educationValues || initialValues}
        validate={formValidation}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChange({ values, changedValue, setValues: setEducationValues })}>
            <h3>Education</h3>

            <FieldArray name="education">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.education.map((data, index) => (
                    <div key={index} className="displayContents">
                      <Input name={`education[${index}].schoolName`} required type="text" label="School Name" />
                      <Input name={`education[${index}].degree`} required type="text" label="Degree" />
                      <div className="formDateWrapper">
                        <Input name={`education[${index}].startDate`} required type="date" label="Start Date" />
                        {
                          !data.isCurrent ? (
                            <Input name={`education[${index}].endDate`} required type="date" label="End Date" />
                          ) : null
                        }
                      </div>
                      <div className="formCheckboxWrapper">
                        <Field name={`education[${index}].isCurrent`} type="checkbox" id={`education-${index}-is-current`} />
                        <label htmlFor={`education-${index}-is-current`}>I currently study here</label>
                      </div>
                      <TextArea name={`education[${index}].description`} required type="text" label="Description" />
                      {values.education.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" variant="secondary" onClick={() => {
                            remove(index);
                            removeEducationItemFromStoredValue(index);
                          }} />
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
