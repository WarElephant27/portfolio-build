// compile sass https://github.com/dlmanning/gulp-sass
// render nunjucks partials https://www.npmjs.com/package/gulp-nunjucks-html
// watch for js changes
// watch
// live refresh https://www.npmjs.com/package/gulp-refresh
// jshint https://www.npmjs.com/package/gulp-jshint
// optimize images https://www.npmjs.com/package/gulp-smushit
//
// tutorials http://zetcode.com/gulp/sass/

const 
	sass = require('gulp-sass'),
	nunjucks = require('gulp-nunjucks-html');

function sass() {
	// compile sass with gulp-scss
}

function nunjucks() {
	// render nunjucks with gulp-nunjucks-html
}

function defaultTask(gulp) {
  // place code for your default task here
  gulp();
}

exports.default = defaultTask