module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './a.html',
          dest: 'dist/a.html'
        }
      },
      cssmin: {  
        'dist/a.css': 'a.css'
      },
      uglify: {
        release:{
          files: {
            'dist/a.js': 'a.js'
          }
        }       
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['uglify','cssmin','htmlmin']); 
  };