module.exports = function(grunt) {
    var caminho_node = 'node_modules/';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
    concat: {
        options: {
            separator: ';',
        },
        dist: {
            src: [
                caminho_node + 'angular/angular.min.js',
                caminho_node + 'angular-material/angular-material.min.js',
                caminho_node + 'angular-animate/angular-animate.min.js',
                caminho_node + 'angular-aria/angular-aria.min.js',
                caminho_node + 'angular-messages/angular-messages.min.js',
                caminho_node + 'angular-route/angular-route.min.js',
                caminho_node + 'angular-sanitize/angular-sanitize.min.js'
            ],
        dest: 'minified/jsmin/angulararchives.min.js',
        },
    },
      
    uglify: {
      myjsugly: {
        src: 'angularjs/js/**/*.js', //lugar onde vai ser feito o ulyfy -> junta tudo
        dest: 'minified/jsmin/myangulararchives.min.js' //lugar onde vai ser salvo o arquivo.min.js
      }
    },
      
    cssmin: {
        options: { //só coloca
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        targetcss: {
            files: [{
                expand: true,
                cwd: 'angularjs/css/', //lugar onde estão os css
                src: ['*.css'], //nome dos arquivos
                dest: 'minified/cssmin', //lugar onde vai ser salvo
                ext: '.min.css' //extensão que vai ser salvo
            }]
        },
        combine: {
            files: {
                'minified/cssmin/all/myangularcss.min.css': ['minified/cssmin/*.css', 'minified/cssmin/*.min.css'] //onde e com que nome vai salvar : arquivos que irão se juntar
            }
        }
    },
      

    /*copy: {
        main: {
            expand: true,
            src: [
                caminho_node + 'bootstrap/dist/css/bootstrap.min.css',
                caminho_node + 'angular-material/angular-material.min.css'
                 ],
            filter:'isFile',
            dest: 'minified/cssmin/all/',
        },

    },*/
      
    watch:{
        myjavafiles:{
            files: ['angularjs/js/**/*.js'], //pasta .extensão onde vai ficar observando
            tasks: ['uglify'], //task que vai ser executada quando algum arquivo mudar
            options: { //só coloca
            spawn: false,
            },
        },
        mycssfiles:{
            files: ['angularjs/css/**/*.css'],
            tasks: ['cssmin'],
            options: {
                spawn: false,
            },
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin','concat','watch']);

};