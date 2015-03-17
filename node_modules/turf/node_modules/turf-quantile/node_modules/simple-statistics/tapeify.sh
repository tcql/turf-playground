# grep -rl 'describe(' ./test/spec/*.js | xargs sed -i "" 's/describe(/test(/g'
# grep -rl 'it(' ./test/spec/*.js | xargs sed -i "" 's/it(/test(/g'
# grep -rl 'function()' ./test/spec/*.js | xargs sed -i "" 's/function()/function(t)/g'
# grep -rl "var assert = require('chai').assert;" ./test/spec/*.js | xargs sed -i "" "s/var assert = require('chai').assert;/var test = require('tape');/g"
# grep -rl "assert" ./test/spec/*.js | xargs sed -i "" "s/assert/t/g"
# grep -rl "^\s*});" ./test/spec/*.js | xargs sed -i "" "s/^[[:space:]]*});/t.end(); });/g"
# grep -rl "\.\.\/\.\.\/" ./test/*.js | xargs sed -i "" "s/..\/..\//..\//g"
