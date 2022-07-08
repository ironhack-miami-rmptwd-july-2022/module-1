<!-- usual git commit process to store your code to github (only commits files which have been saved) -->

git add .
git commit -m "put your comment here"
git push origin master

<!-- this is your normal commands for after you set up a github repo -->

git init (this is to initialize your folder with a .git file)
touch README.md (this is optional)
git commit -m "first commit"
git remote add origin https://github.com/<your github name>/<your github repo name>.git (you have to set your remote location prior to pushing your code commits)
git push -u origin master (the -u is option, it is used for upstream)

<!-- to check your remote repo's you can use the command -->

git remote -v
