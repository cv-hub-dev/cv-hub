import * as React from "react"
import {useEffect, useState} from "react"
import DefaultTemplate from "./DefaultTemplate"
// import "./Preview.scss"

const allKeys = ['personal', 'education', 'experience', 'skills', 'complementary']

const Preview = () => {
  const [allValues, setAllValues] = useState([])

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

  return(
    <>
      {/* <DefaultTemplate values={allValues} /> */}
      <DefaultTemplate values={allValues} />
      {/* <pre>
        {JSON.stringify(allValues, null, 2)}
      </pre> */}
    </>
)}

export default Preview
