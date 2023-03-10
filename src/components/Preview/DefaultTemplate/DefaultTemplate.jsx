import * as React from "react"
import "./DefaultTemplate.scss"
import { skillGroupMapper } from "../helpers"

const linkIcon = <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#6C63FF" d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"/></svg>

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
      <div className="defaultPaper">
        <div className="defaultHeaderSection">
          <div className="defaultHeaderSectionLeft">
            <h1 className="defaultName">{personal.name}</h1>
            <h3 className="defaultJobTitle">{personal.title}</h3>
          </div>
          <div className="defaultHeaderSectionRight">
            <div>{personal.phone}</div>
            <div>{personal.email}</div>
            <div>{personal.address}</div>
          </div>
        </div>
        {(personal.linkedin || personal.github) && (
          <div className="defaultHeaderSectionSocial">
            {personal.github && <a href={personal.github} target="_blank"><img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>}
            {personal.linkedin && <a href={personal.linkedin} target="_blank"><img width={16} height={16} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>}
          </div>
        )}
        <hr className="defaultSeparator" />
        <div className="defaultSectionLayout">
          <div>
            <div className="defaultSectionOrder">
              {education?.schools?.length && (
                <div className={experience?.showBeforeEducation ? `defaultSectionOrderSecond` : ''}>
                  <h4 className="defaultSectionTitle">Education</h4>
                  <ul className="defaultSectionList">
                  {education.schools.map((school) => (
                    <li className="defaultSection" key={school.schoolName}>
                      <div className="defaultSectionName">{school.schoolName}{school.degree && <>, <em>{school.degree}</em></>}</div>
                      <div className="defaultSectionDate">{school.startDate} - {school.endDate}</div>
                      <div className="defaultSectionDesc">{school.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              {experience?.jobs?.length && (
                <div>
                  <h4 className="defaultSectionTitle">Work Experience</h4>
                  <ul className="defaultSectionList">
                  {experience.jobs.map((job) => (
                    <li className="defaultSection" key={job.jobTitle}>
                      <div className="defaultSectionName">{job.jobTitle}, <em>{job.companyName}</em>, <em>{job.location}</em></div>
                      <div className="defaultSectionDate">{job.startDate} - {job.endDate}</div>
                      <div className="defaultSectionDesc">{job.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
            </div>
            {awards?.certs?.length && (
              <div>
                <h4 className="defaultSectionTitle">Certifications</h4>
                <ul className="defaultSectionList">
                {awards.certs.map((cert) => (
                  <li className="defaultSection" key={cert.title}>
                    <div className="defaultSectionName">{cert.title}</div>
                    <div className="defaultSectionDate">{cert.year}</div>
                  </li>
                ))}
                </ul>
              </div>
            )}
            {projects?.projects?.length && (
              <div>
                <h4 className="defaultSectionTitle">Projects</h4>
                <ul className="defaultSectionList">
                {projects.projects?.map((proj) => (
                  <li className="defaultSection" key={proj.title}>
                    <div className="defaultSectionName">{proj.title}</div>
                    <div className="defaultSectionDate">
                      {proj.year}
                      {proj.url && (
                        <a className="defaultSectionLink" href={proj.url} target="_blank">{linkIcon}{`View here`}</a>
                      )}
                    </div>
                    <div className="defaultSectionDesc">{proj.description}</div>
                  </li>
                ))}
                </ul>
              </div>
            )}
            </div>
            <div>
              {skills !== null && (
                <div>
                  <h4 className="defaultSectionTitle">Skills</h4>
                  {skillGroups.map((group) => 
                    skills[group].length ? (
                      <div className="defaultSkillGroup" key={skillGroupMapper[group]?.name}>
                        <div className="defaultSkillName">
                          <div className="defaultSkillNameIcon">{skillGroupMapper[group].icon}</div>
                          {skillGroupMapper[group].name}
                        </div>
                        <ul className="defaultSkillList">
                          {skills[group].map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                      </div>
                    ) : null
                  )}
                </div>
              )}
              {complementary !== null && (
                <>
                  {complementary.sections.map((section) => (
                    <div key={section.label}>
                      <h4 className="defaultSectionTitle">{section.label}</h4>
                      <div className="defaultSkillGroup">
                        <ul className="defaultSkillList">
                          {section.options.map(option => <li className="defaultSkillListItem">{option}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
      </div>
    </>
)}

export default DefaultTemplate
