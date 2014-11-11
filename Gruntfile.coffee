GruntVTEX = require 'grunt-vtex'

module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'
  
  config = GruntVTEX.generateConfig grunt, pkg

  config.cssmin =
    combine:
      files:
        'dist/style.css': ['build/pilates-lovers-css-builder/style/style.css']

  tasks =
    # Building block tasks
    build: ['clean', 'copy:main', 'less']
    min: ['cssmin'] # minifies files
    # Deploy tasks
    dist: ['build', 'min'] # Dist - minifies files
    test: []
    vtex_deploy: ['shell:cp']
    # Development tasks
    'default': ['build', 'connect', 'watch']
    devmin: ['build', 'min', 'connect:http:keepalive'] # Minifies files and serve

  # Project configuration.
  grunt.initConfig config
  grunt.loadNpmTasks name for name of pkg.devDependencies when name[0..5] is 'grunt-' and name isnt 'grunt-vtex'
  grunt.registerTask taskName, taskArray for taskName, taskArray of tasks
