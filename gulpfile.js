var gulp = require('gulp');
var plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
var concat  = require('gulp-concat');
var browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換
var _tasks = [
	'carousel'
];

// src 中の *.js を処理
gulp.task('carousel', function(){
	gulp.src(["./src_gulp/fields/cssMargin/frontend.js"])
		.pipe(plumber())
		.pipe(browserify({}))
		.pipe(concat('frontend.js'))
		.pipe(gulp.dest( './fields/cssMargin/frontend/' ))
	;
	gulp.src(["./src_gulp/fields/cssPadding/frontend.js"])
		.pipe(plumber())
		.pipe(browserify({}))
		.pipe(concat('frontend.js'))
		.pipe(gulp.dest( './fields/cssPadding/frontend/' ))
	;
});

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
