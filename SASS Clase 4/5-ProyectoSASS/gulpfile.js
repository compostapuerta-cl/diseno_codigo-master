//GULP NOS DA CIERTAS FUNCIONES
const { src, dest, watch,parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

//IMAGENES
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//SASS
function css(done) {
  src("src/scss/**/*.scss") //Identificar el archivo de SASS
      .pipe(plumber())
      .pipe(sass()) //Compilarlo
      .pipe(dest("build/css")) //Almacenarla en el disco duro
  done(); //es un callback que avisa a gulp cuando llegamos al final
}
function dev(done){
  watch("src/scss/**/*.scss", css); //Watch es para que siga ejecutandose
  done();
}


//OPTIMIZACION IMAGENES
function imagenes(done) {
  const opciones = {
      optimizationLevel: 3
  }
  src('src/img/**/*.{png,jpg}')
      .pipe( cache( imagemin(opciones) ) )
      .pipe( dest('build/img') )
  done();
}
function versionWebp( done ) {
  const opciones = {
      quality: 50
  };
  src('src/img/**/*.{png,jpg}')
      .pipe( webp(opciones) )
      .pipe( dest('build/img') )
  done();
}
function versionAvif( done ) {
  const opciones = {
      quality: 50
  };
  src('src/img/**/*.{png,jpg}')
      .pipe( avif(opciones) )
      .pipe( dest('build/img') )
  done();
}

exports.optimizacion = parallel(imagenes,versionWebp, versionAvif); //IMAGENES
exports.dev = dev; //SASS