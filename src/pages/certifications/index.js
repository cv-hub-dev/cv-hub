import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import {handleOnChangeArray} from '../../helpers';
import Stepper from "../../components/Stepper";

const CertsPage = ({location}) => {
  const { storedValue: awardsValues, setValue: setAwardsValues } = useLocalStorage("awards");

  const initialValues = {
    certs: [
      {
        title: "",
        type: "",
        year: "",
      },
    ],
  };

  const removeAwardItemFromStoredValue = (index) => {
    const newAwardsValues = awardsValues.certs.filter((_, i) => i !== index);
    setAwardsValues({ ...awardsValues, certs: newAwardsValues });
  }

  const awardsTypes = [
    {value: 1, name: "Certification"},
    {value: 2, name: "Award"}
  ];

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
          initialValues={awardsValues || initialValues}
        >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setAwardsValues })}>
            <div className="heading">
              <h3>Certifications and awards <span className="optional">(Optional)</span></h3>
              <hr />
            </div>

            <FieldArray name="certs">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.certs.map((_, index) => (
                    <div key={index} className="displayContents">
                      <Input name={`certs[${index}].title`} required type="text" label="Title" />
                      <Select name={`certs[${index}].type`} required>
                        {awardsTypes.map(option => {
                          return <option value={option.value}>{option.name}</option>
                        })}
                      </Select>
                      <Input name={`certs[${index}].year`} required type="month" label="Date of completion" />
                        {values.certs.length > 1 && (
                          <IconButton type="remove" variant="secondary" onClick={() => {
                            remove(index);
                            removeAwardItemFromStoredValue(index);
                          }}>Remove award</IconButton>
                        )}
                      <hr />
                    </div>
                  ))}
                  {values.certs.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.awards[0]})}>
                        + Add another
                      </Button>
                    </div>
                  )}
                  {errors.certs && touched.certs && <div>{errors.certs}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/complementary">Back</Button>
              <Button to="/projects">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default CertsPage
