import * as React from "react"
import { Link } from "gatsby"
import "./Stepper.scss"

const allPages = [`/personal/`, `/education/`, `/experience/`, `/skills/`, `/complementary/`, `/certifications/`, `/projects/`, `/finish/`]

const Stepper = ({location}) => {
  const activeIndex = allPages.indexOf(location.pathname)
  let activeIndexes = [];
  allPages.forEach((page, i) => {
    if (i <= activeIndex) activeIndexes.push(i)
  })

  return (
    <div className={`stepper`}>
      {allPages.map((page, i) => 
        <Link
          className={`stepperItem ${activeIndexes.includes(i) ? `stepperItemActive` : ``}`}
          title={page}
          to={page}
        >
          {i+1}
        </Link>
      )}
    </div>
  )
}

export default Stepper
