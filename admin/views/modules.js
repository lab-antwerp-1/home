"use strict";

const renderModule = (module, mainData) => {
  const moduleURL = module.url
    ? module.url
    : mainData.curriculumOrigin
    ? `${mainData.curriculumOrigin}/${module.name}`
    : `https://github.com/${module.userName || mainData.curriculumUserName}/${
        module.name
      }`;

  const materials = mainData.curriculumUserName
    ? `| <a href="https://github.com/${
        module.userName || mainData.curriculumUserName
      }/${module.name}">materials</a>`
    : "";

  const chapters =
    typeof module.chapters === "number"
      ? `    ${module.chapters} chapter${module.chapters !== 1 ? "s" : ""}`
      : "    0 chapters";

  const checkIns =
    typeof module.chapters === "number"
      ? `   | <a href="https://github.com/${mainData.orgName}/${mainData.repoName}/issues?q=milestone%3A${module.name}+label%3Acheck-in">check-ins</a> `
      : "";

  const filters = Array.isArray(module.filters)
    ? module.filters
        .map(
          (filter) =>
            `  |  <a href="https://github.com/${mainData.orgName}/${
              mainData.repoName
            }/issues?q=milestone%3A${filter.milestone || module.name}+${
              Array.isArray(filter.labels)
                ? filter.labels.map((label) => "label%3A" + label).join("+")
                : ""
            }+${
              Array.isArray(filter.is)
                ? filter.is.map((label) => "is%3A" + label).join("+")
                : ""
            }">${filter.text}</a> `
        )
        .join("")
    : "";

  const deliverables = Array.isArray(module.board)
    ? module.board
        .map(
          (boardName) =>
            `   | <a href="https://github.com/${mainData.orgName}/${
              mainData.repoName
            }/projects/${
              mainData.boards.find((board) => board.name === boardName)
                ? mainData.boards.find((board) => board.name === boardName)
                    .number
                : 0
            }${
              boardName === "deliverables"
                ? `?card_filter_query=label%3Adeliverable+milestone%3A${module.name}`
                : ""
            }">${boardName}</a> `
        )
        .join("")
    : typeof module.board === "string"
    ? `   | <a href="https://github.com/${mainData.orgName}/${
        mainData.repoName
      }/projects/${
        mainData.boards.find((board) => board.name === module.board).number
      }${
        module.board === "deliverables"
          ? `?card_filter_query=label%3Adeliverable+milestone%3A${module.name}`
          : ""
      }">${module.board}</a> `
    : "";

  const links = Array.isArray(module.links)
    ? module.links
        .map((link) => `    <a href="${link.href}">${link.text}</a> | `)
        .join("")
    : "";

  // const rollCalls = module.chapters
  //   ? `    | <a href="https://github.com/${mainData.orgName}/${mainData.repoName}/issues?q=milestone%3A${module.name}+label%3Aroll-call+is%3Aopen">roll-calls</a> `
  //   : "";

  const milestone = module.milestone
    ? `    | <a href="https://github.com/${mainData.orgName}/${mainData.repoName}/milestone/${module.milestone}">milestone</a> `
    : "";

  return (
    `<h3><a href="${moduleURL}" style="display: inline">${module.name}</a></h3>` +
    (module.milestone
      ? `  <ul><li><p>` +
        chapters +
        deliverables +
        checkIns +
        // rollCalls +
        milestone +
        filters +
        links +
        materials +
        `  </p></li></ul>`
      : "")
  );
};
module.exports = renderModule;
