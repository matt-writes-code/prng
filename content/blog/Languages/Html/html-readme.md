# HTML
||| reference

## notes
- for purposes of responsive web design [source](https://stackoverflow.com/questions/23185067/where-to-load-scripts-or-css-from-cdn-head-or-body):

## for faster loading
#### use CDNs whenever possible
- use unpkg for loading ANYTHING from npm

#### always put CSS in head
#### put javascript `<script></script>` either at the bottom of the body or above with css


## js in head
- pros
	- guarantees they will be available before content shows
- cons
	- slower

## js below body
- pros
	- script executes after loading the content, so user doesn't have to wait for heavy js to load first
- cons
	- if some buttons require js, before the content is loaded the user can click on the buttons and nothing will happen (not reacting, looks like its broken)

## things above html

```Html
<!-- this is for responsive design shananigans -->
<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">

<!-- this is very important for preventing weird and wonderfully random characters from replacing your text -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- not sure what these do -->
<!--<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
 <meta name="flattr:id" content="x7nj1w"> -->
```