global.expect = require('chai').expect;
global.goog = {
    require: function() {}
}
require('../dist/javascript.util-node.min.js');
