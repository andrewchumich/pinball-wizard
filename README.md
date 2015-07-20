Pinball Wizard
--------------

# Setup
npm - follow instructions here: http://blog.teamtreehouse.com/install-node-js-npm-windows

git (duh) - https://msysgit.github.io/ 
If on windows, use the git bash program.
At work we use [SourceTree](https://www.sourcetreeapp.com/) for git. It's free and it usually makes things easier

Open git bash and navigate to directory

Clone the repo: `git clone https://github.com/andrewchumich/pinball-wizard.git`

`cd` into directory: `cd pinball-wizard`

Install dependencies: `npm install`
This should recursively install everything listed in `package.json` dependencies

Start webpack: `webpack -w`
The `-w` flag makes it watch the current directory and re-run the program when any relevant files change

Open up `public/index.html` in your web browser 
In sublime you can usually right click on the page while the file is open to "Open in Browser".
Or just drag the file from File Explorer into the browser.

Before making any changes to the code, make sure you start a new branch so it is super easy to discard anything you are playing around with, but dont necessarily want to keep. 
`git checkout -b new_branch`

**But why male models?**
