# Most common git terminal commands

## git clone

This command is used for downloading the latest version of a remote project and copying it to the selected location on the local machine. It looks like this:

- git clone [repository-url]

## git fetch

This Git command will get all the updates from the remote repository, including new branches.

## git checkout

You can use the checkout command to switch the branch that you are currently working on.

- git checkout [branch name]

## git init

This is the command you need to use if you want to start a new empty repository or to reinitialize an existing one in the project root. It will create a .git directory with its subdirectories. It should look like this:

- git init [repository name]

## git commit

This one is probably the most used Git command. After changes are done locally, you can save them by “committing” them. A commit is like local a snapshot of the current state of the branch, to which you can always come back. To create a new commit, type this command in Git Bash:

- git commit -m "[commit message here]"

## git push

Git push will push the locally committed changes to the remote branch. If the branch is already remotely tracked, simply use it like this (with no parameters):

- git push

If the branch is not yet tracked, and only resides on the local machine, you need to run the command like this:

- git push --set-upstream [remote branch] [branch name]

## git diff

You can use this command to see the not staged changes on the current branch.

If you want to see the staged changes, run the diff command like this:

- git diff --staged

Or you can compare two branches:

- gif diff [branch1] [branch2]

## git pull

Using git pull will fetch all the changes from the remote repository and merge any remote changes in the current local branch.

## git add

This is the command you need to use to stage changed files. You can stage individual files:

- git add [file path]

Or all files:

- git add

## git branch

Using git branch will list all the branches of the repository:
