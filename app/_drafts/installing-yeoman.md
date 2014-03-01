Make sure you update node and npm

The easiest way to do it is by downloading the package from nodejs.org. Trying to update npm with npm update -g or curl https://npmjs.org/install.sh | sh was never successful or without some other issue.

If you do use the curl method, and you have to run it with sudo make sure you sudo the sh as well. sudo curl https://npmjs.org/install.sh | sudo sh.

Just download the package.

Download and install yeoman with npm install -g yo

Make sure it downloads everything and you don't get 500 errors. If you do wait until later and try again.

If it downloads test it with yo -v to get the version number

The terminal may say yo: command not found

This means the terminal doesnt know where yo is to run it. You have to fix this by modifying a variable called $PATH. Go to your user folder and look for a .bash_profile file. Make sure you have show hidden files turned on. http://www.mikesel.info/show-hidden-files-mac-os-x-10-7-lion/

If you don't have one, open up Sublime or whatever text editor you use and make one.

add export PATH=${PATH}:[Path to npm/bin/]

What's going on here.

Scroll up in the terminal and look at the download log for Yeoman. At the end it should tell you where the it was downloaded to. In finder you can go to that folder and see it there. That's where we want the terminal to look when we run a yo command.

so export PATH is modifying the path. echo $PATH in terminal to see what the $PATH variable looks like. its should be something like /usr/bin:/usr/sbin:usr/local/bin. The colon is separating different paths like commas in an array.so we export the default $PATH then with another comma we append the location of our other node packages.

save the .bash_profile file. close your current terminal window or open a new one. your current terminal window won't recognize the changes you've made to .bash_profile. In the new terminal run yo -v. If you've added the correct path to PATH it should all work. have fun with Yeoman.