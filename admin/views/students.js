"use strict";

const renderStudent = (student, mainData) => {
  const orgURL = `https://github.com/${mainData.orgName}`;
  const repoURL = `${orgURL}/${mainData.repoName}`;
  const studentProfile =
    `<table> <tr>\n` +
    `  <td><img src='./admin/avatars/students/${student.userName}.jpeg' height="200px" width="200px" alt='${student.userName} avatar' /></td>\n` +
    `  <td> <h3 display="inline">${student.name}</h3>\n` +
    `    <ul>\n` +
    `       <li>about: <a href="./student-bios/${student.userName}.md" target="_blank">bio</a>,` +
    (typeof student.homePage === "string"
      ? `      <a href="${
          student.homePage || `https://${student.userName}.github.io`
        }">home page</a>`
      : `      <a href="https://${student.userName}.github.io">home page</a>`) +
    `, <a href="https://github.com/${student.userName}">${student.userName}</a></li>` +
    "        </li>" +
    `        <li>HYF: <a href="${repoURL}/projects/${
      mainData.boards.find((board) => board.name === "deliverables").number
    }?card_filter_query=assignee%3A${
      student.userName
    }">deliverables</a>, <a href="${repoURL}/issues?q=is%3Aissue+author%3A${
      student.userName
    }+label%3Acheck-in">check-ins</a>, <a href="${repoURL}/issues?q=is%3Aissue+commenter%3A${
      student.userName
    }+label%3Aroll-call">roll-calls</a></li>\n` +
    `        <li>issues: <a href="${repoURL}/issues?q=author%3A${student.userName}">opened</a>, <a href="${repoURL}/issues?q=assignee%3A${student.userName}+is%3Aissue">assigned</a>, <a href="${repoURL}/issues?q=commenter%3A${student.userName}">commented</a></li>\n` +
    `        <li>PRs: <a href="${repoURL}/pulls?q=author%3A${student.userName}">opened</a>, <a href="${repoURL}/pulls?q=assignee%3A${student.userName}+is%3Apr">assigned</a>, <a href="${repoURL}/pulls?q=commenter%3A${student.userName}">commented</a>, <a href="${repoURL}/pulls?q=reviewed-by%3A${student.userName}+is%3Apr">reviewed</a></li>\n` +
    `       <li>discussions: <a href="${repoURL}/discussions?discussions_q=author%3A${student.userName}">opened</a>, <a href="${repoURL}/discussions?discussions_q=includes%3A${student.userName}">included</a></li>` +
    `       <li>mentions: <a href="${repoURL}/issues?q=mentions%3A${student.userName}">issues</a>, <a href="${repoURL}/pulls?q=mentions%3A${student.userName}">PRs</a>, <a href="${repoURL}/discussions?discussions_q=mentions%3A${student.userName}">discussions</a>\n` +
    `        <li><a href="${orgURL}/${student.userName}">private repo</a></li>\n` +
    `    </ul>\n` +
    `  </td>\n` +
    `</tr></table> `;

  return studentProfile;
};

module.exports = renderStudent;
