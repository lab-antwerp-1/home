"use strict";

const renderCoach = (coach, mainData) => {
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
    `        <li>issues: <a href="https://github.com/${mainData.orgName}/${mainData.repoName}/issues?q=author%3A${coach.userName}" >authored</a>, <a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${coach.userName}" >assigned</a></li>\n` +
    coachModules +
    `    </ul>\n` +
    `  </td>\n` +
    `</tr></table>`;

  return coachProfile;
};

module.exports = renderCoach;
