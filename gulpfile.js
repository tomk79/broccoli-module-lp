var gulp = require('gulp');
var plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
var concat  = require('gulp-concat');
var browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換
var _tasks = [
	'carousel'
];

// src 中の *.js を処理
gulp.task('carousel', function(){
	gulp.src(["./src_gulp/interactives/carousel/module.js", "./node_modules/tiny-slider/dist/min/tiny-slider.js"])
		.pipe(plumber())
		.pipe(concat('module.js'))
		.pipe(gulp.dest( './modules/interactives/carousel/' ))
	;
	gulp.src(["./src_gulp/interactives/carousel/module.css.scss","./node_modules/tiny-slider/dist/tiny-slider.css"])
		.pipe(plumber())
		.pipe(concat('module.css.scss'))
		.pipe(gulp.dest( './modules/interactives/carousel/' ))
	;
});

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
