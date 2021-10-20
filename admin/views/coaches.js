"use strict";

const renderCoach = (coach, mainData) => {
  const orgURL = `https://github.com/${mainData.orgName}`;
  const repoURL = `${orgURL}/${mainData.repoName}`;

  const coachHome = coach.homePage
    ? `<li>about: <a href="${coach.homePage}">home page</a></li>\n`
    : "";

  const coachModules = Array.isArray(coach.modules)
    ? coach.modules
        .map((modName) => `<li><code>${modName}</code></li>`)
        .reduce((mods, mod) => mods + "\n" + mod)
    : "";

  const coachProfile =
    `<table><tr>\n` +
    `  <td><img src='./admin/avatars/coaches/${coach.userName}.jpeg' height="150px" width="150px" alt='${coach.name}' /></td>\n` +
    `  <td> <h3 display="inline">${coach.name}</h3>\n` +
    `    <ul>\n` +
    coachHome +
    `        <li>github: <a href="https://github.com/${coach.userName}" >${coach.userName}</a></li>\n` +
    `        <li>issues: <a href="${repoURL}/issues?q=author%3A${coach.userName}">opened</a>, <a href="${repoURL}/issues?q=assignee%3A${coach.userName}+is%3Aissue">assigned</a>, <a href="${repoURL}/issues?q=commenter%3A${coach.userName}">commented</a></li>\n` +
    `        <li>PRs: <a href="${repoURL}/pulls?q=author%3A${coach.userName}">opened</a>, <a href="${repoURL}/pulls?q=assignee%3A${coach.userName}+is%3Apr">assigned</a>, <a href="${repoURL}/pulls?q=commenter%3A${coach.userName}">commented</a>, <a href="${repoURL}/pulls?q=reviewed-by%3A${coach.userName}+is%3Apr">reviewed</a></li>\n` +
    `       <li>discussions: <a href="${repoURL}/discussions?discussions_q=author%3A${coach.userName}">opened</a>, <a href="${repoURL}/discussions?discussions_q=commenter%3A${coach.userName}">commented</a>, <a href="${repoURL}/discussions?discussions_q=includes%3A${coach.userName}">included</a></li>` +
    `       <li>mentions: <a href="${repoURL}/issues?q=mentions%3A${coach.userName}">issues</a>, <a href="${repoURL}/pulls?q=mentions%3A${coach.userName}">PRs</a>, <a href="${repoURL}/discussions?discussions_q=mentions%3A${coach.userName}">discussions</a>\n` +
    coachModules +
    `    </ul>\n` +
    `  </td>\n` +
    `</tr></table>`;

  return coachProfile;
};

module.exports = renderCoach;
