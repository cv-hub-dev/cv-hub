import * as React from "react"
import "./DefaultTemplate.scss"

const DefaultTemplate = ({values}) => {
  
  const {personal} = values

  if (!personal?.name) return null
  
  return(
    <>
      <div className="wrapper">
        <div className="paper">
          <div className="headerSection">
            <div className="headerSectionLeft">
              <h1 className="name">{personal.name}</h1>
              <h3 className="title">{personal.title}</h3>
            </div>
            <div className="headerSectionRight">
              <div>{personal.phone}</div>
              <div>{personal.email}</div>
              <div>{personal.address}</div>
            </div>
          </div>
          <div className="headerSectionSocial">
            <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </div>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </div>
      </div>
    </>
)}

export default DefaultTemplate
