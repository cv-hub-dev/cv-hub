import * as React from "react"
import {useEffect, useState} from "react"
import DefaultTemplate from "./DefaultTemplate"
import ClassicTemplate from "./ClassicTemplate"
import BoldTemplate from "./BoldTemplate"
import useLocalStorage from "../../useLocalStorate";
import "./Preview.scss"

const allKeys = ['personal', 'education', 'experience', 'skills', 'awards', 'complementary', 'projects']

const TemplateChoice = {
  default: DefaultTemplate,
  classic: ClassicTemplate,
  bold: BoldTemplate,
}

const Preview = () => {
  const [allValues, setAllValues] = useState([])
  const { storedValue: template, setValue: setTemplate } = useLocalStorage("template", "default")

  if (typeof window !== "undefined") {
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
  }

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
    <div id="previewWrapper" className="previewWrapper">
      <div className="previewWrapperTopBar">
        <div className="previewMessage">
          Autosaved
        </div>
        <div className="previewSelectGroup">
          <label className="previewSelectLabel" htmlFor="template">Template:</label>
          <select value={template} id="template" name="template" className="previewSelect" onChange={(e) => setTemplate(e.target.value)}>
            <option value="default">Default</option>
            <option value="classic">Classic</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>
      <Template values={allValues} />
  </div>
)}

export default Preview
