import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import Stepper from "../../components/Stepper";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChangeArray } from '../../helpers';

const EducationPage = ({location}) => {
  const { storedValue: educationValues, setValue: setEducationValues } = useLocalStorage("education");

  const initialValues = {
    schools: [
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
    const newEducationValues = educationValues.schools.filter((_, i) => i !== index);
    setEducationValues({ ...educationValues, schools: newEducationValues });
  }

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
          initialValues={educationValues || initialValues}
        >
          {({ values, errors, touched }) => (
            <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setEducationValues })}>
              <div className="heading">
                <h3>Education <span className="optional">(Optional)</span></h3>
                <hr />
              </div>
              <FieldArray name="schools">
                {({ push, remove }) => (
                  <div className="displayContents">
                    {values.schools.map((_, index) => (
                      <div key={index} className="sectionGroup">
                        <div key={index} className="displayContents">
                          <Input name={`schools[${index}].schoolName`} required type="text" label="School Name" />
                          <Input name={`schools[${index}].degree`} required type="text" label="Degree" />
                          <div className="formDateWrapper">
                            <Input name={`schools[${index}].startDate`} required type="month" label="Start Date" />
                            <Input name={`schools[${index}].endDate`} type="month" label="End Date" />
                          </div>
                          <TextArea name={`schools[${index}].description`} required type="text" label="Description" />
                          {values.schools.length > 1 && (
                            <IconButton type="remove" onClick={() => {
                                remove(index);
                                removeEducationItemFromStoredValue(index);
                              }}
                            >Remove school</IconButton>
                          )}
                        </div>
                        <hr />
                      </div>
                    ))}
                    {values.schools.length < 3 && (
                      <div>
                        <Button type="button" variant="secondary" onClick={() => push({...initialValues.schools[0]})}>
                          + Add Another
                        </Button>
                      </div>
                    )}
                    {errors.schools && touched.schools && <div>{errors.schools}</div>}
                  </div>
                )}
              </FieldArray>

              <div className="buttonsWrapper">
                <Button variant="secondary" to="/personal">Back</Button>
                <Button to="/experience">Next</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default EducationPage
