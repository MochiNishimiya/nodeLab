username=mochi
name=node-web-app

sudo docker stop `sudo docker ps -aqf "name=Mochizou"`
sudo docker container rm -f `sudo docker ps -aqf "name=Mochizou"`
sudo docker rmi -f `sudo docker images -q $username/$name`
sudo docker build . -t $username/$name
sudo docker run --name Mochizou -p 12345:8080 -d $username/$name
