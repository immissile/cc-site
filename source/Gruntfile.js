(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      coffee: {
        options: {
          sourceMap: false,
          sourceMapDir: "public/maps/js/"
        },
        compile: {
          expand: true,
          cwd: "public/coffee",
          src: ["**/*.coffee", "!**/debug-*.coffee"],
          dest: "public/javascripts/",
          ext: ".js"
        }
      },
      watch: {
        files: ["public/coffee/**/*.coffee"],
        tasks: ["coffee"]
      }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    return grunt.registerTask("default", "build");
  };

}).call(this);
