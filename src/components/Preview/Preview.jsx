import * as React from "react"
import {useEffect, useState} from "react"
import DefaultTemplate from "./DefaultTemplate"
import ClassicTemplate from "./ClassicTemplate"
import BoldTemplate from "./BoldTemplate"
import "./Preview.scss"

const allKeys = ['personal', 'education', 'experience', 'skills', 'awards', 'complementary', 'projects']

const TemplateChoice = {
  default: DefaultTemplate,
  classic: ClassicTemplate,
  bold: BoldTemplate,
}

const Preview = () => {
  const [template, setTemplate] = useState(`default`)
  const [allValues, setAllValues] = useState([])

  console.log(template)

  window.addEventListener('storage', () => {
    let newValues = {}
    allKeys.forEach((singleKey) => {
      newValues = {
        ...newValues,
        [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
      };
    })
    setAllValues(newValues)
  })

  useEffect(() => {
    let newValues = {}
    allKeys.forEach((singleKey) => {
      newValues = {
        ...newValues,
        [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
      };
    })
    setAllValues(newValues)
  }, []);

  const Template = TemplateChoice[template]

  return(
    <div className="previewWrapper">
      <div className="previewWrapperTopBar">
        <div className="previewMessage">
          Autosaved
        </div>
        <div className="previewSelectGroup">
          <label className="previewSelectLabel" htmlFor="template">Template:</label>
          <select id="template" name="template" className="previewSelect" onChange={(e) => setTemplate(e.target.value)}>
            <option value="default">Default</option>
            <option value="classic">Classic</option>
            <option value="bold">Bold</option>
            <option value="json">JSON</option>
          </select>
        </div>
      </div>
      {template === `json` ? (
        <pre>
          {JSON.stringify(allValues, null, 2)}
        </pre>
      ) : (
        <Template values={allValues} />
      )}
  </div>
)}

export default Preview
