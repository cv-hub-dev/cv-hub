import React, { useEffect } from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import {handleOnChange, handleOnChangeArray} from '../helpers';
import Stepper from "../../components/Stepper";


const SectionOptions = ({options, sectionIndex}) => (
    <FieldArray name="complementaryOptions">
        {({ push, remove }) => (
            <div>
                {options.map((_, optionIndex) => (
                    <div key={optionIndex} className="displayContents">
                        <Input name={`sections[${sectionIndex}].options[${optionIndex}]`} required type="text" label={`Option ${optionIndex + 1}`} />
                        {options.length > 1 && (
                            <div className="buttonsWrapper">
                                <IconButton type="remove" variant="secondary" onClick={() => {
                                    remove(optionIndex);
                                }} />
                            </div>
                        )}
                    </div>
                ))}
                <Button type="button" variant="secondary" onClick={() => push("")}>
                    + Add option
                </Button>
            </div>
        )}
    </FieldArray>
)
const ComplementaryPage = ({location}) => {
  const { storedValue: complementaryValues, setValue: setComplementaryValues } = useLocalStorage("complementary");

  const initialValues = {
    sections: [
        {
            label: "",
            options: [""],
        },
    ],
  };

  const removeComplementaryItemFromStoredValue = (index) => {
    const newComplementaryValues = complementaryValues.sections.filter((_, i) => i !== index);
    setComplementaryValues({ ...complementaryValues, complementary: newComplementaryValues });
  }

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
        initialValues={complementaryValues || initialValues}
        >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setComplementaryValues })}>
            <h3>Complementary (Optional)</h3>

            <FieldArray name="complementary">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.sections.map((_, index) => (
                    <div key={index} className="displayContents">
                      <Input name={`sections[${index}].label`} required type="text" label="Section Title" />
                      <SectionOptions sectionIndex={index} options={values.sections[index].options}/>
                      {values.sections.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" variant="secondary" onClick={() => {
                            remove(index);
                            removeComplementaryItemFromStoredValue(index);
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                  {values.sections.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.sections[0]})}>
                        + Add section
                      </Button>
                    </div>
                  )}
                  {errors.complementary && touched.complementary && <div>{errors.complementary}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/education">Back</Button>
            <Button to="/certifications">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default ComplementaryPage
