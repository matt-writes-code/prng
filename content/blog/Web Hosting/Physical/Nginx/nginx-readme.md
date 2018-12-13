# NGINX
- a webserver technology (like Apache)

## TODO:
- setup and deploy a server
- [nginx architecture](http://www.aosabook.org/en/nginx.html)

## what is Nginx?
- pronounced 'engine x'
- a web server and [reverse-proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server/) responsible for serving:
	- static content (css/js/images)
	- gzip compression
	- ssl
	- proxy buffers
	- other HTTP stuff

- in relation to Gunicorn:
	- Gunicorn sits in between Nginx and your actual python web-app code to serve dynamic content (process stuff in python to make html output, then send through web server back to user(client))

## Apache vs Nginx
- https://code.tutsplus.com/tutorials/apache-vs-nginx-pros-cons-for-wordpress--cms-28540
- https://poweruphosting.com/blog/apache-vs-nginx/
- https://www.nginx.com/blog/nginx-vs-apache-our-view/

###### Apache
	Apache calls a whole CPU thread to handle one task for every user. 1000 users = 1000 processes.
- 1 page web request = 1 process_thread (of the CPU)
- a *forked threaded* solution, or *keep-alive*, where one connection is opened for one user.

###### Nginx
	Nginx takes all users and sorts tasks(requests) internally in its Nginx 'factory'. 1000 users = one Nginx thread, processing 1000 requests.
- event driven
- a *non-blocking event loop*, which puts all connections somewhere and then has worker processes to handle responses.
