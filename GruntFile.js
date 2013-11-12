module.exports =function(grunt){
     //Configure your tasks
     grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),//load properties from the package as a JSON object
      watch: {
        options:{
          livereload: true
        },
        js: {
          files:   ['site/scripts/*.coffee'],
          tasks:   ['coffee']
        },
        css:{
          files:   ['site/styles/*.styl'],
          tasks:   ['stylus']
        },
        html:{
          files:   ['site/*.jade','site/partials/*.jade'],
          tasks:   ['jade']
        },
        img:{
          files: ['site/images/*'],
          tasks: ['imagemin']
        }       
      },
      coffee:{
        compile: {
            files: {
              'build/js/scripts.js': ['site/scripts/*.coffee'] // compile and concat into single file
            }
          }        
      },
      uglify: {
        my_target: {
          files: {
            'build/js/scripts.min.js': ['build/js/scripts.js']
          }
        }
      },       
      stylus:{        
        compile: {
          options:{
            import:['nib']
          },          
          files: {
            'build/css/styles.css': ['site/styles/all.styl'] // compile and concat into single file
          }
        }

      },
      jade:{
        compile:{
          options: {pretty:false},
          files:[{
            expand: true,
            cwd:    'site/',
            src:    "*.jade",
            ext:    ".html",
            dest:   "build/"
          }]
        }
      },
      copy: {
        main: {
          files:[
          {
            expand: true,
            cwd: 'site/',
            src: 'php/*',
            dest: 'build/'
          }]
        },
      },      
      concat: {
        options:{
          stripBanners:true
        },
        dist:{
          src:['site/vendor/jquery.1.9.js','site/vendor/jquery.migrate.js','site/vendor/jquery.history.js','site/vendor/fancybox.pack.js','site/vendor/placeholder.js','site/vendor/parsley.js'],
          dest: 'build/js/vendor.js'
        }
      }
     });
     
     //Register (load) the plugins to make them available in Grunt
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-coffee');
     grunt.loadNpmTasks('grunt-contrib-stylus');
     grunt.loadNpmTasks('grunt-contrib-jade');
     grunt.loadNpmTasks('grunt-contrib-imagemin');
     grunt.loadNpmTasks('grunt-contrib-uglify'); 
     grunt.loadNpmTasks('grunt-contrib-copy'); 
     grunt.loadNpmTasks('grunt-contrib-concat');          

     //Run the task
     grunt.registerTask('default', ['watch','coffee', 'uglify','stylus', 'jade','copy']);
     grunt.registerTask('build', ['coffee', 'uglify', 'stylus', 'jade','copy','concat']);
};
