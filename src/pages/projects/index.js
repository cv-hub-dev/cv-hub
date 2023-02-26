import React from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import TextArea from "../../components/TextArea";
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import { handleOnChangeArray } from '../helpers';
import "./projects.scss";

const ProjectsPage = () => {
  const { storedValue: projectsValues, setValue: setProjectsValues } = useLocalStorage("projects");

  const initialValues = {
    projects: [
      {
        title: ``,
        year: ``,
        description: ``,
        url: ``,
      },
    ],
  };

  const removeProjectsItemFromStoredValue = (index) => {
    const newProjectsValues = projectsValues.projects.filter((_, i) => i !== index);
    setProjectsValues({ ...projectsValues, projects: newProjectsValues });
  }

  return (
    <div className="duo-layout">
      <Formik
        initialValues={projectsValues || initialValues}
      >
        {({ values, errors, touched }) => (
          <Form className="form" onChange={(changedValue) => handleOnChangeArray({ values, changedValue, setValues: setProjectsValues })}>
            <h3>Projects <span className="optional">(Optional)</span></h3>

            <FieldArray name="projects">
              {({ push, remove }) => (
                <div className="displayContents">
                  {values.projects?.map((_, index) => (
                    <div key={index} className="displayContents">

                        <Input name={`projects[${index}].title`} required type="text" label="Title" />
                        <Input name={`projects[${index}].year`} required type="text" label="Year" />
                        <TextArea name={`projects[${index}].description`} type="text" label="Description" />
                        <Input name={`projects[${index}].url`} type="text" label="URL" />

                      {values.projects?.length > 1 && (
                        <div className="buttonsWrapper">
                          <IconButton type="remove" onClick={() => {
                            remove(index);
                            removeProjectsItemFromStoredValue(index);
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                  {values.projects?.length < 3 && (
                    <div>
                      <Button type="button" variant="secondary" onClick={() => push({...initialValues.projects[0]})}>
                        + Add Project
                      </Button>
                    </div>
                  )}
                  {errors.projects && touched.projects && <div>{errors.projects}</div>}
                </div>
              )}
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/experience">Go Back</Button>
            <Button to="/">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Preview />
    </div>
  )
}

export default ProjectsPage
