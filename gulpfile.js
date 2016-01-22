// Gulp Modules
var gulp = require('gulp'),
    //iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('path'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
sass = require('gulp-sass');
    //sourcemaps = require('gulp-sourcemaps'),
    //favicons = require('gulp-favicons');

var environment = 'typo3';

var config;

switch (environment) {
    case 'typo3':
        config = [
            sourcePath = 'Resources/Private/Src/',
            destinationPath = 'Resources/Public/'
        ];
        break;
}

var jsFilesApp = [

    // Own stuff
    sourcePath + 'js/**/*.js'
];

var defaultTasks = [
    'styles',
    'scripts',
    'watch'
];

gulp.task('default', defaultTasks);
gulp.task('watch', watchTask);
gulp.task('styles', stylesTask);
gulp.task('scripts', scriptsTask);

function watchTask() {
    gulp.watch(sourcePath + 'scss/**/*.scss', ['styles']);
    gulp.watch(jsFilesApp, ['scripts']);
}

function stylesTask() {
    var compileStyles = function (baseName) {
        gulp.src([sourcePath + 'scss/' + baseName + '.scss'])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'css'))
    };

    compileStyles('app');
}

function scriptsTask() {
    var compileScripts = function (files, targetFile) {
        gulp.src(files)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(concat(targetFile + '.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'js'));
    };

    compileScripts(jsFilesApp, 'app');
}