

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
};

    'angular-builder': {
      options: {
        mainModule: 'mainModuleName'
      },
      app: {
        src:  'src/**/*.js',
        dest: 'build/project.js'
      }
    }
 
  });



//load plugins
grunt.loadNpmTasks ('grunt-angular-builder');
grunt.loadNpmTasks('grunt-auto-install');

};  