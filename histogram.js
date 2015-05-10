var d3 = require('d3');
var data = [4, 8, 15, 16, 23, 42];

/* Scale function */
var scale = d3.scale.linear()
              .domain([0, d3.max(data)])
              .range([4, 420]);

var div_chart = function(error, container) {
    if(error) throw error;

    d3.select(container).append("div")
        .style("font", "10px sans-serif")
        .style("text-align", "right")
      .selectAll("div")
        .data(data).enter()
          .append("div")
            .style("background-color", "#4682B4")    /* Using steel blue */
            .style("color", "white")
            .style("padding", "3px")
            .style("margin", "1px")
            .style("width", function(d) {return scale(d) + "px";})
            .text(function(d) {return d;});
}

var svg_chart = function(error, container) {
    if(error) throw error;

    var HEIGHT = 20;

    /* SVG Group */
    /*
     * Attribute transform:
     *     transform is used to mutate the shape of the object
     */
    var groups =
      d3.select(container)
        .append("svg:svg")
          .attr("width", "600")
          .attr("height", "480")
          .style("float", "left")
        .selectAll("g")
          .data(data).enter()
            .append("g")
              .attr("transform", function(d, i) {return "translate(0," + i * HEIGHT + ")";});

    /* Create the bar & the text */
    groups.append("rect")
      .attr("width", scale)
      .attr("height", HEIGHT - 1)
      .style("fill", "#4682B4");

    groups.append("text")
      .attr("x", function(d) {return scale(d) - 3;})
      .attr("y", HEIGHT / 2)
      .attr("dy", ".35em")
      .text(function(d) {return d;})
      .style("fill", "white")
      .style("font", "10px sans-serif")
      .style("text-anchor", "end")
}

module.exports = function(error, container) {
    if(error) throw error;

    /* Simple histogram */
    div_chart(error, container);

    /* Create some space*/
    d3.select(container).append("div").style("padding", "1em");

    /* Using SVG */
    svg_chart(error, container);
}
