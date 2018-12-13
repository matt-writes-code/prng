/*jshint esversion: 6 */

// this file is written then browserify is used to turn it into
// html-runnable code

// defined functions (but not called)
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


function prepareNeuralNetwork(){
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

    return network;
}



// the 'main' function that gets called
const input = document.querySelector("input");  // points from html input tag
const example = document.querySelector("#example");  // points to output div

const network = prepareNeuralNetwork();  // python style!

input.addEventListener("change", (e) => {
    // get rgb from target hex input value into rgb var
    const rgb = getRgb(e.target.value);
    console.log(rgb);

    //const result = network.run(rgb);  // receive plain output //rgb has properties r, g, and b
    const result = brain.likely(rgb, network);  // receive one-hot output //this gives one output (from however many classes trained it on)
    console.log(result); //result is the light/dark percentage guess of the background
    
    example.style.background = e.target.value;  // change output div's background according to input
    example.style.color = result === "dark" ? "white" : "black";  // change output div's text to white/black according to NN
});
