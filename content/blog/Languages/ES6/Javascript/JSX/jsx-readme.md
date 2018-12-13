# JSX
||| Ref

## what is JSX?
- Javascript **precompiler** that React uses in its code to make adding dynamic content to html easier.

## ALL THE GOTCHAS
- [link](https://shripadk.github.io/react/docs/jsx-gotchas.html)

## how to comment in JSX
- http://wesbos.com/react-jsx-comments/

## things allowed and disallowed in JSX
- html things allowed
- javascript injection
	```Javascript
	var myOtherName = "Cavill";  // normal JS
	var myName = (<p>henry {name2}</p>);  //JSX (write html inside brackets, and also inject JS back in between html)
	```
- class (NO) classNames (YES)
	`<h1 class="btn">hey</h1>` NO `<h1 className="btn">hey</h1>` YES
- self-enclosing tags without slashes (USE closing slash `<img />` and not `<img>`)
- event listeners 
	```Javascript
	var fancyFunction(){
		console.log("something something millenium hand and shrimp")
	};
	const kitty = (<img onClick={fancyFunction} src="#" alt="kitty" />)
	```
- if statements (NO), but [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) (YES)
- `&&` operators, used often in React. ternary operators also used often in React. called [short circuit operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) `{ condition && <p>show-this-jsx-thing</p>}`
`false && (anything) is short-circuit evaluated to false.
true || (anything) is short-circuit evaluated to true.`
- .map is also often used
	- map() is the same as in mapreduce (meaning: do things to everything in the list)

	const strings = ['Home', 'Shop', 'About Me'];
	const listItems = strings.map(string => <li>{string}</li>);
	const jsx_var = <ul>{listItems}</ul>  
	// the above will return an array! because map returns an array.
	will return
	<ul>
		<li>listItem 1</li>
		<li>listItem 2</li>
		<li>listItem 3</li>
	</ul>
- JSX attribute: `key` as in `<li key="li-01">Example</li>`, sorta like id="" in html

	Not all lists need to have keys. A list needs keys if either of the following are true:

	1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.

	2. A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
- python enumerate-like:
```Javascript
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
	<li key={"person_" + i}>{person}</li>
);
```


## because i want to use ReactJs

> React uses JSX (javascript precompiler) which looks like html

- JSX can be treated as a expressions, and passed around in variables
- JSX can be treated as basically html inside javascript
- so any fancy `<p class"thingy" style="thingy-black">thing</p>` will work
- look like this ->  var myVariable = `<p>JSX here</p>`
- it multiline JSX (html), wrap them in brackets ( multiline JSX )
- BUT multiline JSX must be single outer element, and not multiple elements
- cannot do:
`var myVar = (
	<p>thing1</p>
	<p>thing2</p>
	);`
- ReactDOM.render() **only updates things that have changed**. so if you resend the exact same thing in code, it won't be rerendered, saving time.
- JSX gotchas:
	- classes are classNames
		`<h1 class="btn"></h1>  ->  <h1 className="btn"></h1>`
	- self-closing tags must have slashes at the back
		`<img> and <input> MUST BE <img /> and <input />`
- Js in JSX in Js (Javascript code within JSX rendered from within the Javascript app)
	- { 2 + 3 }  // curly braces. like jinja2 template.
- when injecting Javascript, the code exists in the same environment as the javascript file environment, so `var name = 'hey'` can be used in JSX as `var jsx = (<h1>{name}</h1>h1>);`

Cool stuff : attribute assignment
```Javascript
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);
```

- JSX elements can have **event listeners**, just like HTML elements. Programming in React means constantly working with event listeners.
	- `<img onClick={myFunction} />`
	- [full list](https://reactjs.org/docs/events.html#supported-events)
	- event listeners' attribute values should be functions.

- JSX != if statements
- if statements don't work inside JSX, so do if looping in Javascript


