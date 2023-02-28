import React from "react";
import { Formik, Form, FieldArray } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Preview from "../../components/Preview";
import useLocalStorage from "../../useLocalStorate";
import { handleOnChangeArray } from "../helpers";
import Stepper from "../../components/Stepper";

const SectionOptions = ({ name, section, removeOptionFromStored, sectionIndex }) => (
  <FieldArray name={name}>
    {({ push, remove }) => (
      <>
      {console.log(section)}
        {section.options.map((_, optionIndex) => (
          <div key={optionIndex} className="inputWrapper">
            <Input
              name={`${name}.${optionIndex}`}
              required
              type="text"
              id={`${name}${optionIndex}`}
              label={`Option ${optionIndex + 1}`}
            />
            {section.options.length > 1 && (
              <IconButton
                type="remove"
                variant="secondary"
                onClick={() => {
                  remove(optionIndex);
                  removeOptionFromStored(sectionIndex, optionIndex)
                }}
              />
            )}
            {optionIndex === section.options.length - 1 && (
              <IconButton type="add" onClick={() => push("")} />
            )}
          </div>
        ))}
      </>
    )}
  </FieldArray>
);

const ComplementaryPage = ({ location }) => {
  const { storedValue: complementaryValues, setValue: setComplementaryValues } =
    useLocalStorage("complementary");

  const initialValues = {
    sections: [
      {
        label: "",
        options: [""],
      },
    ],
  };

  const removeComplementaryItemFromStoredValue = (index) => {
    const newComplementaryValues = complementaryValues.sections.filter(
      (_, i) => i !== index
    );
    setComplementaryValues({
      ...complementaryValues,
      sections: newComplementaryValues,
    });
  };

  const removeOptionFromStored = (sectionIndex, optionIndex) => {
    const storedValues = complementaryValues
    const newOptions = complementaryValues.sections[sectionIndex].options.filter(
      (_, i) => i !== optionIndex
    );
    storedValues.sections[sectionIndex].options = newOptions
    setComplementaryValues(storedValues);
  }

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik initialValues={complementaryValues || initialValues}>
          {({ values, errors, touched }) => (
            <Form
              className="form"
              onChange={(changedValue) =>
                handleOnChangeArray({
                  values,
                  changedValue,
                  setValues: setComplementaryValues,
                })
              }
            >
              <h3>Complementary (Optional)</h3>

              <FieldArray name="sections">
                {({ push, remove }) => (
                  <div className="displayContents">
                    {values.sections.map((section, index) => (
                      <div key={index} className="sectionGroup">
                        <div className="displayContents">
                          <Input
                            name={`sections.${index}.label`}
                            id={`sections.${index}.label`}
                            required
                            type="text"
                            label="Section Title"
                          />
                          
                          <SectionOptions
                            sectionIndex={index}
                            name={`sections.${index}.options`}
                            section={section}
                            removeOptionFromStored={removeOptionFromStored}
                          />

                          {values.sections.length > 1 && (
                            <IconButton
                              type="remove"
                              variant="secondary"
                              onClick={() => {
                                remove(index);
                                removeComplementaryItemFromStoredValue(index);
                              }}
                            >
                              Remove section
                            </IconButton>
                          )}
                        </div>
                        <hr />
                      </div>
                    ))}
                    <div>
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => push({ ...initialValues.sections[0] })}
                      >
                        + Add section
                      </Button>
                    </div>

                    {errors.complementary && touched.complementary && (
                      <div>{errors.complementary}</div>
                    )}
                  </div>
                )}
              </FieldArray>

              <div className="buttonsWrapper">
                <Button variant="secondary" to="/education">
                  Back
                </Button>
                <Button to="/certifications">Next</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Preview />
    </div>
  );
};

export default ComplementaryPage;
