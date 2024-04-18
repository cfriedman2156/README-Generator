// SIMPLIFIED 3 FUNCTIONS INTO ONE
let licenseBadge = "";

function renderLicenseBadge(license) {
  
  if (license === "Apache 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU General Public v3.0") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Boost Software 1.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Creative Commons Zero 1.0 Universal") {
    licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === "No License") {
    return;
}}


// CREATES README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  return `${licenseBadge}

  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  - Installation
  - Usage
  - How to Contribute
  - Tests
  - Questions

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${data.license} license.

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions you can reach me at ${data.email}.
  My GitHub profile can be found at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
