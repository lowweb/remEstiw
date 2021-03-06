const gulp= require('gulp'),
	  concat= require('gulp-concat'),
	  sass = require('gulp-sass'),
	  rigger = require('gulp-rigger'),
	  watch = require('gulp-watch'),
	  imagemin = require('gulp-imagemin'),
   	  pngquant = require('imagemin-pngquant'),
      rimraf = require('rimraf'),
      flatten = require('gulp-flatten'),
      sourcemaps = require('gulp-sourcemaps'),
      // runSequence = require('run-sequence'),
      autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require("browser-sync"),
	  reload = browserSync.reload;

runSequence = require('run-sequence').use(gulp);

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/html/*.html',
        htmlInWork: 'src/html/inwork/*.html', 
        jsGlobal: 'src/js/app.js',
        js: 'src/blocks/**/*.js',
        style: 'src/blocks/**/*.scss',
        img: 'src/**/img/*.*', 
        fonts: 'src/fonts/**/*.*'
    },
    watch: { 
        html: 'src/html/**/*.html',
        htmlInWork: 'src/html/inwork/**/*.html', 
        js: 'src/blocks/**/*.js',
        style: 'src/blocks/**/*.scss',
        img: 'src/**/img/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};	  

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)); 
         // .pipe(reload({stream: true})); 
});



gulp.task('style:build', () => {
	gulp.src(path.src.style)
    .pipe(sourcemaps.init()) //То же самое что и с js
		.pipe(concat('style.scss'))
		.pipe(sass().on('error', sass.logError))
		// {
		// 	outputStyle: 'compressed'
		// }
		// ))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            grid: true
        }))
        .pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});


gulp.task ('js:cnct',function () {
     // gulp.src('src/js/stickyfill.min.js')
     //     .pipe(gulp.dest(path.build.js));

	return gulp.src(path.src.js)
		.pipe(concat('blocks.js'))
		.pipe(gulp.dest('src/js/'));
}); 

gulp.task('js:rigger', ['js:cnct'], function () {

  return    gulp.src(path.src.jsGlobal)
        .pipe(rigger()) 
        // .pipe(sourcemaps.init()) 
        // .pipe(uglify()) 
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js)); 
        // .pipe(reload({stream: true}));       
});

gulp.task ('js:justCopy',function () {
    return gulp.src('src/js/justCopy/*.js')
        .pipe(gulp.dest(path.build.js));
}); 


 gulp.task('js:build', ['js:cnct', 'js:rigger','js:justCopy']);



gulp.task('image:build', function () {
   return gulp.src(path.src.img) 
        // .pipe(imagemin({ 
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {cleanupIDs: false},
                    {removeUselessDefs: false},
                    {removeViewBox: true},
                ],        
                use: [pngquant()],
                interlaced: true
            })
        ]))
        .pipe(flatten())
        .pipe(gulp.dest(path.build.img));
        // .pipe(reload({stream: true}));
});

// Fonts
gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
            .pipe(gulp.dest(path.build.fonts));
});


// сервер и сброка всех частей
var config = {
    server: {
        baseDir: "./build"
    },
    // tunnel: true,
    host: 'localhost',
    port: 8080,
    // logPrefix: "Frontend_Devil"
    notify: false
};



gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('build', [
    'html:build',
    // 'js:cnct',
    'js:build',
    'style:build',
    'image:build',
    'fonts:build'
]);

// gulp.task ('html:refresh', ['html:build'] , function () {
//     browserSync.reload();
// });

gulp.task ('htmlTempl:copy', function () {
    gulp.src(['src/html/templates/**/*'])
        .pipe(gulp.dest('src/html/inwork/templates')); 
});

gulp.task('watch', function(){

    // gulp.watch ([path.watch.html] , function (file) {
    //     gulp.src(file.path)
    //     .pipe(rigger())
    //     .pipe(gulp.dest(path.build.html)) 
    //     .pipe(reload({stream: true}));
    // });

    watch([path.watch.htmlInWork], ['htmlTempl:copy'], function(event, cb) {
        // gulp.start('html:refresh');
        gulp.src(path.src.htmlInWork)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true}));
    });

    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });

    watch([path.watch.js], function(event, cb) {
        // gulp.start('js:cnct');
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('default', ['build', 'webserver', 'watch']);
