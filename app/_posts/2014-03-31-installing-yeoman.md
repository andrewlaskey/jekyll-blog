---
layout: post
title:  "Installing Yeoman"
date:   2014-03-31 15:05:00
categories: blog
excerpt: "Installing Yeoman should be easy, but sometimes it isn't. I took some notes on what I had to do to get it running on my machine for those who might also be having issues."
---

Getting [Yeoman](http://yeoman.io/) up and running was surprisingly more difficult than I think it should have been. It should be as easy as running a couple of commands in the Terminal, but depending on how you may have things set up on your system that doesn't seem to work out as smoothly as it should sometimes. Also when trying to find answers on why this or that isn't working, very few blogs or Stack Overflow answers give solid explanations of what is going on.

So when I was finally able to get it running, I took down some quick notes on all the steps I went though. This isn't a very comprehensive tutorial, but maybe these notes might help shed a bit of light for someone dealing with a similar Yeoman struggle.

#### Make sure you update node and npm(Node Packet Manager)

The easiest way to do it is by downloading the package from [nodejs.org](http://nodejs.org/). Trying to update npm with `npm update -g or curl https://npmjs.org/install.sh | sh` was never successful or without some other issue. If you do use the curl method, and you have to run it with sudo make sure you sudo the sh as well. 

```
sudo curl https://npmjs.org/install.sh | sudo sh.
```

In the end it is just download the package and run the installer.

#### Yeoman

Download and install yeoman with `npm install -g yo`.

Watch the process and make sure it downloads everything and you don't get 500 errors. If you do wait until later and try again.

Next, if it downloads completely, test it with `yo -v to` get the version number. The terminal may say `yo: command not found`. This means the terminal doesnt know where yo is to run it. You have to fix this by modifying a variable called `$PATH`. 

Go to your user folder and look for a **.bash_profile** file. Make sure you have [show hidden files turned on](http://www.mikesel.info/show-hidden-files-mac-os-x-10-7-lion/). If you don't have one, open up Sublime or whatever text editor you use and make one. The .bash_profile file is basically a file for custom settings for your user on your computer.

Add `export PATH=${PATH}:[Path to npm/bin/]` in the file and save it.

What's going on here?

Scroll up in the terminal and look at the download log for Yeoman. At the end it should tell you where the it was downloaded to. In finder you can go to that folder and see it there and that's where we want the terminal to look when we run a "yo" command.

"Export PATH" is modifying this path. Run `echo $PATH` in terminal to see what the `$PATH` variable looks like. It should be something like *"/usr/bin:/usr/sbin:usr/local/bin"*. The colon is separating different paths like commas in an array. This means then that in our .bash_profile file we are exporting the default `$PATH` and with another comma we append the location of our other node packages.

Finally save the .bash_profile file, if you haven't already. Close your current terminal window or open a new one, because your current terminal window won't recognize the changes you've made to .bash_profile.

In the new terminal run `yo -v`. If you've added the correct path to PATH it should all work.

Have fun with Yeoman.