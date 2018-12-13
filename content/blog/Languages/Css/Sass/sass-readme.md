# SASS / SCSS
||| pretty much done

> SASS: We have extended css to make it DRY

> Bitters: We have a clear folder structure for you

	Quote:

	After some time of getting used to it, you'll appreciate Bitters more and more: its default structure suggests a place for almost everything. Especially when working in a team, it's great to simply know where things are defined - instead of having to search and wonder.

## cheat sheets
- [with selectors and pseudo classes](https://learn-the-web.algonquindesign.ca/topics/css-selectors-units-cheat-sheet/)
- [animations](https://learn-the-web.algonquindesign.ca/topics/css-animations-effects-cheat-sheet/)
- https://www.rankred.com/css-cheat-sheets/

## DONE
- [bourbon + neat + bitters](https://github.com/panzerstadt/tut-sass-bourbon-neat-bitters.git)
- [react + Sass menu](https://codepen.io/panzerstadt/pen/rdONWV?editors=0010)
- dropdown menu in (../code/) [: tutorial](https://medialoot.com/blog/how-to-create-a-responsive-navigation-menu-using-only-css/)

## TODO: css animations and pseudo-classes!
- [media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [deconstruct some animations](http://freefrontend.com/css-menu/)
- [css selectors](https://medium.com/the-web-crunch-publication/advanced-css-selectors-you-never-knew-about-972d8275d079)

## media queries for responsive design
- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

## some funky css stuff
- https://techbrij.com/css-selector-adjacent-child-sibling

## speed ups - achieving 60fps animations
- [only css](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)
- [css + js](https://medium.com/outsystems-experts/flip-your-60-fps-animations-flip-em-good-372281598865)

## architecture of CSS (for large scale maintainability)
- https://sass-guidelin.es/#architecture
- https://smacss.com
- using a scaffold like Bitters

## mixins ref
- https://www.git-tower.com/learn/bourbon-neat-bitters/in-practice/neat-mixins#start

## pseudo classes
- [pseudo classes](https://css-tricks.com/pseudo-class-selectors/) [source2](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/) [source3](https://htmldog.com/guides/css/intermediate/pseudoclasses/)
- [medium article](https://medium.com/the-web-crunch-publication/advanced-css-selectors-you-never-knew-about-972d8275d079)

## SASS Neat 2.0
- https://robots.thoughtbot.com/the-release-of-neat-2-0-a-lightweight-and-flexible-sass-grid

## tutorials!
- https://medium.com/@thejasonfile/getting-started-with-sass-dedb271bdf5a
- https://tutorialzine.com/2016/01/learn-sass-in-15-minutes
- https://scotch.io/tutorials/getting-started-with-sass
- https://sass-lang.com/guide

## watch a scss file (autocompile into css)
> sass --watch input_file.scss:output_file.css

### variables
- store colors, font stacks, or any css value you think you want to reuse
- use $ to turn it into a variable

```css
$font-stack: Helvetica, sans-serif;

$primary-color: #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}
```

### shorthand in css
- https://www.webcredible.com/blog/css-shorthand-properties/

## sass has FUNCTIONS
- http://sass-lang.com/documentation/Sass/Script/Functions.html

### how to perform vertical centering
- [decision tree on which ones to use](https://css-tricks.com/centering-css-complete-guide/)

### other tips and tricks (css)
- [vignettes](http://nimbupani.com/vignettes-with-css3-box-shadows.html)

## bourbon neat and bitters (library, library, scaffold/project template)

![bourbon01](./images/bourbon-01.jpg)

![bourbon02](./images/bourbon-02.jpg)