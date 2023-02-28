import React, { useEffect } from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import {handleOnChange, handleOnChangeArray} from '../helpers';

const CertsPage = () => {
  const { storedValue: awardsValues, setValue: setAwardsValues } = useLocalStorage("awards");

  const initialValues = {
    awards: [
      {
        title: "",
        type: "",
        year: "",
      },
    ],
  };

  const removeAwardItemFromStoredValue = (index) => {
    const newAwardsValues = awardsValues.awards.filter((_, i) => i !== index);
    setAwardsValues({ ...awardsValues, awards: newAwardsValues });
  }

  const awardsTypes = [
    {value: 1, name: "Certification"},
    {value: 2, name: "Award"}
  ];

  return (
    <div className="duo-layout">
      <Formik
        initialValues={awardsValues || initialValues}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setAwardsValues })}>
            <h3>Certifications and awards (Optional)</h3>

            <FieldArray name="awards">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.awards.map((_, index) => (
                    <div key={index} className="displayContents">
                      <Input name={`awards[${index}].title`} required type="text" label="Title" />
                      <Select name={`awards[${index}].type`} required>
                        {awardsTypes.map(option => {
                          return <option value={option.value}>{option.name}</option>
                        })}
                      </Select>
                      <Input name={`awards[${index}].year`} required type="number" label="Year" />
                      {values.awards.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" variant="secondary" onClick={() => {
                            remove(index);
                            removeAwardItemFromStoredValue(index);
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                  {values.awards.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.awards[0]})}>
                        + Add another
                      </Button>
                    </div>
                  )}
                  {errors.awards && touched.awards && <div>{errors.awards}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/complementary">Back</Button>
            <Button to="/">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default CertsPage
