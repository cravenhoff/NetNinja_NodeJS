# Git Commands
The most commonly used Git Commands I've been using, compiled here as a quick reference for instances where I may need to lookup a certain command.

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

## Git Branches

#### Check the Current Branch
To check and confirm the current branch you're on, before tracking and subsequently committing changes.   
`git branch`

#### Create a New Branch
A new branch can be created in your local git and later "pushed" to your remote GitHub account for others to access and see.   
`git branch <branchname>`

#### Access a Different Branch
Allows you to move out of the current branch and into another branch.   
`git checkout <branchname>`

#### Delete a Branch
Git Branches can be deleted using the following command.   
`git branch -d <branchname>`
