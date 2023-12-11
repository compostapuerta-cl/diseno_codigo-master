const {src, dest, parallel} = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');
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
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.optimizacion = parallel(imagenes,versionWebp, versionAvif);