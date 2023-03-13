import * as React from "react"
import "./BoldTemplate.scss"

const linkIcon = <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#6C63FF" d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"/></svg>

const icons = {
  phone: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#D3D3D3" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>,
  email: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#D3D3D3" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>,
  address: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#D3D3D3" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
}

const BoldTemplate = ({values}) => {
  
  const {personal, education, experience, skills, complementary, awards, projects} = values
  
  let skillGroups = []
  if (skills) {
    const {career, ...allSkills} = skills
    skillGroups = allSkills && Object.keys(allSkills)
  }
  let allSkills = [];
  skillGroups?.forEach(group => {
    allSkills = [...allSkills, ...skills[group]]
  })
  complementary?.sections?.forEach(section => {
    allSkills = [...allSkills, ...section.options]
  })


  if (!personal?.name) return null
  
  return(
    <>
        <div className="boldPaper">
          <div className="boldHeaderSection">
            <div className="boldHeaderSectionName">
              <h1 className="boldName">{personal.name}</h1>
              <h3 className="boldJobTitle">{personal.title}</h3>
            </div>
            <hr className="boldSeparatorEdge" />
            <div className="boldHeaderSectionBottom">
              <div className="boldHeaderSectionContact">
                <div className="boldHeaderSectionContactItem">{icons.phone} {personal.phone}</div>
                <div className="boldHeaderSectionContactItem">{icons.email} {personal.email}</div>
                <div className="boldHeaderSectionContactItem">{icons.address} {personal.address}</div>
              </div>
              {(personal.linkedin || personal.github) && (
                <div className="boldHeaderSectionSocial">
                  {personal.github && <a href={personal.github} target="_blank"><img width={14} height={14} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>}
                  {personal.linkedin && <a href={personal.linkedin} target="_blank"><img width={14} height={14} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>}
                </div>
              )}
            </div>
            <hr className="boldSeparatorEdge" />
          </div>
          <div className="boldSectionLayout">
            <div>
              {skills !== null && (
                <div>
                  <h4 className="boldSectionTitle">Skills</h4>
                  <div className="boldSkillGroup">
                    <ul className="boldSkillList">
                      {allSkills.map(skill => <li key={skill} className="boldSkillListItem">{skill}</li>)}
                    </ul>
                  </div>
                </div>
              )}
              <div className="boldSectionOrder">
                {education?.schools?.length && (
                  <div className={experience?.showBeforeEducation && `boldSectionOrderSecond`}>
                    <h4 className="boldSectionTitle">Education</h4>
                    <ul className="boldSectionList">
                    {education.schools.map((school) => (
                      <li className="boldSection" key={school.schoolName}>
                        <div className="boldSectionName">{school.schoolName}, <em>{school.degree}</em></div>
                        <div className="boldSectionDate">{school.startDate} - {school.endDate}</div>
                        <div className="boldSectionDesc">{school.description}</div>
                      </li>
                    ))}
                    </ul>
                  </div>
                )}
                {experience?.jobs?.length && (
                  <div>
                    <h4 className="boldSectionTitle">Work Experience</h4>
                    <ul className="boldSectionList">
                    {experience.jobs.map((job) => (
                      <li className="boldSection" key={`${job.companyName}-${job.jobTitle}`}>
                        <div className="boldSectionName">{job.jobTitle}, <em>{job.companyName}</em></div>
                        <div className="boldSectionDate">{job.startDate} - {job.endDate}</div>
                        <div className="boldSectionDesc">{job.description}</div>
                      </li>
                    ))}
                    </ul>
                  </div>
                )}
              </div>
              {awards?.certs?.length && (
                <div>
                  <h4 className="boldSectionTitle">Certifications</h4>
                  <ul className="boldSectionList">
                  {awards.certs.map((cert) => (
                    <li className="boldSection" key={cert.title}>
                      <div className="boldSectionName">{cert.title}</div>
                      <div className="boldSectionDate">{cert.year}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              {projects.projects?.length && (
                <div>
                  <h4 className="boldSectionTitle">Projects</h4>
                  <ul className="boldSectionList">
                  {projects.projects.map((proj) => (
                    <li className="boldSection" key={proj.title}>
                      <div className="boldSectionName">{proj.title}</div>
                      <div className="boldSectionDate">
                        {proj.year}
                        {proj.url && (
                          <a className="boldSectionLink" href={proj.url} target="_blank" rel="noopener">{linkIcon}{`View here`}</a>
                        )}
                      </div>
                      <div className="boldSectionDesc">{proj.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              </div>
            </div>
      </div>
    </>
)}

export default BoldTemplate
