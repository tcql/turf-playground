#!/bin/sh
mocha -r test/init.js test/javascript/**/*.js --recursive
mocha -r test/init_prod.js test/javascript/**/*.js --recursive

