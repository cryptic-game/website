# Cryptic - Website

## Welcome

This is the open-source source code to the official website of cryptic-game.

We develop an open source hacking browser game. This started as a community project of the Youtuber https://www.youtube.com/user/TheMorpheus407. You can already test a first pre-release of the game at https://play.cryptic-game.net/login. Feel free to explore our other repositories at https://github.com/cryptic-game.
___

## For Developers

To help us create this project, you can clone the repository with:

`git clone https://github.com/cryptic-game/website.git`

You can easily host the website yourself with docker.

just `cd website/` and run

`$ docker build -t cryptic-website:latest .`

with the created nginx based docker image 
you can now run a docker container
you should map port 80 for nginx:

`$ docker run -d -p 80:80 website:latest`

___




##LICENSE :scroll:

[GNU AGPL v3.0](LICENSE)

___




