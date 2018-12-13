/* jshint esversion:6 */

// a service worker form scratch! it caches the files -->
var cacheName = 'hello-world-page';
var filesToCache = [
    '/',
    '/index.html',
    '/hello-world.css'
];

// EVENT LISTENER FOR 'INSTALL'
//-------------------------------------------------
// when event listener gets to 'install',
// run function that takes (e) and waits until
// the program opens cacheName, then runs the
// function that takes (cache) as and input and
// add all files from filesToCache into cache
// while logging that the service worker is caching
// the app shell
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

// EVENT LISTENER FOR 'ACTIVATE'
//--------------------------------------------------
// when the event listener gets an 'activate',
// it maps the event (as an input var) to waitUntil
// the clients of the event claim the event (?)
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// EVENT LISTENER FOR 'FETCH'
//--------------------------------------------------
// when the event listener gets a 'fetch',
// it maps the event (as an input var) to respondWith
// caches that match the event's request, then returns
// either the response if it is truthy, or else
// return the request (?)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then( response => {
            return response || fetch(event.request);
        })
    );
});