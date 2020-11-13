// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}

  
  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Contact_Me](#contactme)
  * [License](#license)

  ## Installation

  To install necessary dependencies, run the following in your terminal:

  ---
  
  ${data.installation}
  
  ---

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Test

  To run test run the following command:

  ---

  ${data.test}

  ---

  ## Contact Me

  Contact me by email (${data.email}) or through my github (github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
