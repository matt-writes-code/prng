/*jshint esversion: 6 */

// ----------------------------------------------
// SO NN TRAINING ETC ETC HAPPENS FIRST
// THEN HTML IS SERVED
// THEN CERTAIN THINGS ARE LISTENED TO FROM HTML
// ----------------------------------------------



// -------------------------------------------------------------
// CLIENT SIDE
// -------------------------------------------------------------


// THIS IS THE PART OF APP.JS THAT GETS RUN BEFORE SERVING 
// (the /* your code goes here */ part)
// -------------------------------------------------------------

// function converting hex to rgb from SO
function getRgb(hex) {
    console.log(hex);  //this prints input (the hex number)
    
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    console.log(hex); //this prints parsed input (dunno why its the same)

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    console.log(result);  //this prints RegExed inputs
    // conditional operator below
    // condition ? return-if-true : return-if-false
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
}

// this is run before js is served to user
// import brain.js library and instantiate new neural network
const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
    {input: {r: 0.62, g: 0.72, b: 0.88}, output: {light: 1}},
    {input: {r: 0.1 , g: 0.84, b: 0.72}, output: {light: 1}},
    {input: {r: 0.33, g: 0.24, b: 0.29}, output: {dark : 1}},
    {input: {r: 0.74, g: 0.78, b: 0.86}, output: {light: 1}},
    {input: {r: 0.31, g: 0.35, b: 0.41}, output: {dark : 1}},
    {input: {r: 0.18, g: 0.47, b: 0.67}, output: {dark : 1}},
    {input: {r: 0.18, g: 0.27, b: 1   }, output: {dark : 1}},
]);


// THIS IS THE STUFF YOU DO AFTER HTML HAS LOADED
// -------------------------------------------------------------

// when the window is fully loaded, do this function
// (targeted from html in <body onload="mainFunc()")
window.onload = function mainFunc() {
    // nn test input and output locations
    const input = document.querySelector("input");  // test input: the input colour
    const example = document.querySelector("#example");  // output: the example text

    // add a listener to the input (which is the input )
    input.addEventListener("change", (e) => {
        // get rgb from target hex input value into rgb var
        const rgb = getRgb(e.target.value);
        console.log(rgb);
        // points to the css
        //const result = network.run(rgb);  //rgb has properties r, g, and b
        const result = brain.likely(rgb, network);  //this gives one output (from however many classes trained it on)
        console.log(result); //result is the light/dark percentage guess of the background
        example.style.background = e.target.value;
        example.style.color = result === "dark" ? "white" : "black";
    });
};
