<!-- BEGIN HEADER -->

# Lab Antwerp 1

> - [Issues](https://github.com/lab-antwerp-1/home/issues):
>   [`help-wanted`](https://github.com/lab-antwerp-1/home/issues?q=is%3Aopen+label%3Ahelp-wanted),
>   [`question`](https://github.com/lab-antwerp-1/home/issues?q=is%3Aopen+label%3Aquestion)
> - [Discussions](https://github.com/lab-antwerp-1/home/discussions/)
> - [Deliverables](https://github.com/lab-antwerp-1/home/projects/1)
> - [Random Groups](https://lab-antwerp-1.github.io/home/randomizer)
>
> <details>
> <summary>Rubber Ducky</summary>
>
> [![Rubber Ducky](./assets/rubber-ducky.png)](https://rubberduckdebugging.com/)
>
>  </details>

<!-- END HEADER -->

This repository is yours to keep track of what you've covered so far, to get to
know each other, to share helpful resources, to practice collaboration
workflows, ... to do everything!

Slack is great for chatting but links and good explanations can easily get lost
in message history. Think of this repository as your class' forum and home page.

<!-- BEGIN TOC -->

- [Getting Started](#getting-started)
- [Class Calendar](#class-calendar)
- [Modules](#modules)
- [Students](#students)
- [Coaches](#coaches)
- Class Notes
  - [Vocabulary](./vocabulary)
    (_[PRs](https://github.com/lab-antwerp-1/home/pulls?q=label%3Avocabulary)_)
  - [Snippets](./snippets)
    (_[PRs](https://github.com/lab-antwerp-1/home/pulls?q=label%3Asnippets)_)
  - [Chill Zone](./chill-zone)
- HYF Links
  - [Student Guidebook](https://home.hackyourfuture.be/students)
  - [Curriculum](https://home.hackyourfuture.be/curriculum)
  - [Study Book](https://hackyourfuture.github.io/study)
  - [GitHub](https://github.com/hackyourfuturebelgium)
- [Using this Repo](#using-this-repo)

<!-- END TOC -->

---

## Getting Started

<!-- a guide to using this repository -->

<details>
<summary>expand/collapse</summary>
<br>

1. `git clone git@github.com:HackYourFutureBelgium/template-markdown.git`
2. `cd template-markdown`
3. `npm install`

## Code Quality Checks

- `npm run format`: Makes sure all the code in this repository is well-formatted
  (looks good).
- `npm run lint:ls`: Checks to make sure all folder and file names match the
  repository conventions.
- `npm run lint:md`: Will lint all of the Markdown files in this repository.
- `npm run lint:css`: Will lint all of the CSS files in this repository.
- `npm run validate:html`: Validates all HTML files in your project.
- `npm run spell-check`: Goes through all the files in this repository looking
  for words it doesn't recognize. Just because it says something is a mistake
  doesn't mean it is! It doesn't know every word in the world. You can add new
  correct words to the [./.cspell.json](./.cspell.json) file so they won't cause
  an error.
- `npm run accessibility -- ./path/to/file.html`: Runs an accessibility analysis
  on all HTML files in the given path and writes the report to
  `/accessibility_report`

## Continuous Integration (CI)

When you open a PR to `main`/`master` in your repository, GitHub will
automatically do a linting check on the code in this repository, you can see
this in the[./.github/workflows/lint.yml](./.github/workflows/lint.yml) file.

If the linting fails, you will not be able to merge the PR. You can double check
that your code will pass before pushing by running the code quality scripts
locally.

</details>

---

## Class Calendar

<details>
<summary>expand/collapse</summary>
<br>

![Lesson Plan Calendar](./assets/lesson-plan-calendar.png)

</details>

---

## Modules

<!-- BEGIN MODULES -->
  <ol start="1">

<li><h3><a href="https://home.hackyourfuture.be/curriculum/precourse" style="display: inline">precourse</a></h3>  <ul><li><p>    0 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aprecourse">deliverables</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/1">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/precourse">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/workflows" style="display: inline">workflows</a></h3>  <ul><li><p>    2 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aworkflows">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aworkflows+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/2">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/workflows">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/agile-development" style="display: inline">agile-development</a></h3>  <ul><li><p>    3 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aagile-development">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aagile-development+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/3">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/agile-development">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/ux-ui-design" style="display: inline">ux-ui-design</a></h3>  <ul><li><p>    2 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aux-ui-design">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aux-ui-design+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/4">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/ux-ui-design">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/welcome-to-js" style="display: inline">welcome-to-js</a></h3>  <ul><li><p>    2 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Awelcome-to-js">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Awelcome-to-js+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/5">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/welcome-to-js">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/debugging" style="display: inline">debugging</a></h3>  <ul><li><p>    4 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Adebugging">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Adebugging+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/6">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/debugging">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/behavior-strategy-implementation" style="display: inline">behavior-strategy-implementation</a></h3>  <ul><li><p>    3 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Abehavior-strategy-implementation">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Abehavior-strategy-implementation+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/7">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/behavior-strategy-implementation">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/separation-of-concerns" style="display: inline">separation-of-concerns</a></h3>  <ul><li><p>    3 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aseparation-of-concerns">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aseparation-of-concerns+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/8">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/separation-of-concerns">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/architecture" style="display: inline">architecture</a></h3>  <ul><li><p>    4 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aarchitecture">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aarchitecture+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/9">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/architecture">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/asynchronous-programming" style="display: inline">asynchronous-programming</a></h3>  <ul><li><p>    3 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Aasynchronous-programming">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Aasynchronous-programming+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/10">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/asynchronous-programming">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/cloud-based-backends" style="display: inline">cloud-based-backends</a></h3>  <ul><li><p>    3 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Acloud-based-backends">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Acloud-based-backends+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/11">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/cloud-based-backends">materials</a>  </p></li></ul></li>
<li><h3><a href="https://home.hackyourfuture.be/curriculum/final-project" style="display: inline">final-project</a></h3>  <ul><li><p>    4 chapters   | <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=label%3Adeliverable+milestone%3Afinal-project">deliverables</a>    | <a href="https://github.com/lab-antwerp-1/home/issues?q=milestone%3Afinal-project+label%3Acheck-in">check-ins</a>     | <a href="https://github.com/lab-antwerp-1/home/milestone/13">milestone</a> | <a href="https://github.com/HackYourFutureBelgium/final-project">materials</a>  </p></li></ul></li>
</ol><br>

[TOP](#home)

<!-- END MODULES -->

---

## Students

<!-- BEGIN STUDENTS -->
  <ul  style="list-style-type:none;">

<li><table>
      <tr>
        <h3 display="inline" id="ashenafykebede">Ashenafi Weldie</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/ashenafykebede" alt="Ashenafi Weldie github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=ashenafykebede&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="ashenafykebede github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/ashenafykebede.jpeg' height="200px" width="200px" alt='ashenafykebede avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/ashenafykebede.md" target="_blank">bio</a>,      <a href="https://ashenafykebede.github.io">home page</a>, <a href="https://github.com/ashenafykebede">ashenafykebede</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Aashenafykebede">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Aashenafykebede+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Aashenafykebede+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aashenafykebede">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aashenafykebede+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aashenafykebede">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aashenafykebede">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aashenafykebede+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aashenafykebede">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aashenafykebede+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aashenafykebede">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aashenafykebede">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aashenafykebede">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aashenafykebede">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aashenafykebede">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aashenafykebede">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/ashenafykebede">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="aviv82">Aviv Dror</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/aviv82" alt="Aviv Dror github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=aviv82&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="aviv82 github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/aviv82.jpeg' height="200px" width="200px" alt='aviv82 avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/aviv82.md" target="_blank">bio</a>,      <a href="https://aviv82.github.io">home page</a>, <a href="https://github.com/aviv82">aviv82</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Aaviv82">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Aaviv82+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Aaviv82+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aaviv82">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aaviv82+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aaviv82">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aaviv82">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aaviv82+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aaviv82">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aaviv82+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aaviv82">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aaviv82">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aaviv82">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aaviv82">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aaviv82">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aaviv82">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/aviv82">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="denrique-alvarez">Daniel Álvarez</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/denrique-alvarez" alt="Daniel Álvarez github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=denrique-alvarez&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="denrique-alvarez github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/denrique-alvarez.jpeg' height="200px" width="200px" alt='denrique-alvarez avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/denrique-alvarez.md" target="_blank">bio</a>,      <a href="https://denrique-alvarez.github.io">home page</a>, <a href="https://github.com/denrique-alvarez">denrique-alvarez</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Adenrique-alvarez">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Adenrique-alvarez+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Adenrique-alvarez+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Adenrique-alvarez">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Adenrique-alvarez+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Adenrique-alvarez">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Adenrique-alvarez">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Adenrique-alvarez+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Adenrique-alvarez">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Adenrique-alvarez+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Adenrique-alvarez">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Adenrique-alvarez">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Adenrique-alvarez">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Adenrique-alvarez">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Adenrique-alvarez">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Adenrique-alvarez">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/denrique-alvarez">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="Darin-Hamouda">Darin Hamouda</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/Darin-Hamouda" alt="Darin Hamouda github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=Darin-Hamouda&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="Darin-Hamouda github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/Darin-Hamouda.jpeg' height="200px" width="200px" alt='Darin-Hamouda avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/Darin-Hamouda.md" target="_blank">bio</a>,      <a href="https://Darin-Hamouda.github.io">home page</a>, <a href="https://github.com/Darin-Hamouda">Darin-Hamouda</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3ADarin-Hamouda">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3ADarin-Hamouda+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3ADarin-Hamouda+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3ADarin-Hamouda">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3ADarin-Hamouda+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3ADarin-Hamouda">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3ADarin-Hamouda">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3ADarin-Hamouda+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3ADarin-Hamouda">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3ADarin-Hamouda+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3ADarin-Hamouda">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3ADarin-Hamouda">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3ADarin-Hamouda">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3ADarin-Hamouda">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3ADarin-Hamouda">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3ADarin-Hamouda">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/Darin-Hamouda">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="krakla">Mahmoud Abu Azoum</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/krakla" alt="Mahmoud Abu Azoum github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=krakla&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="krakla github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/krakla.jpeg' height="200px" width="200px" alt='krakla avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/krakla.md" target="_blank">bio</a>,      <a href="https://krakla.github.io">home page</a>, <a href="https://github.com/krakla">krakla</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Akrakla">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Akrakla+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Akrakla+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Akrakla">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Akrakla+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Akrakla">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Akrakla">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Akrakla+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Akrakla">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Akrakla+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Akrakla">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Akrakla">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Akrakla">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Akrakla">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Akrakla">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Akrakla">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/krakla">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="mauricemat">Maurice Mateke</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/mauricemat" alt="Maurice Mateke github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=mauricemat&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="mauricemat github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/mauricemat.jpeg' height="200px" width="200px" alt='mauricemat avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/mauricemat.md" target="_blank">bio</a>,      <a href="https://mauricemat.github.io">home page</a>, <a href="https://github.com/mauricemat">mauricemat</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Amauricemat">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Amauricemat+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Amauricemat+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Amauricemat">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Amauricemat+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Amauricemat">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Amauricemat">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Amauricemat+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Amauricemat">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Amauricemat+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Amauricemat">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Amauricemat">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Amauricemat">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Amauricemat">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Amauricemat">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Amauricemat">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/mauricemat">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="Mervatabuamro">Mervat Abuamro</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/Mervatabuamro" alt="Mervat Abuamro github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=Mervatabuamro&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="Mervatabuamro github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/Mervatabuamro.jpeg' height="200px" width="200px" alt='Mervatabuamro avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/Mervatabuamro.md" target="_blank">bio</a>,      <a href="https://Mervatabuamro.github.io">home page</a>, <a href="https://github.com/Mervatabuamro">Mervatabuamro</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3AMervatabuamro">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3AMervatabuamro+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3AMervatabuamro+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3AMervatabuamro">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3AMervatabuamro+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3AMervatabuamro">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3AMervatabuamro">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3AMervatabuamro+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3AMervatabuamro">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3AMervatabuamro+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3AMervatabuamro">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3AMervatabuamro">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3AMervatabuamro">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3AMervatabuamro">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3AMervatabuamro">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3AMervatabuamro">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/Mervatabuamro">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="HansMbua">Muwa Mbua</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/HansMbua" alt="Muwa Mbua github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=HansMbua&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="HansMbua github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/HansMbua.jpeg' height="200px" width="200px" alt='HansMbua avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/HansMbua.md" target="_blank">bio</a>,      <a href="https://HansMbua.github.io">home page</a>, <a href="https://github.com/HansMbua">HansMbua</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3AHansMbua">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3AHansMbua+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3AHansMbua+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3AHansMbua">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3AHansMbua+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3AHansMbua">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3AHansMbua">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3AHansMbua+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3AHansMbua">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3AHansMbua+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3AHansMbua">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3AHansMbua">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3AHansMbua">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3AHansMbua">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3AHansMbua">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3AHansMbua">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/HansMbua">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="Nefn-Lakhouj">Nefn Lakhouj</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/Nefn-Lakhouj" alt="Nefn Lakhouj github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=Nefn-Lakhouj&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="Nefn-Lakhouj github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/Nefn-Lakhouj.jpeg' height="200px" width="200px" alt='Nefn-Lakhouj avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/Nefn-Lakhouj.md" target="_blank">bio</a>,      <a href="https://Nefn-Lakhouj.github.io">home page</a>, <a href="https://github.com/Nefn-Lakhouj">Nefn-Lakhouj</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3ANefn-Lakhouj">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3ANefn-Lakhouj+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3ANefn-Lakhouj+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3ANefn-Lakhouj">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3ANefn-Lakhouj+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3ANefn-Lakhouj">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3ANefn-Lakhouj">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3ANefn-Lakhouj+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3ANefn-Lakhouj">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3ANefn-Lakhouj+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3ANefn-Lakhouj">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3ANefn-Lakhouj">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3ANefn-Lakhouj">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3ANefn-Lakhouj">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3ANefn-Lakhouj">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3ANefn-Lakhouj">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/Nefn-Lakhouj">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="omerjava">Ömer Faruk Kala</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/omerjava" alt="Ömer Faruk Kala github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=omerjava&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="omerjava github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/omerjava.jpeg' height="200px" width="200px" alt='omerjava avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/omerjava.md" target="_blank">bio</a>,      <a href="https://omerjava.github.io">home page</a>, <a href="https://github.com/omerjava">omerjava</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Aomerjava">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Aomerjava+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Aomerjava+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aomerjava">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aomerjava+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aomerjava">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aomerjava">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aomerjava+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aomerjava">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aomerjava+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aomerjava">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aomerjava">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aomerjava">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aomerjava">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aomerjava">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aomerjava">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/omerjava">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="sannesofie">Sanne Sofie Nielsen</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/sannesofie" alt="Sanne Sofie Nielsen github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=sannesofie&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="sannesofie github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/sannesofie.jpeg' height="200px" width="200px" alt='sannesofie avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/sannesofie.md" target="_blank">bio</a>,      <a href="https://sannesofie.github.io">home page</a>, <a href="https://github.com/sannesofie">sannesofie</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Asannesofie">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Asannesofie+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Asannesofie+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Asannesofie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Asannesofie+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Asannesofie">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Asannesofie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Asannesofie+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Asannesofie">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Asannesofie+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Asannesofie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Asannesofie">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Asannesofie">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Asannesofie">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Asannesofie">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Asannesofie">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/sannesofie">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="tahminarasoli">Tahmina Rasoli</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/tahminarasoli" alt="Tahmina Rasoli github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=tahminarasoli&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="tahminarasoli github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/tahminarasoli.jpeg' height="200px" width="200px" alt='tahminarasoli avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/tahminarasoli.md" target="_blank">bio</a>,      <a href="https://tahminarasoli.github.io">home page</a>, <a href="https://github.com/tahminarasoli">tahminarasoli</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3Atahminarasoli">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3Atahminarasoli+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3Atahminarasoli+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Atahminarasoli">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Atahminarasoli+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Atahminarasoli">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Atahminarasoli">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Atahminarasoli+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Atahminarasoli">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Atahminarasoli+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Atahminarasoli">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Atahminarasoli">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Atahminarasoli">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Atahminarasoli">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Atahminarasoli">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Atahminarasoli">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/tahminarasoli">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="AlinaTaoRao">Tao RAO</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/AlinaTaoRao" alt="Tao RAO github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=AlinaTaoRao&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="AlinaTaoRao github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/AlinaTaoRao.jpeg' height="200px" width="200px" alt='AlinaTaoRao avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/AlinaTaoRao.md" target="_blank">bio</a>,      <a href="https://AlinaTaoRao.github.io">home page</a>, <a href="https://github.com/AlinaTaoRao">AlinaTaoRao</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3AAlinaTaoRao">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3AAlinaTaoRao+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3AAlinaTaoRao+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3AAlinaTaoRao">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3AAlinaTaoRao+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3AAlinaTaoRao">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3AAlinaTaoRao">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3AAlinaTaoRao+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3AAlinaTaoRao">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3AAlinaTaoRao+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3AAlinaTaoRao">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3AAlinaTaoRao">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3AAlinaTaoRao">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3AAlinaTaoRao">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3AAlinaTaoRao">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3AAlinaTaoRao">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/AlinaTaoRao">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
<li><table>
      <tr>
        <h3 display="inline" id="NajiSarah">sarah Naji</h3>
        <details>
        <summary>GitHub Stats</summary>
          <img src="https://ghchart.rshah.org/NajiSarah" alt="sarah Naji github activity" />
          <img src="https://github-readme-stats.vercel.app/api?username=NajiSarah&show_icons=true&theme=default&hide_title=true&hide_rank=true alt="NajiSarah github stats" />
        </details>
      </tr>  <tr>
    <td><img src='./admin/avatars/students/NajiSarah.jpeg' height="200px" width="200px" alt='NajiSarah avatar' /></td>
  <td>     <ul>
       <li>about: <a href="./student-bios/NajiSarah.md" target="_blank">bio</a>,      <a href="https://NajiSarah.github.io">home page</a>, <a href="https://github.com/NajiSarah">NajiSarah</a></li>        </li>        <li>HYF: <a href="https://github.com/lab-antwerp-1/home/projects/1?card_filter_query=assignee%3ANajiSarah">deliverables</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+author%3ANajiSarah+label%3Acheck-in">check-ins</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=is%3Aissue+commenter%3ANajiSarah+label%3Aroll-call">roll-calls</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3ANajiSarah">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3ANajiSarah+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3ANajiSarah">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3ANajiSarah">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3ANajiSarah+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3ANajiSarah">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3ANajiSarah+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3ANajiSarah">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3ANajiSarah">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3ANajiSarah">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3ANajiSarah">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3ANajiSarah">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3ANajiSarah">discussions</a>
        <li><a href="https://github.com/lab-antwerp-1/NajiSarah">private repo</a></li>
    </ul>
  </td>
</tr>
    </table> </li>
</ul><br>

[TOP](#home)

<!-- END STUDENTS -->

---

## Coaches

<!-- BEGIN COACHES -->
  <ul  style="list-style-type:none;">

<li><table><tr>
  <td><img src='./admin/avatars/coaches/otagi.jpeg' height="150px" width="150px" alt='Tiago' /></td>
  <td> <h3 display="inline">Tiago</h3>
    <ul>
<li>about: <a href="https://www.mendes-costa.net/">home page</a></li>
        <li>github: <a href="https://github.com/otagi" >otagi</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aotagi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aotagi+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aotagi">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aotagi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aotagi+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aotagi">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aotagi+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aotagi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aotagi">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aotagi">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aotagi">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aotagi">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aotagi">discussions</a>
<li><code>workflows</code></li>
<li><code>agile-development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/bermarte.jpeg' height="150px" width="150px" alt='Bernardo Martelli' /></td>
  <td> <h3 display="inline">Bernardo Martelli</h3>
    <ul>
        <li>github: <a href="https://github.com/bermarte" >bermarte</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Abermarte">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Abermarte+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Abermarte">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Abermarte">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Abermarte+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Abermarte">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Abermarte+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Abermarte">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Abermarte">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Abermarte">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Abermarte">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Abermarte">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Abermarte">discussions</a>
<li><code>workflows</code></li>
<li><code>agile-development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/yoshimalaise.jpeg' height="150px" width="150px" alt='Yoshi' /></td>
  <td> <h3 display="inline">Yoshi</h3>
    <ul>
        <li>github: <a href="https://github.com/yoshimalaise" >yoshimalaise</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Ayoshimalaise">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Ayoshimalaise+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Ayoshimalaise">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Ayoshimalaise">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Ayoshimalaise+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Ayoshimalaise">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Ayoshimalaise+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Ayoshimalaise">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Ayoshimalaise">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Ayoshimalaise">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Ayoshimalaise">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Ayoshimalaise">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Ayoshimalaise">discussions</a>
<li><code>workflows</code></li>
<li><code>agile-development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/talmurshidi.jpeg' height="150px" width="150px" alt='Tamar' /></td>
  <td> <h3 display="inline">Tamar</h3>
    <ul>
<li>about: <a href="https://www.linkedin.com/in/talmurhsidi">home page</a></li>
        <li>github: <a href="https://github.com/talmurshidi" >talmurshidi</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Atalmurshidi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Atalmurshidi+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Atalmurshidi">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Atalmurshidi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Atalmurshidi+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Atalmurshidi">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Atalmurshidi+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Atalmurshidi">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Atalmurshidi">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Atalmurshidi">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Atalmurshidi">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Atalmurshidi">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Atalmurshidi">discussions</a>
<li><code>workflows</code></li>
<li><code>agile-development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/samirm00.jpeg' height="150px" width="150px" alt='Samir' /></td>
  <td> <h3 display="inline">Samir</h3>
    <ul>
        <li>github: <a href="https://github.com/samirm00" >samirm00</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Asamirm00">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Asamirm00+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Asamirm00">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Asamirm00">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Asamirm00+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Asamirm00">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Asamirm00+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Asamirm00">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Asamirm00">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Asamirm00">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Asamirm00">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Asamirm00">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Asamirm00">discussions</a>
<li><code>workflows</code></li>
<li><code>agile-development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/mametur.jpeg' height="150px" width="150px" alt='Mamé Azad' /></td>
  <td> <h3 display="inline">Mamé Azad</h3>
    <ul>
        <li>github: <a href="https://github.com/mametur" >mametur</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Amametur">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Amametur+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Amametur">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Amametur">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Amametur+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Amametur">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Amametur+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Amametur">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Amametur">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Amametur">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Amametur">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Amametur">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Amametur">discussions</a>
<li><code>workflows</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/unmeshvrije.jpeg' height="150px" width="150px" alt='unmesh' /></td>
  <td> <h3 display="inline">unmesh</h3>
    <ul>
        <li>github: <a href="https://github.com/unmeshvrije" >unmeshvrije</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aunmeshvrije">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aunmeshvrije+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aunmeshvrije">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aunmeshvrije">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aunmeshvrije+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aunmeshvrije">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aunmeshvrije+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aunmeshvrije">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aunmeshvrije">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aunmeshvrije">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aunmeshvrije">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aunmeshvrije">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aunmeshvrije">discussions</a>
<li><code>workflows</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/miroslavveljanoski.jpeg' height="150px" width="150px" alt='miroslav' /></td>
  <td> <h3 display="inline">miroslav</h3>
    <ul>
        <li>github: <a href="https://github.com/miroslavveljanoski" >miroslavveljanoski</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Amiroslavveljanoski">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Amiroslavveljanoski+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Amiroslavveljanoski">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Amiroslavveljanoski">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Amiroslavveljanoski+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Amiroslavveljanoski">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Amiroslavveljanoski+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Amiroslavveljanoski">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Amiroslavveljanoski">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Amiroslavveljanoski">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Amiroslavveljanoski">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Amiroslavveljanoski">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Amiroslavveljanoski">discussions</a>
<li><code>Agile-Development</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/mvmiert.jpeg' height="150px" width="150px" alt='Maud Van Miert' /></td>
  <td> <h3 display="inline">Maud Van Miert</h3>
    <ul>
        <li>github: <a href="https://github.com/mvmiert" >mvmiert</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Amvmiert">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Amvmiert+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Amvmiert">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Amvmiert">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Amvmiert+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Amvmiert">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Amvmiert+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Amvmiert">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Amvmiert">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Amvmiert">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Amvmiert">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Amvmiert">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Amvmiert">discussions</a>
<li><code>UX/UI Design,Behavior Strategy & Implementation,Separation of concerns,final-project</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/arnochauveau.jpeg' height="150px" width="150px" alt='Arno Chauveau' /></td>
  <td> <h3 display="inline">Arno Chauveau</h3>
    <ul>
        <li>github: <a href="https://github.com/arnochauveau" >arnochauveau</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3Aarnochauveau">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3Aarnochauveau+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3Aarnochauveau">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3Aarnochauveau">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3Aarnochauveau+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3Aarnochauveau">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3Aarnochauveau+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3Aarnochauveau">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3Aarnochauveau">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3Aarnochauveau">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3Aarnochauveau">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3Aarnochauveau">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3Aarnochauveau">discussions</a>
<li><code>UX/UI Design,Welcome to JS,Architecture,Asynchronous Programming,final-project</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/LorenzoDeBie.jpeg' height="150px" width="150px" alt='Lorenzo De Bie' /></td>
  <td> <h3 display="inline">Lorenzo De Bie</h3>
    <ul>
        <li>github: <a href="https://github.com/LorenzoDeBie" >LorenzoDeBie</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3ALorenzoDeBie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3ALorenzoDeBie+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3ALorenzoDeBie">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3ALorenzoDeBie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3ALorenzoDeBie+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3ALorenzoDeBie">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3ALorenzoDeBie+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3ALorenzoDeBie">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3ALorenzoDeBie">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3ALorenzoDeBie">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3ALorenzoDeBie">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3ALorenzoDeBie">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3ALorenzoDeBie">discussions</a>
<li><code>Welcome to JS,Cloud-based backends</code></li>    </ul>
  </td>
</tr></table></li>
<li><table><tr>
  <td><img src='./admin/avatars/coaches/ThibautHumblet.jpeg' height="150px" width="150px" alt='Thibaut Humblet' /></td>
  <td> <h3 display="inline">Thibaut Humblet</h3>
    <ul>
        <li>github: <a href="https://github.com/ThibautHumblet" >ThibautHumblet</a></li>
        <li>issues: <a href="https://github.com/lab-antwerp-1/home/issues?q=author%3AThibautHumblet">opened</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=assignee%3AThibautHumblet+is%3Aissue">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/issues?q=commenter%3AThibautHumblet">commented</a></li>
        <li>PRs: <a href="https://github.com/lab-antwerp-1/home/pulls?q=author%3AThibautHumblet">opened</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=assignee%3AThibautHumblet+is%3Apr">assigned</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=commenter%3AThibautHumblet">commented</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=reviewed-by%3AThibautHumblet+is%3Apr">reviewed</a></li>
       <li>discussions: <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=author%3AThibautHumblet">opened</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=commenter%3AThibautHumblet">commented</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=includes%3AThibautHumblet">included</a></li>       <li>mentions: <a href="https://github.com/lab-antwerp-1/home/issues?q=mentions%3AThibautHumblet">issues</a>, <a href="https://github.com/lab-antwerp-1/home/pulls?q=mentions%3AThibautHumblet">PRs</a>, <a href="https://github.com/lab-antwerp-1/home/discussions?discussions_q=mentions%3AThibautHumblet">discussions</a>
<li><code>UX/UI Design,Welcome to JS,Behavior Strategy & Implementation,final-project</code></li>    </ul>
  </td>
</tr></table></li>
</ul><br>

[TOP](#home)

<!-- END COACHES -->

---

## Using this Repo

<details>
<summary>Here are 5 tips for using issues in this repository:</summary>

### Help Wanted

- **The Template**: If you're blocked on something in an assignment or
  self-study you can use the `help-wanted` template to create a new issue and
  ask for help.
- **The Label**: You can attach the `help-wanted` label to any issue or PR that
  you need help completing. If the code you are blocked on is in another
  repository, you can create a new issue using the `help-wanted` template to
  describe your problem and link to your code.

### Question

- **The Template** Got a question about anything? Go ahead and ask! You can use
  create a new issue using the `question` template to ask your question in a
  clear and structured way.
- **The Label**: Or add the `question` label to any other issue! This can help
  be helpful for searching check-ins or deliverables.

### Check-Ins

> template + label

Each module you will create a new check-in issue. You will use this issue to
keep track of your self-study progress, and to post a check-in comment for each
chapter including:

- **I need help with**
- **What Went Well**
- **What Went Less Well**
- **Lessons Learned**
- **Prep Work** (for the next chapter)

### Deliverable

> template + label

For each project/exercise/assignment (individual or group) you will place a new
issue on the Class Projects board.

- If you are blocked, add the `help-wanted` label
- When you think you're finished, move your issue into the Ready for Review
  column
  - If your assignment is complete, a coach will move it into the Done column
  - Else they will move it to Needs Revision. When you've addressed the feedback
    you can move it back into Ready for Review

### Roll-Calls

Each Sunday before class your coach will create a new Roll Call issue. Leave a
little comment to say hello and let us all know how your week went.

</details>
<br>
