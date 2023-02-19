import * as React from "react"
import "./DefaultTemplate.scss"

const defaultValues = {
  personal: {
    name: "Anastasia Kashkinova",
    phone: "123-12323-2323",
    address: "Southbank, Australia",
    email: "anastasia.kashkinova@gmail.com",
    linkedin: "",
    github: "",
    title: "Front-end Developer",
  },
  education: {
    schools: [{
      schoolName: "University of London",
      degree: "BSc Computer Science",
      startDate: "01/04/2019",
      endDate: "20/03/2022",
      current: false,
      description: "Bachelor of Computer Science with ML/AI Specialism"
    }]
  },
  experience: {
    jobs: [{
      jobTitle: "UX Engineer",
      companyName: "Sesimi",
      location: "Melbourne, Australia",
      description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      startDate: "21/10/2020",
      endDate: "",
      current: true,
    },
    {
      jobTitle: "Front-end Engineer",
      companyName: "RedBubble",
      location: "Melbourne, Australia",
      description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      startDate: "01/04/2020",
      endDate: "20/10/2020",
      current: false,
    }]
  },
  skills: {
    javascript: ["React", "JSX", "ES6", "Mocha", "Enzyme"],
    html: ["HTML5", "Pug"],
    css: ["CSS3", "SASS"],
    other: ["Scrum", "Agile"]
  },
  complementary: {
    sections: [{
      label: "Languages",
      options: ["English", "German"]
    }]
  },
  awards: {
    certs: [
      {
        title: `AWS Solutions Architect`,
        type: `Certification`,
        years: `2021`
      }
    ]
  }
}

const skillGroupMapper = {
  javascript: {
    name: "JavaScript",
    icon: <svg width={18} viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>
  },
  html: {
    name: "HTML",
    icon: <svg width={18} viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>
  
  },
  css: {
    name: "CSS",
    icon: <svg width={18} viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>
  },
  other: {
    name: "Other",
    icon: <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#CDCDCD" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
  },
}

const DefaultTemplate = ({values}) => {
  
  const {personal, education, experience, skills, complementary, awards} = defaultValues
  const skillGroups = Object.keys(skills)

  if (!personal?.name) return null
  
  return(
    <>
      <div className="wrapper">
        <div className="paper">
          <div className="headerSection">
            <div className="headerSectionLeft">
              <h1 className="name">{personal.name}</h1>
              <h3 className="jobTitle">{personal.title}</h3>
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
          <hr className="separator" />
          <div className="sectionLayout">
            <div>
            {education?.schools?.length && (
                <div>
                  <h4 className="sectionTitle">Education</h4>
                  <ul className="sectionList">
                  {education.schools.map((school) => (
                    <li className="section">
                      <div className="sectionName">{school.schoolName}, <em>{school.degree}</em></div>
                      <div className="sectionDate">{school.startDate} - {school.endDate}</div>
                      <div className="sectionDesc">{school.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              {experience?.jobs?.length && (
                <div>
                  <h4 className="sectionTitle">Work Experience</h4>
                  <ul className="sectionList">
                  {experience.jobs.map((job) => (
                    <li className="section">
                      <div className="sectionName">{job.jobTitle}, <em>{job.companyName}</em></div>
                      <div className="sectionDate">{job.startDate} - {job.endDate}</div>
                      <div className="sectionDesc">{job.description}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              {awards?.certs?.length && (
                <div>
                  <h4 className="sectionTitle">Certifications</h4>
                  <ul className="sectionList">
                  {awards.certs.map((cert) => (
                    <li className="section">
                      <div className="sectionName">{cert.title}</div>
                      <div className="sectionDate">{cert.years}</div>
                    </li>
                  ))}
                  </ul>
                </div>
              )}
              </div>
              <div>
                {skills !== null && (
                  <div>
                    <h4 className="sectionTitle">Skills</h4>
                    {skillGroups.map((group) => (
                      <div className="skillGroup">
                        <div className="skillName">
                          <div className="skillNameIcon">{skillGroupMapper[group].icon}</div>
                          {skillGroupMapper[group].name}
                        </div>
                        <ul className="skillList">
                          {skills[group].map(skill => <li>{skill}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {complementary !== null && (
                  <div>
                    {complementary.sections.map((section) => (
                      <>
                        <h4 className="sectionTitle">{section.label}</h4>
                        <div className="skillGroup">
                          <ul className="skillList">
                            {section.options.map(option => <li className="skillListItem">{option}</li>)}
                          </ul>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
            </div>
          {/* <pre>
            {JSON.stringify(values, null, 2)}
          </pre> */}
        </div>
      </div>
    </>
)}

export default DefaultTemplate