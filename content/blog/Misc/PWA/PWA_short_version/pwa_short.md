# PWAs (short version)
[tutorial](https://medium.com/dev-channel/learn-how-to-build-a-pwa-in-under-5-minutes-c860ad406ed)

## From web app to PWA app
what's a PWA? simply a web app + these features:
- service workers
	- notifications
	- push messages
	- background sync
	- communicate between other service workers and web workers
- icons (!?)
- app manifest


## 1. write your webapp
can be anything, generally a html and css and optionally some js, inline or external
push to somewhere (e.g. firebase)

## 2. add a service worker
a service worker is a js file that performs some tasks like caching, push notifications plus more (read below)

add a service worker (a js file with functions) as well as point to the service worker in the html

![service worker yay](./images/service-worker-working.png)

## 3. create an icon (!?)
[k then](https://resizeappicon.com).

outputs : `png` formats

## 4. create a manifest
- that requires icons
- a start_url
- some other settings
- interestingly, google cloud messaging (firebase cloud mesaging) asks you to add a hardcoded number into the manifest.json (that never changes across apps)

outputs : `manifest.json`, an additional line in html linking to manifest.json

## 5. Push Notifications
- add inline script into `index.html`
- make sure your chrome/other browser is set to allow notifications (or it will fail and you'll only find it in the console)

#### testing your push notifications
follow this: [link](https://medium.com/dev-channel/learn-how-to-build-a-pwa-in-under-5-minutes-c860ad406ed/#a4ac)

- YOUR_SERVER_KEY is the app name
- DEVICE_REGISTRATION_TOKEN gets updated across different deploys. looks like this: `e1mQe_MP5ew:APA91bHOII8ct9OU_VPbXBeBtkdiMa9gOWpXV5K89DPCNWlfleE_a_j9VE7rxVVielq9s-yhzJEA5MpiSfOHTOH4rIZCUUl_cjnUaYhlB2Sh5Jth2haf8BjsrkQ4giw05frpM2dbVHLK`

outputs : additions to `index.html`

- \*right now all it does is tell you that the message has been successfully sent, but I don't receive it so i dunno

#### the current deploy (20180405) will react to this curl from terminal
- Authorization key uses my test app from firebase
- to: specifies the app that the message is being pushed to, in this case the PWA app id.

```
curl -X POST -H "Authorization: key=AIzaSyAkRH6MMhLRNpK8JUEc6eR-Y3vzL_aV4L0" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Hello World PWA",
    "body": "Hi",
  },
  "to": "dXayu72QAlo:APA91bGgh7Kzrol91H8cvdKCDzM9LuRSlgC8kXjxJaZ71ksoVNt7HT3Rc1pu3jn3zzxl0zXzYq82A9dM8GrWbJYdYknmOTBZgbIZLGvEfmEAf5RuPv5-NzNPFW75ADoO2l3TzAmDe8fX"
}' "https://fcm.googleapis.com/fcm/send"

```


## what are service workers?
a [service worker](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker) is a programmable network proxy that sits in between the page (user) and the server, allowing you to control how network requests from your page are handled.

because it can do injections through 'man-in-the-middle' attacks, which is a BAD THING service workers only run over **HTTPS**.

the service worker becomes idle when not in use and restarts when needed. so a global state DOES NOT persist between events. to store info that persists between restarts, use IndexedDB databases.

service workers make extensive use of promises.

service workers are not blocking (designed to be fully async).

service workers can receive push messages from a server when the app is not active (when it is not open, like a proper native app) (subject to different browser implementations on differnet OSes)

service workers cannot access the DOM directly. it uses the postMessage() method to send data and a 'message' event listener to receive data.

yes things
- intercepts network requests - gets in between the www and you the client, and does something to the file
- caching
- retrieving resources from cache
- delivering push messages

no things
- using synchronous XHR (XmlHttpRequests)
- using localStorage
- accessing the DOM directly
