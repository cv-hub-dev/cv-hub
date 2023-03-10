import React, { useEffect } from "react"
import { Formik, Form, FieldArray } from "formik"
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Preview from "../../components/Preview";
import useLocalStorage from '../../useLocalStorate';
import {handleOnChangeArray} from '../helpers';
import Stepper from "../../components/Stepper";
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas";


const exportToPDF = (elementId) => {
  const htmlContent = document.getElementById(elementId).childNodes[1];
  // htmlContent.style.fontFeatureSettings = '"liga" 0';
   // window.print()
  // return
  const win = window.open('', 'PRINT', 'width=800,height=600')
  win.document.write(`<html><head><link rel="stylesheet" href="/commons.css"/><style>
@page { size: auto; margin: 0;}
body {margin: 0; padding: 0; }
.defaultPaper, .boldPaper, .classicPaper { scale: 1; }
</style><title>CV</title></head><body>${htmlContent.outerHTML}</body></html>`)
  win.document.close()
  win.focus()
  win.onload = () => {
    win.print()
    win.close()
  }
  return

  html2canvas(htmlContent).then(canvas => {
    document.body.appendChild(canvas)
  })
  return

  let pdf = new jsPDF({unit: "px", format: "a4"})
  // pdf.addSvgAsImage('<svg width="18" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>', 100, 100, 100, 100,)
  pdf.html(htmlContent, {
    width: pdf.internal.pageSize.getWidth() - 60,
    windowWidth: htmlContent.offsetWidth,
    margin: [20, 20, 20, 40],
    callback: function (pdf) {
      pdf.output('dataurlnewwindow')
    }
  });
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
              <Button variant="secondary" to="/certifications">Back</Button>
              <Button type="button" onClick={() => {exportToPDF("previewWrapper")}} >Download</Button>
            </div>
          </Form>
      </Formik>
      </div>
      <Preview />
    </div>
  )
}

export default ExportPage
