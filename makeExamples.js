var fs = require('fs');
var dox = require('dox');

var base = __dirname+"/node_modules/turf/node_modules";
var dirs = fs.readdirSync(base);
var _ = require('lodash');

function getExample(comments) {
    if (comments[0] && comments[0].tags) {
        var tags = _.where(comments[0].tags, {type: 'example'});
        if (tags.length > 0) {
            return tags[0].string;
        }
    }
}

var examples = [];
dirs.forEach(function(dir) {
    // console.log(dir);
    var path = base+"/"+dir;
    if (dir.indexOf('turf-') == -1 || !fs.statSync(path).isDirectory()) {
        return;
    }

    var contents = fs.readFileSync(path+"/index.js", 'utf-8');
    var comment = dox.parseComments(contents);

    var example = getExample(comment);

    if (example) {
        examples.push({name: dir, example: example});
    }
});

fs.writeFileSync(__dirname+'/public/examples.json', JSON.stringify(examples));