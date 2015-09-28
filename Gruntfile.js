module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';',
				stripBanners: {
					block: true,
					line: true
				}
			},
			dist: {
				// the files to concatenate
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/bootstrap-material-design/dist/js/material.js',
					'bower_components/bootstrap-material-design/dist/js/ripples.js'
				],
				// the location of the resulting JS file
				dest: 'dist/<%= pkg.name %>.js'
			},
			css: {
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'bower_components/bootstrap-material-design/dist/css/material.min.css',
					'bower_components/bootstrap-material-design/dist/css/material-fullpalette.min.css',
					'bower_components/bootstrap-material-design/dist/css/ripples.css',
					'css/style.css'
				],
				dest: 'dist/<%= pkg.name %>.css'
			}
		},
		connect: {
			server: {
				options: {
					base: './',
					port: 3000,
					open: true
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			files: ['index.html', 'Gruntfile.js', 'css/*.css'],
			tasks: ['concat']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'connect', 'watch']);

};
