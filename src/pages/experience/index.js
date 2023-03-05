import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import Checkbox from '../../components/Checkbox';
import useLocalStorage from '../../useLocalStorate';
import { handleOnChangeArray } from '../helpers';
import "./experience.scss";

const ExperiencePage = () => {
  const { storedValue: experienceValues, setValue: setExperienceValues } = useLocalStorage("experience");

  const initialValues = {
    experience: [
      {
        showBeforeEducation: false,
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
    const newExperienceValues = experienceValues.experience.filter((_, i) => i !== index);
    setExperienceValues({ ...experienceValues, experience: newExperienceValues });
  }

  return (
    <div className="duo-layout">
      <Formik
        initialValues={experienceValues || initialValues}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setExperienceValues })}>
            <h3>Work Experience <span className="optional">(Optional)</span></h3>

            <FieldArray name="experience">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.experience?.map((_, index) => (
                    <div key={index} className="displayContents">

                        <Checkbox name={`experience[${index}].showBeforeEducation`} required label="Show before education" />  
                        <Input name={`experience[${index}].jobTitle`} required type="text" label="Job Title" />
                        <Input name={`experience[${index}].companyName`} required type="text" label="Company Name" />
                        <Input name={`experience[${index}].location`} type="text" label="Location" />
                        <TextArea name={`experience[${index}].description`} type="text" label="Description" />

                        <Checkbox name={`experience[${index}].currentWork`} required label="I currently work here" />
                        <div className="datesFieldsWrapper">
                            <Input name={`experience[${index}].startDate`} required type="date" label="Start Date" />
                            {!values.experience[index].currentWork && <Input name={`experience[${index}].endDate`} required type="date" label="End Date" /> }
                        </div>

                      {values.experience?.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" onClick={() => {
                            remove(index);
                            removeExperienceItemFromStoredValue(index);
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                  {values.experience?.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.experience[0]})}>
                        + Add Experience
                      </Button>
                    </div>
                  )}
                  {errors.experience && touched.experience && <div>{errors.experience}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/">Go Back</Button>
            <Button to="/projects">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default ExperiencePage
