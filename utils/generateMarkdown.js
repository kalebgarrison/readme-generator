// function to generate markdown for README
function generateMarkdown(data) {
  const {title, projectDescription, userInstructions, command, testCommand, licenseChoices, email, username, userContribution, licenseLink } = data
  return `# ${title}

  ![License](${licenseChoices})


  ## Description
  ${projectDescription}



  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:
  ${command}


  ## Usage
  ${userInstructions}


  ## License
  ![License](${licenseChoices})
  [Here is a link to the license](${licenseLink})


  ## Contributing
  ${userContribution}


  ## Tests
  ${testCommand}


  ## Questions

 Here is a link to my [GitHub profile](https://github.com/${username})

  If you have any questions please reach out to me here at: ${email}
`;

}

module.exports = generateMarkdown;

// console.log(data)