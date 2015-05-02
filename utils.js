var http = require('http');

module.exports = {
    /*
     * show_graph: show the SVG graph in the simple http server
     *     @errors: error 
     *     @window: the window object of DOM
     *     @port: the port of http server
     */
    show_graph : function (errors, window, port) {
        if(errors) {
            console.log(errors);
            return;
        }

        var svgsrc = window.document.documentElement.innerHTML
        http.createServer(function(request, respond) {
            respond.writeHead(200, {'Content-Type': 'text/html'});
            respond.write(svgsrc);
            respond.end();
        }).listen(8888, '127.0.0.1');
    }
};
