const puppeteer = require("puppeteer");


// one async worker
// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto('https://developers.google.com/web/tools/puppeteer');
// 	await page.screenshot({path: 'pup-pup.png'});

// 	await browser.close();
// })();


// async function that can run on as many threads as possible
async function screenshotter(link_in) {
	const screenshot_name = link_in.split('/').slice(-1)[0];
	console.log(screenshot_name);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(link_in);
	await page.screenshot({path: `${screenshot_name}.png`});

	await browser.close();
}

screenshotter('https://developers.google.com/web/tools/puppeteer');
screenshotter('https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation');
screenshotter('https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array');
screenshotter('https://alligator.io/tooling/puppeteer');
screenshotter('https://medium.com/jsguru/javascript-async-await-742ddf66c348');


