const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp.src("./assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./assets/images"));
}
    
gulp.task('imgSquash', imgSquash);

module.exports = imgSquash;