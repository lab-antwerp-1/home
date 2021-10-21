"use strict";

const replaceInReadme = require("./lib/replace-in-readme.js");

const mainData = require("../data/index.json");

const repoURL = `https://github.com/${mainData.orgName}/${mainData.repoName}`;

const toc = `
- [Class Calendar](#class-calendar)
- [Modules](#modules)
- [Students](#students)
- [Coaches](#coaches)
- Class Notes
  - [Vocabulary](./vocabulary) (_[PRs](${repoURL}/pulls?q=label%3Avocabulary)_)
  - [Snippets](./snippets) (_[PRs](${repoURL}/pulls?q=label%3Asnippets)_)
  - [Chill Zone](./chill-zone)
- HYF Links
  - [Student Guidebook](https://home.hackyourfuture.be/students)
  - [Curriculum](https://home.hackyourfuture.be/curriculum)
  - [Study Book](https://hackyourfuture.github.io/study)
  - [GitHub](https://github.com/hackyourfuturebelgium)
- [Using this Repo](#using-this-repo)
`;

replaceInReadme(toc, "TOC");
