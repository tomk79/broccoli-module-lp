let gulp = require('gulp');
let plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
let concat  = require('gulp-concat');
let browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換

// src 中の *.js を処理
gulp.task('carousel:js', function(){
	return gulp.src(["./src_gulp/fields/cssMarginPadding/frontend.js"])
		.pipe(plumber())
		.pipe(browserify({}))
		.pipe(concat('frontend.js'))
		.pipe(gulp.dest( './fields/cssMarginPadding/frontend/' ))
	;
});
gulp.task('carousel:css', function(){
	return gulp.src(["./src_gulp/fields/cssMarginPadding/frontend.css"])
		.pipe(plumber())
		.pipe(concat('frontend.css'))
		.pipe(gulp.dest( './fields/cssMarginPadding/frontend/' ))
	;
});



let _tasks = gulp.parallel(
	'carousel:js',
	'carousel:css'
);

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	return gulp.watch(["src_gulp/**/*"], _tasks);
});

// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
