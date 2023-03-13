import * as React from "react"
import "./ClassicTemplate.scss"
import { skillGroupMapper } from "../helpers"

const linkIcon = <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#6C63FF" d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"/></svg>

const icons = {
  phone: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#D3D3D3" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>,
  email: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#D3D3D3" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>,
  address: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#D3D3D3" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>, 
  education: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#A1A1A1" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>,
  work: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#A1A1A1" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>,
  certs: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#A1A1A1" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>,
  projects: <svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#A1A1A1" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
}

const DefaultTemplate = ({values}) => {
  
  const {personal, education, experience, skills, complementary, awards, projects} = values
  let skillGroups = []
  if (skills) {
    const {career, ...allSkills} = skills
    skillGroups = allSkills && Object.keys(allSkills)
  }
  if (!personal?.name) return null
  
  return(
    <>
      <div className="classicPaper">
        <div className="classicHeaderSection">
          <div className="classicHeaderSectionLeft">
            <h1 className="classicName">{personal.name}</h1>
            <h3 className="classicJobTitle">{personal.title}</h3>
          </div>
          <div className="classicHeaderSectionContact">
            <div className="classicHeaderSectionContactItem">{icons.phone} {personal.phone}</div>
            <div className="classicHeaderSectionContactItem">{icons.email} {personal.email}</div>
            <div className="classicHeaderSectionContactItem">{icons.address} {personal.address}</div>
          </div>
        </div>
        {(personal.linkedin || personal.github) && (
          <div className="classicHeaderSectionSocial">
            {personal.github && <a href={personal.github} target="_blank" rel="noopener"><img width={14} height={14} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>}
            {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noopener"><img width={14} height={14} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>}
          </div>
          )
        }
        <hr className="classicSeparator" />
        <div className="classicSectionLayout">
        <div>
          {skills !== null && (
            <div>
              <h4 className="classicSectionTitleCenter">Skills</h4>
              {skillGroups.map((group) => skills[group].length ? (
                <div className="classicSkillGroup">
                  <div className="classicSkillName">
                    {skillGroupMapper[group]?.name || skillGroupMapper["other"].name}
                  </div>
                  <ul className="classicSkillList">
                    {skills[group].map(skill => <li>{skill}</li>)}
                  </ul>
                </div>
              ) : null)}
            </div>
          )}
          {complementary !== null && (
            <div>
              {complementary.sections.map((section) => (
                <>
                  <h4 className="classicSectionTitleCenter">{section.label}</h4>
                  <div className="classicSkillGroup">
                    <ul className="classicSkillList">
                      {section.options.map(option => <li className="classicSkillListItem">{option}</li>)}
                    </ul>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
          <div>
            <div className="classicSectionOrder">
              {education?.schools?.length && (
                <div className={experience?.showBeforeEducation && `classicSectionOrderSecond`}>
                  <h4 className="classicSectionTitle"><span>{icons.education}</span>Education</h4>
                  <ul className="classicSectionList">
                  {education.schools.map((school) => (
                    <li className="classicSection">
                      <div className="classicSectionName">{school.schoolName}{school.degree &&<>, <em>{school.degree}</em></>}</div>
                      <div className="classicSectionDate">{school.startDate} - {school.endDate}</div>
                      <div className="classicSectionDesc">{school.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              {experience?.jobs?.length && (
                <div className={experience.showBeforeEducation && `classicSectionOrderFirst`}>
                  <h4 className="classicSectionTitle"><span>{icons.work}</span>Work Experience</h4>
                  <ul className="classicSectionList">
                  {experience.jobs.map((job) => (
                    <li className="classicSection">
                      <div className="classicSectionName">{job.jobTitle}{job.companyName &&<>, <em>{job.companyName}</em></>}</div>
                      <div className="classicSectionDate">{job.startDate} - {job.currentWork ? `currently` : job.endDate}</div>
                      <div className="classicSectionDesc">{job.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
            </div>
            {awards?.certs?.length && (
              <div>
                <h4 className="classicSectionTitle"><span>{icons.certs}</span>Certifications</h4>
                <ul className="classicSectionList">
                {awards.certs.map((cert) => (
                  <li className="classicSection">
                    <div className="classicSectionName">{cert.title}</div>
                    <div className="classicSectionDate">{cert.year}</div>
                  </li>
                ))}
                </ul>
              </div>
            )}
            {projects.projects?.length && (
              <div>
                <h4 className="classicSectionTitle"><span>{icons.projects}</span>Projects</h4>
                <ul className="classicSectionList">
                {projects.projects.map((proj) => (
                  <li className="classicSection">
                    <div className="classicSectionName">{proj.title}</div>
                    <div className="classicSectionDate">
                      {proj.year}
                      {proj.url && (
                        <a className="classicSectionLink" href={proj.url} rel="noopener" target="_blank">{linkIcon}{`View here`}</a>
                      )}
                    </div>
                    <div className="classicSectionDesc">{proj.description}</div>
                  </li>
                ))}
                </ul>
              </div>
            )}
            </div>
          </div>
        {/* <pre>
          {JSON.stringify(values, null, 2)}
        </pre> */}
      </div>
    </>
)}

export default DefaultTemplate
