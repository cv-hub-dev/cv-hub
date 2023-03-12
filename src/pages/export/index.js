import * as React from "react"
import { Formik, Form, FieldArray } from "formik"
import Select from '../../components/Select';
import Button from '../../components/Button';
import Preview from "../../components/Preview";
import Stepper from "../../components/Stepper";

const exportToPDF = (elementId) => {
  const htmlContent = document.getElementById(elementId).childNodes[1];
  const win = window.open('', 'PRINT', 'width=800,height=600')
  win.document.write(
    `<html><head><link rel="stylesheet" href="/commons.css"/><style>
    @page { size: auto; margin: 0;}
    body {margin: 0; padding: 0; }
    .defaultPaper, .boldPaper, .classicPaper { scale: 1; }
    </style><title>CV</title></head><body>${htmlContent.outerHTML}</body></html>`
  )
  win.document.close()
  
  win.onload = () => {
    setTimeout(() => {
      win.focus()
      win.print()
    }, 500);
  }
  return
}

const ExportPage = ({location}) => {
  const initialValues = {
    format: 1
  };

  const formats = [
    {value: 1, name: "PDF"},
  ];

  return (
    <div className="duo-layout">
      <div className="sidebar">
        <Stepper location={location} />
        <Formik
          initialValues={initialValues}
        >
          <Form className="form">
            <h3>Export</h3>
            <FieldArray name="export">
              <div className="displayContents">
                <Select name={`format`} label="Format" required>
                  {formats.map(option => {
                    return <option value={option.value}>{option.name}</option>
                  })}
                </Select>
              </div>
            </FieldArray>

            <div className="buttonsWrapper">
              <Button variant="secondary" to="/projects">Back</Button>
              <Button type="button" onClick={() => exportToPDF("previewWrapper")} >Download</Button>
            </div>
          </Form>
      </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default ExportPage
