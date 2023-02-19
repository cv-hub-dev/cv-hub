export const defaultValues = {
  personal: {
    name: "Anastasia Kashkinova",
    phone: "123-12323-2323",
    address: "Southbank, Australia",
    email: "anastasia.kashkinova@gmail.com",
    linkedin: "/saintasia",
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
        year: `2021`
      }
    ]
  },
  projects: [
    {
      title: `Uber App Clone`,
      year: `2022`,
      link: `github.com`,
      description: `Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
    }
  ]
}
