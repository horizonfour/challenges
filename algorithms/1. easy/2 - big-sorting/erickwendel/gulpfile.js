const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
 
gulp.task('default', ['watch', 'test' ])

gulp.task('test', () =>
    gulp.src('*test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine())
);

gulp.task('watch', () => {
    return gulp.watch('*.js', ['test'])
})