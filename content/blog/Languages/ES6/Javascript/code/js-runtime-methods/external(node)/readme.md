# external javascript method 2

### serving with nodejs
- by running it with `node server.js`

0. create your html file and save it (e.g. `index.html`)
1. create a server that opens a port and listens (e.g. `server.js`)
2. write your js code in another file (e.g. `client.js`)
3. preprocess that file with `browserify` (e.g. `browserify client-before -o client-after.js`)
4. `server.js` points to **both** `index.html` and `client.js`
5. `index.html` points to `client.js`

### external asynchronous
> 1x html file, 2x js file

> javascript (node) starts a server through `node server.js`, which serves the html file, which calls the (browserified) client.js file

(run the .js (*something like* `node server.js` and the html is served at some port))

- running a server + source code transformation
- multiple requests (because its multiple files to call)

***server side***
- flask as server === `node app.js`
- flask/node runs the .py/.js file which generates or calls the .html file and displays it
- opens a port and listens

***client side***
- [either browerify it](https://www.techiediaries.com/how-to-bring-node-js-modules-to-the-browser/)
- [or use dnode](https://github.com/substack/dnode)
- [or put it in a shared .js file](https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser)