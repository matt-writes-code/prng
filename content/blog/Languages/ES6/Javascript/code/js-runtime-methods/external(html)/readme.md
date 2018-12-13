# external javascript method 1

### serving with html
- by opening `index.html`

0. create your html file and save it (e.g. `index.html`)
1. write your js code in a file (e.g. `client.js`)
2. preprocess that file with `browserify` (e.g. `browserify client-before -o client-after.js`)
3. `index.html` points to `client.js`

### external synchronous
> 1x html file, 1x js file

> html file runs, calling the (browserified) app.js file

- [`source code transformation — either ahead of time (webpack and browserify) or at runtime (nodular)`](https://blog.cloudboost.io/how-to-run-node-js-apps-in-the-browser-3f077f34f8a5)
- multiple requests (because its multiple files to call)
- the resultant javascript is injected into the html and run as if it is a single html file (after joining it together through multiple requests)

- *if **not using** external libraries, then just point to your `app.js` file.
- *if **using** external libraries (through node) to use `require("someLibrary")` (which is actually a node.js method), run [browserify](http://browserify.org/) on it. [source](https://stackoverflow.com/questions/41315987/how-to-use-require-function-in-js)
- [example](https://www.guru99.com/all-about-internal-external-javascript.html)

#### how?
> Browserify parses the AST for require() calls to traverse the entire dependency graph of your project.
- this is because you don't use node.js to run it, but rather you run the entire html (and js with the node-specific methods) through the web browser.
