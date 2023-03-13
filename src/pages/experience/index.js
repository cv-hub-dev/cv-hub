import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import Checkbox from '../../components/Checkbox';
import useLocalStorage from '../../useLocalStorate';
import Stepper from "../../components/Stepper";
import { handleOnChangeArray } from '../../helpers';

const ExperiencePage = ({location}) => {
  const { storedValue: experienceValues, setValue: setExperienceValues } = useLocalStorage("experience");

  const initialValues = {
    showBeforeEducation: false,
    jobs: [
      {
        jobTitle: ``,
        companyName: ``,
        location: ``,
        description: ``,
        currentWork: false,
        startDate: ``,
        endDate: ``,
      },
    ],
  };

  const removeExperienceItemFromStoredValue = (index) => {
    const newExperienceValues = experienceValues.jobs.filter((_, i) => i !== index);
    setExperienceValues({ ...experienceValues, jobs: newExperienceValues });
  }

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
          initialValues={experienceValues || initialValues}
        >
          {({ values, errors, touched }) => (
            <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setExperienceValues })}>

              <div className="heading">
                <h3>Work Experience <span className="optional">(Optional)</span></h3>
                <hr />
                <Checkbox name={`showBeforeEducation`} required label="Show before education" />  
              </div>

              <FieldArray name="jobs">
                {({ push, remove }) => (
                  <div className="displayContents">
                    {values.jobs?.map((_, index) => (
                      <div key={index} className="sectionGroup">
                        <div className="displayContents">
                          <Input name={`jobs[${index}].jobTitle`} required type="text" label="Job Title" />
                          <Input name={`jobs[${index}].companyName`} required type="text" label="Company Name" />
                          <Input name={`jobs[${index}].location`} type="text" label="Location" />
                          <TextArea name={`jobs[${index}].description`} type="text" label="Description" />

                          <Checkbox name={`jobs[${index}].currentWork`} required label="I currently work here" />
                          <div className="formDateWrapper">
                              <Input name={`jobs[${index}].startDate`} required type="month" label="Start Date" />
                              <Input disabled={values.jobs[index].currentWork} name={`jobs[${index}].endDate`} type="month" label="End Date" />
                          </div>

                          {values.jobs?.length > 1 && (
                              <IconButton type="remove" onClick={() => {
                                remove(index);
                                removeExperienceItemFromStoredValue(index);
                              }}>Remove work</IconButton>
                          )}
                        </div>
                        <hr />
                      </div>
                    ))}
                    {values.jobs?.length < 3 && (
                      <div>
                        <Button type="button" variant="secondary" onClick={() => push({...initialValues.jobs[0]})}>
                          + Add Another
                        </Button>
                      </div>
                    )}
                    {errors.jobs && touched.jobs && <div>{errors.jobs}</div>}
                  </div>
                )}
              </FieldArray>

              <div className="buttonsWrapper">
                <Button variant="secondary" to="/education">Go Back</Button>
                <Button to="/skills">Next</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default ExperiencePage
