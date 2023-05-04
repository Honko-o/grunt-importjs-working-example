// WARNING!!!!!
// Order Matters In Every Plugin That's Why no ** or * Blop Pattern Used

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        import_js: {
            files: {
                expand: true,
                cwd: 'grunt/js/',
                src: ['**/*.js'],
                dest: 'assets/',
                ext: '.js',
            },
        },
    });
    grunt.loadNpmTasks('grunt-import-js');
    // Default task(s).
    grunt.registerTask('all', ['import_js']);
    grunt.registerTask('default', ['all']);
};
