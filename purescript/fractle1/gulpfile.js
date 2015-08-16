var gulp = require("gulp");
var purescript = require("gulp-purescript");

var sources = [
    "src/**/*.purs",
    "bower_components/purescript-*/src/**/*.purs"
];

var foreign = [
    "src/**/*.js",
    "bower_components/purescript-*/src/**/*.js"
];


gulp.task("psc",function(){
    return purescript.psc({
        src : sources,
        ffi : foreign
    });
});

gulp.task("bundle", ["psc"], function(){
    return purescript.pscBundle({
        src : "output/**/*.js",
        module : "Main",
        main : "Main",
        output : "bin/main.js"
    });
});


gulp.task("dotpsci",function(){
    return purescript.psci({ src: sources, ffi: foreign }).pipe(gulp.dest("."));
});

gulp.task("default",["bundle","dotpsci"]);







