var http = require('http');
var fs = require('fs');

module.exports = {
    /*
     * show_graph: show the SVG graph in the simple http server
     *     @errors: error 
     *     @window: the window object of DOM
     *     @port: the port of http server
     */
    show_graph: function (errors, window, port) {
        if(errors) {
            throw errors;
        }

        var svgsrc = window.document.documentElement.innerHTML;
        http.createServer(function(request, respond) {
            respond.writeHead(200, {'Content-Type': 'text/html'});
            respond.write(svgsrc);
            respond.end();
        }).listen(8888, '127.0.0.1');
    },
    save_svg: function (errors, window, file_name) {
        if(errors) throw errors;

        var svgsrc = window.document.querySelector('#d3_contain').innerHTML;
        fs.writeFile(file_name, svgsrc, function(errors) {
            if(errors) throw errors;
            console.log(file_name + ' saved\n');
        });
    }
};
