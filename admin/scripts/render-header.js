"use strict";

const replaceInReadme = require("./lib/replace-in-readme.js");

const mainData = require("../data/index.json");

const header = `

# ${mainData.orgName
  .split("-")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ")}

> - [Issues](https://github.com/${mainData.orgName}/${
  mainData.repoName
}/issues): [\`help-wanted\`](https://github.com/${mainData.orgName}/${
  mainData.repoName
}/issues?q=is%3Aopen+label%3Ahelp%20wanted), [\`question\`](https://github.com/${
  mainData.orgName
}/${mainData.repoName}/issues?q=is%3Aopen+label%3Aquestion)
> - [Discussions](https://github.com/${mainData.orgName}/${
  mainData.repoName
}/discussions/)
${
  mainData.boards.find((board) => board.name === "deliverables")
    ? `> - [Deliverables](https://github.com/${mainData.orgName}/${
        mainData.repoName
      }/projects/${
        mainData.boards.find((board) => board.name === "deliverables").number
      })`
    : ""
}
> - [Random Groups](https://${mainData.orgName}.github.io/${
  mainData.repoName
}/randomizer)
> <details>
> <summary>Rubber Ducky</summary>
>
> [![Rubber Ducky](./assets/rubber-ducky.png)](https://rubberduckdebugging.com/)
>
>  </details>

`;

replaceInReadme(header, "HEADER");
