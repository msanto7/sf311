





module.exports = function(grunt) {


grunt.initConfig({
  auto_install: {
    local: {},
    subdir: {
      options: {
        cwd: 'subdir',
        stdout: true,
        stderr: true,
        failOnError: true,
        npm: '--production'
      }
    }
  },
});



//load plugins
grunt.loadNpmTasks('grunt-auto-install');

};