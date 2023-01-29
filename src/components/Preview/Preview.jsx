import * as React from "react"
import {useEffect, useState} from "react"
import "./Preview.scss"
import useLocalStorage from '../../useLocalStorate';

const allKeys = ['personal', 'education', 'experience', 'skills', 'complementary']

const Preview = () => {
  const [allValues, setAllValues] = useState([])

  // useEffect(() => {
  //   console.log(`running use effect`)

  //   const getData = () => {
  //     const mapValues = allKeys.map((singleKey) => {
  //       return {
  //         [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
  //       };
  //     })
  //     setAllValues(mapValues)
  //   }
  
  //   window.addEventListener('storage', getData)
  
  //   return () => {
  //     window.removeEventListener('storage', getData)
  //   }
  // }, [])

  useEffect(() => {
    console.log(`running useEffect`)
    const mapValues = allKeys.map((singleKey) => {
      return {
        [singleKey]: JSON.parse(window.localStorage.getItem(singleKey))
      };
    })
    console.log(JSON.parse(window.localStorage.getItem(`personal`)))
    setAllValues(mapValues)
  }, []);


  return(
  <pre>
    {JSON.stringify(allValues, null, 2)}
  </pre>
)}

export default Preview
