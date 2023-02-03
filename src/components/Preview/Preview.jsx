import * as React from "react"
import {useEffect, useState} from "react"
import "./Preview.scss"
import useLocalStorage from '../../useLocalStorate';

const allKeys = ['personal', 'education', 'experience', 'skills', 'complementary']

const Preview = () => {
  const [allValues, setAllValues] = useState([])

  window.addEventListener('storage', () => {
    const mapValues = allKeys.map((singleKey) => {
      return {
        [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
      };
    })
    setAllValues(mapValues)
  })

  useEffect(() => {
    const mapValues = allKeys.map((singleKey) => {
      return {
        [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
      };
    })
    setAllValues(mapValues)
  }, []);


  return(
  <pre>
    {JSON.stringify(allValues, null, 2)}
  </pre>
)}

export default Preview
