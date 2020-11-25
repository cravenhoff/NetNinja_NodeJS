# Git Commands
The most commonly used Git Commands I've been using, compiled here as a quick reference for instances where I may need to lookup a certain command.

## Saving and Tracking Changes

#### Create a Local Git Repo
Used to intialize a local git repository on your "local" computer.   
`git init`

#### Add a File to be Tracked
Files can be tracked in Git using the <add> command.   
`git add <filename>`

To track all files in a folder, use the aesterisk symbol also called the "wildcard".   
`git add *`

#### Commit a File to Git
Once a file is added to be tracked by Git, they're ready to be committed or saved.   
`git commit -m <message>`

#### Clone a Remote Repository
This command will clone a remote Github repository so that it is available on your local system to track independently.   
`git clone <url>`

## Git Branches

#### Check the Current Branch
To check and confirm the current branch you're on, before tracking and subsequently committing changes.   
`git branch`

#### Listing All Branches: Local and Remote
To list and check all available branches, both local and remote.   
`git branch -a`

#### Create a New Branch
A new branch can be created in your local git and later "pushed" to your remote GitHub account for others to access and see.   
`git branch <branchname>`

#### Access a Different Branch
Allows you to move out of the current branch and into another branch.   
`git checkout <branchname>`

#### Delete a Branch
Git Branches can be deleted using the following command.   
`git branch -d <branchname>`

#### Clone a Remote Branch
How to clone a remote branch on a Github repository.   
`git checkout -b <newlocalbranch> <remotebranchtoclone>`

## Pushing Commands

#### Pushing Commits to a Remote Repository
How to push local commits to a remote repository.   
`git push <remotename> <branchname>`

#### Renaming Remote Branch
You can rename a local branch that is pushed to a remote repository.   
`git push <remotename> <localbranchname>:<remotebranchname>`

## Miscellaneous Commands

#### Retrieve Remote GitHub Repo
Use this command to confirm which remote Github Repo your local git repo is connected to.   
`git config --get remote.origin.url`

## Git Terminal Editor
Use the following commands to work with the default terminal editor Git uses.
* To insert messages: type `i`
* Type in merge message
* Enter `esc` to exit insert interface
* To exit editor: type in `:wq` and hit enter.

In cases where, for example: you're scrolling through a long list of commit logs, the terminal editor will be activated as you tab/enter through the commits. In order to "exit" the editor, you'll have to use the `q` command.
