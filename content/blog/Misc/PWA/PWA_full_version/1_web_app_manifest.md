# Web App Manifest

- makes the web app installable
- main point : put that icon onto the homescreen for more user engagement

## properties
name : full name, appears on splash screen

short_name : short name for use on tabs and places with short spaces

start_url : when you CLICK on the app, which page gets served first? (might not need to be the main page)

scope : which parts of this app is PWA? (you can wall of your PWA-ness to a small part of the app, or everything)

display : standalone (looks like a standalone app, no browser url bar and everything)
- options:
	- standalone (more like native apps)
	- fullscreen (like games)
	- minimal-ui (???)
	- browser

background_color : colour when the app is loading and on splashscreen

theme_color : toolbar color esp on the task switcher

description : used rarely for now (in favourites, or popups)

dir : direction, NOT directory! specifies reading direction. hmm.

lang : main language (useful for browser, maybe for translation purposes?)

orientation : preferred or enforced default orientation
- options:
	- any
	- portrait (top-btm or btm-top (180deg))
	- landscape (top-btm or btm-top (180deg))
	- portrait-primary (only right way up)

icons : a set of icons that the os will pick for best-fit size for use in homescreen or tabs or stuff

related_applications : other versions of the app you wanna provide to the user as a choice of installation (like play store app, or windows store app)
