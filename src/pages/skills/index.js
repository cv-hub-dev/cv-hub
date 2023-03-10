import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Preview from "../../components/Preview";
import Pill from "../../components/Pill";
import useLocalStorage from "../../useLocalStorate";
import { handleOnChangeArray } from "../helpers";
import Stepper from "../../components/Stepper";
import * as careerData from "./careers.json";
import "./skills.scss";
import { skillGroupMapper } from "../../components/Preview/helpers";

const careers = [
  {
    label: `Mobile App Development`,
    value: `mobileAppDevelopment`,
  },
  {
    label: `Web Development`,
    value: `webDevelopment`,
  },
  {
    label: `Systems Engineering`,
    value: `systemsEngineering`,
  },
  {
    label: `Game Development`,
    value: `gameDevelopment`,
  },
  {
    label: `Data Science`,
    value: `dataScience`,
  },
  {
    label: `Data Egnineering`,
    value: `dataEngineering`,
  },
  {
    label: `Other`,
    value: `other`,
  },
];

const SkillsPage = ({ location }) => {
  const { storedValue: skills, setValue: setSkills } =
    useLocalStorage("skills");
  const [career, setCareer] = useState(`webDevelopment`);

  const getInitialGroupValues = (career) => {
    let initialValues = { career }
    const allSkillGroups = Object.keys(careerData[career])
    allSkillGroups.forEach(
      (skillGroup) => (initialValues = { ...initialValues, [skillGroup]: [] })
    );

    return initialValues;
  };

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
          initialValues={skills || getInitialGroupValues(career)}
          enableReinitialize
        >
          {({ values, errors, touched }) => (
            <Form
              className="form"
              onChange={(changedValue) =>
                handleOnChangeArray({
                  values,
                  changedValue,
                  setValues: setSkills,
                  isCheckboxArray: true
                })
              }
            >
              <h3>
                Skills <span className="optional">(Optional)</span>
              </h3>
              <hr />

              <Select name={`career`} required>
                {careers.map((option) => {
                  return <option value={option.value}>{option.label}</option>
                })}
              </Select>

              {Object.keys(careerData[values.career]).map((skillGroup) => (
                <div className="skillsGroup" key={skillGroup}>
                  <h3 className="skillsGroupTitle">{skillGroupMapper[skillGroup]?.name || skillGroup}</h3>
                  <div className="skillsPillWrapper">
                    {careerData[values.career]?.[skillGroup]?.map((skill) => (
                      <Pill
                        name={skillGroup}
                        active={values[skillGroup]?.includes(skill)}
                        value={skill}
                        key={skill}
                      >
                        {skill}
                      </Pill>
                    ))}
                  </div>
                </div>
              ))}

              <div className="buttonsWrapper">
                <Button variant="secondary" to="/skills">
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

export default SkillsPage;
