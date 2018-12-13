# internal javascript method

### serving with html
- by opening `index.html`

0. create your html file and save it (e.g. `index.html`)
1. write your js code in a file (e.g. `client.js`)
2. `index.html` points to `client.js`

### internal synchronous
> 1x html file

> html file runs with javascript inside within the `<script></script>` tags

- inline javascript
- single request (to the server)
- libraries can be run from `npm` using `unpkg` (i think the package needs to have a js file particularly for this usage because npm seems to just load that file from npm into inline)
- *use `<script>//javascript here</script>` inside your html and type javascript stuff in there
- *has no `require("someLibrary");` when you do inline js