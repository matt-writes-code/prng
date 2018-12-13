# GULP
[ref article](https://css-tricks.com/gulp-for-beginners/)

## TODO: automate something
- https://css-tricks.com/gulp-for-beginners/ (current)

## Gulp can do this
By the end of this article, you'll have a workflow that does the tasks we outlined at the beginning of this article:

1. Spins up a web server
2. Compiles Sass to CSS
3. Refreshes the browser automatically whenever you save a file
4. Optimizes all assets (CSS, JS, fonts, and images) for production
5. You'll also learn how to chain together different tasks into simple commands that are easy to understand and execute.

## HOW TO USE GULP
- flexible for any folder structure

1. global install gulp `sudo npm install gulp -g`
2. local install gulp `npm install gulp --save-dev` 
	- saved into a developer dependency, so it doesn't get thrown into distribution
	- done so that you can write gulp functions in the gulpfile.js by importing the gulp library from node_modules of the project
3. make a new .js file called `gulpfile.js`
4. below is the structure:
```Javascript
// import library
var gulp = require('gulp');

// minimal structure
// same task can be run in terminal with `gulp task-name`
gulp.task('task-name', function(){
	//stuff here
});
```
5. run the tasks in terminal in the project with `gulp task-name` to automate stuff
6. gulp tasks usually involve doing something to the files in the project
```Javascript
var gulp = require('gulp');
var aGulpPlugin = require('gulp-somePlugin');

// general structure
gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
```
7. *randomish stuff here:* if using Bitters scaffold, when running gulp make sure the files imported have '\_'underscores added to the file names otherwise gulp-sass can't find it
8. globbing == pattern matching
```
Most workflows with Gulp tend to only require 4 different globbing patterns:

*.scss: The * pattern is a wildcard that matches any pattern in the current directory. In this case, we’re matching any files ending with .scss in the root folder (project).

**/*.scss: This is a more extreme version of the * pattern that matches any file ending with .scss in the root folder and any child directories.

!not-me.scss: The ! indicates that Gulp should exclude the pattern from its matches, which is useful if you had to exclude a file from a matched pattern. In this case, not-me.scss would be excluded from the match.

*.+(scss|sass): The plus + and parentheses () allows Gulp to match multiple patterns, with different patterns separated by the pipe | character. In this case, Gulp will match any file ending with .scss or .sass in the root folder.

Since we know about globbing now, we can replace app/scss/styles.scss with a scss/**/*.scss pattern, which matches any file with a .scss extension in app/scss or a child directory.
```
9. *good thing to know (gulp-sass):* the plugin doesn't go crazy trying to make a css for *every single scss* it finds. it looks for dependencies (@imports) and only makes the relevant files.
10. like sass, gulp also provides watch
```Scss
// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
```

## extra
- BrowserSync : live reloading
- `npm install browser-sync --save-dev` in your project folder

## cheat sheet (live reloading)
```Javascript
// import library
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// make gulp tasks : minimal structure
gulp.task('hello', function(){
	//stuff here
	console.log('helloz');
});
// run by typing `gulp hello`


// make gulp tasks : general structure
gulp.task('sass-once', function(){
	return gulp.src('app/scss/**/*.scss')
	//runs sass on all .scss files in folder and subfolder
	.pipe(sass()) // use gulp-sass
	.pipe(gulp.dest('app/css'))
});
// run by typing `gulp sass`


// make gulp tasks : watch structure (like sass --watch)
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass-once'])
	// calls a sass-once once everytime changes are detected
});


// make gulp tasks : live reload structure
// 1. the task
gulp.task('sass-sync', function(){
	return gulp.src('app/scss/**/*.scss')  //do this
	.pipe(sass()) // use gulp-sass         //then do this
	.pipe(gulp.dest('app/css'))            //then do this
	.pipe(browserSync.reload({             //then do this
		stream: true
	}))
});

// 2. the browserSync
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});

// 3. watching the task
//----------follows this structure------------------
// gulp.task('mytask', ['array', 'of', 'task', 'names'], function() {
//   // Do stuff
// });
//--------------------------------------------------
// mytask = the keyword you call with gulp
// ['array', 'of', ..etc] = run this list of tasks before the actual task
// function() {} = the actual task
gulp.task('watch-sync', ['browserSync', 'sass-sync'], function(){
	// the above 'sass-sync' call is so that sass is the most updated
	// before it is watched. (run once, then watch)
	gulp.watch('app/scss/**/*.scss', ['sass-sync']);  // sass watcher
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	// other watchers
});
```


## cheat sheet (optimization)
optimization involves two prodecures:
1. minification
2. concatenation



