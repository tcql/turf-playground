var fs = require('fs');
var dox = require('dox');
var doxme = require('doxme');
var marked = require('marked');
var _ = require('lodash');
var base = __dirname+"/node_modules/turf/node_modules";
var dirs = fs.readdirSync(base);

marked.setOptions({
    gfm: true
});

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
    var path = base+"/"+dir;
    if (dir.indexOf('turf-') == -1 || !fs.statSync(path).isDirectory()) {
        return;
    }

    var contents = fs.readFileSync(path+"/index.js", 'utf-8');
    var comment = dox.parseComments(contents);
    var example = getExample(comment);
    if (example) {
        var parts = dir.split("-");
        var methodParts = parts.slice(1);
        for (var i = 1; i < methodParts.length; i++) {
            methodParts[i] = methodParts[i].charAt(0).toUpperCase() + methodParts[i].slice(1);
        }

        var func_name = parts[0] + "." + methodParts.join("");

        examples.push({
            name: dir,
            function_name: func_name,
            example: example,
            desc: marked(doxme(comment))
        });
    }
});

fs.writeFileSync(__dirname+'/public/examples.json', JSON.stringify(examples));
