/**
 * Created by malte on 14.10.14.
 */
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            clean: {
                folder: 'dist/',
                folder1: 'compiled/'
            },
            jasmine: {
                tests: {
                    src: 'compiled/src/**/*.js',
                    options: {
                        specs: 'compiled/specs/*Spec.js',
                        helpers: 'compiled/specs/*Helper.js',
                        vendor: ['www/lib/angular/angular.min.js', 'www/lib/angular-mocks/angular-mocks.js']
                    }
                }
            },
            'string-replace': {
                inline: {
                    files: {
                        'dist/': 'dist/angular-typescript.d.ts'
                    },
                    options: {
                        replacements: [
                            // place files inline example
                            {
                                pattern: '../typings/angularjs/angular.d.ts',
                                replacement: '../../../../typings/angularjs/angular.d.ts" '
                            }
                        ]
                    }
                }
            },
            ts: {
                // A specific target
                build: {
                    // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
                    src: ["src/**/*.ts"],
                    reference: "dist/angular-typescript.ts",
                    // If specified, generate an out.js file which is the merged js file
                    out: 'dist/angular-typescript.js',
                    options :{
                        declaration: true
                    }
                },
                build_separate: {
                    src: ["src/**/*.ts"],
                    outDir: 'compiled/src/'
                },
                tests: {
                    src: ["specs/**/*.ts"],
                    outDir: 'compiled/'
                }
            },
            uglify: {
                my_target: {
                    options: {
                        sourceMap: true
                    },
                    files: {
                        'dist/angular-typescript.min.js': ['dist/angular-typescript.js']
                    }
                }
            }
        }
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['clean', 'ts:build' ]
    );

    grunt.registerTask(
        'test',
        'Compiles each file and run tests',
        ['clean:folder1', 'ts:tests', 'jasmine:tests']
    )

    grunt.registerTask(
        'release',
        'Test, Build and Compress Files',
        ['test', 'build', 'string-replace:inline','uglify']
    );
};