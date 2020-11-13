// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}

  
  ## Table of Contents 

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Contact Me](#ContactMe)
  * [License](#License)

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

  ## Contact Me <a name="ContactMe"></a>

  Contact me by email (${data.email}) or through my github (github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
