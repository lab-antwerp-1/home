# Vocabulary

I.T. is a new language, the words may come from English but they often mean
something completely different!

Use this folder to fill out your own class' vocabulary list using PRs as you
learn important words or find a helpful definitions.

Translations are more than welcome!

---

## Branch
A version of the repository that diverges from the main working project. Branches can be a new version of a repository, experimental changes, or personal forks of a repository for users to alter and test changes.

## Cherry-picking
When cherry-picking a commit in Git, you are taking an older commit, and rerunning it at a defined location. Git copies the changes from the original commit, and then adds them to the current location.

## Clone
A clone is a copy of a repository or the action of copying a repository. When cloning a repository into another branch, the new branch becomes a remote-tracking branch that can talk upstream to its origin branch (via pushes, pulls, and fetches).

## Fetch
By performing a Git fetch, you are downloading and copying that branch’s files to your workstation. Multiple branches can be fetched at once, and you can rename the branches when running the command to suit your needs.

## Fork
Creates a copy of a repository.

## Git Checkout
The `git checkout` command is used to switch branches in a repository. `git checkout testing-el` would take you to the testing-el branch whereas `git checkout master` would drop you back into master. Be careful with your staged files and commits when switching between branches.

## HEAD
HEAD is a reference variable used to denote the most current commit of the repository in which you are working. When you add a new commit, HEAD will then become that new commit.

## Index
The working, or staging, area of Git. Files that have been changed, added and deleted will be staged within the index until you are ready to commit the files. To see what is set in your Git index, run `git status` within your repository. The green files are staged and ready to commit, whereas the red files have not yet been added to staging for the next commit.

## Master
The primary branch of all repositories. All committed and accepted changes should be on the master branch. You can work directly from the master branch, or create other branches.

## Merge
Taking the changes from one branch and adding them into another (traditionally master) branch. These commits are usually first requested via pull request before being merged by a project maintainer.

## Origin
The conventional name for the primary version of a repository. Git also uses `origin` as a system alias for pushing and fetching data to and from the primary branch. For example, `git push origin master`, when run on a remote, will push the changes to the master branch of the primary repository database.

## Pull/Pull Request
If someone has changed code on a separate branch of a project and wants it to be reviewed to add to the master branch, that someone can put in a pull request. Pull requests ask the repo maintainers to review the commits made, and then, if acceptable, merge the changes upstream. A pull happens when adding the changes to the master branch.

## Push
Updates a remote branch with the commits made to the current branch. You are literally “pushing” your changes onto the remote.

## Rebase
When rebasing a git commit, you can split the commit, move it, squash it if unwanted, or effectively combine two branches that have diverged from one another.

## Remote
A copy of the original branch. When you clone a branch, that new branch is a remote, or clone. Remotes can talk to the origin branch, as well as other remotes for the repository, to make communication between working branches easier.

## Repository (“Repo”)
In many ways, you can think of a Git repository as a directory that stores all the files, folders, and content needed for your project. What it actually is, is the object database of the project, storing everything from the files themselves, to the versions of those files, commits, deletions, et cetera. Repositories are not limited by user, and can be shared and copied (see: fork).

## Stash
While working with Git, you may need to make multiple changes to files, but you may not want all changes to go in one commit. If you want to pause the changes you are working on now in favor of working on another issue or improvement, you can “stash” your changes, essentially clearing them from the staging area until the changes are called again. You can only stash one set of changes at a time. To stash your staging area use `git stash [files]`; to retrieve the stashed files, run `git stash pop`. You can also clear the stashed files with `git stash drop`.

## Tag
Tags are used to define which portions of a project’s Git history is most important. Often this is used to note point releases of a project. Tags can be added to the commit you are working with or added after-the-fact when needed.

## Upstream
While there is not necessarily a default “upstream” or “downstream” for Git projects, upstream can be considered where you push your Git changes — this is often the master branch of the project within the origin
