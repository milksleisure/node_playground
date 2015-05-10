var jsdom = require('jsdom');
var html = '<html><head></head><div id="d3_contain"></div><body></body></html>';
var util = require('./utils.js');
var simple_circle = require('./simple_circle.js');
var histogram = require('./histogram.js');

function testing(errors, window) {
    var container = window.document.querySelector('#d3_contain');

    // Print functions using D3
    // simple_circle(errors, container);
    histogram(errors, container);

    // Post-processing functions
    util.show_graph(errors, window, 8888);
    // util.save_svg(errors, window, 'testing.svg');
};

jsdom.env({
    features: { QuerySelector : true },
    html: html,
    done: testing,
});
// no semi-column was harmed during this development
