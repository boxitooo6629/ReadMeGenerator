// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `* [License](#license)`
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Useage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ### Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ### Usage
  ${data.usage}

  ## License
   
  This project is licensed under the ${data.license} license. 

  ## Contributing

  ${data.contributing}

  ## Test

  to run tests, run following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions
  if you have any questions about the repo open an issue or contact me directly at ${data.email}.

  You can find more about my work at [${data.github}](http://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
