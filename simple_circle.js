var d3 = require('d3');

module.exports = function (errors, container) {
    if(errors) {
        console.log(errors);
        return;
    }

    d3.select(container)
      .append('svg:svg')
          .attr('width', 600)
          .attr('height', 300)
      .append('circle')
          .attr('cx', 300)
          .attr('cy', 150)
          .attr('r', 50)
          .attr('fill', '#26963c')
}
