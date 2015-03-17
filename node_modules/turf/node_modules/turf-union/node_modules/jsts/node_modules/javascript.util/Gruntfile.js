module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {}
        },

        gjslint: {
            options: {
                flags: [
                    '--disable 110'
                ],
                reporter: {
                    name: 'console'
                }
            },
            all: {
                src: ['src/**/*.js']
            }
        },

        closureCompiler: {
            options: {
                compilerFile: 'lib/closure-compiler/compiler.jar',
                compilerOpts: {
                    compilation_level: 'ADVANCED',
                    externs: ['lib/closurecompiler-externs/*.js'],
                    generate_exports: true,
                    define: ["'goog.DEBUG=false'"],
                    warning_level: 'verbose',
                    summary_detail_level: 3,
                    manage_closure_dependencies: true,
                    only_closure_dependencies: true,
                    closure_entry_point: [
                        'javascript.util.ArrayList',
                        'javascript.util.Arrays',
                        'javascript.util.Collection',
                        'javascript.util.EmptyStackException',
                        'javascript.util.HashMap',
                        'javascript.util.HashSet',
                        'javascript.util.IndexOutOfBoundsException',
                        'javascript.util.Iterator',
                        'javascript.util.List',
                        'javascript.util.Map',
                        'javascript.util.NoSuchElementException',
                        'javascript.util.OperationNotSupported',
                        'javascript.util.Set',
                        'javascript.util.SortedMap',
                        'javascript.util.SortedSet',
                        'javascript.util.Stack',
                        'javascript.util.TreeMap',
                        'javascript.util.TreeSet'
                    ],
                    output_wrapper: '"(function(){%output%}).call(this);"'
                },
                execOpts: {
                    maxBuffer: 999999 * 1024
                },
                TieredCompilation: true
            },
            browser: {
                src: ['src/javascript/**/*.js',
                    'lib/closure-library/closure/goog/**/*.js',
                    '!lib/closure-library/closure/goog/**/*_test.js',
                    '!lib/closure-library/closure/goog/**/*_perf.js',
                    '!lib/closure-library/closure/goog/demos/**/*.js',
                    'lib/closure-library/third_party/closure/goog/**/*.js',
                    '!lib/closure-library/third_party/closure/goog/**/*_test.js',
                    '!lib/closure-library/third_party/closure/goog/**/*_perf.js'
                ],
                dest: 'build/javascript.util.js'
            },
            node: {
                TEMPcompilerOpts: {
                    only_closure_dependencies: false,
                },
                src: ['src/javascript/**/*.js',
                    'lib/closure-library/closure/goog/**/*.js',
                    '!lib/closure-library/closure/goog/**/*_test.js',
                    '!lib/closure-library/closure/goog/**/*_perf.js',
                    '!lib/closure-library/closure/goog/demos/**/*.js',
                    'lib/closure-library/third_party/closure/goog/**/*.js',
                    '!lib/closure-library/third_party/closure/goog/**/*_test.js',
                    '!lib/closure-library/third_party/closure/goog/**/*_perf.js',
                    'src/node.js'
                ],
                dest: 'build/javascript.util-node.js'
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            browser: {
                src: ['license-notice.txt', 'build/javascript.util.js'],
                dest: 'dist/javascript.util.min.js',
            },
            node: {
                src: ['license-notice.txt', 'build/javascript.util-node.js'],
                dest: 'dist/javascript.util-node.min.js',
            }
        },

        closureDepsWriter: {
            main: {
                options: {
                    closureLibraryPath: 'lib/closure-library',
                    root_with_prefix: '"src ../../../../src"',
                },
                dest: 'deps.js'
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-gjslint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['bower', 'gjslint', 'closureDepsWriter']);
    grunt.registerTask('dist', ['bower', 'gjslint', 'closureDepsWriter', 'closureCompiler', 'concat']);
}
