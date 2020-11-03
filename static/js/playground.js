var colors = ['#32a8d9','#ffb400','#ff6643','#739712','#d0909a','#528fa9','#ff9a91']
var slideDuration = 4000;

$(document).ready(function(){
  // This was inspired by https://bl.ocks.org/basilesimon/f164aec5758d16d51d248e41af5428e4

  var style = window.getComputedStyle(document.getElementById("playground"), null);
  var size = { 'height': parseInt(style.getPropertyValue("height").replace("px",'')),
               'width': parseInt(style.getPropertyValue("width").replace("px",'')) };

  var svg = d3.select("#playground")
    .append("svg")
    .attr("width", size.width)
    .attr("height", size.height)
    .attr("id", "slide");

  var x = d3.scaleLinear().domain([0, 10]).range([0, size.width]);
  var y = d3.scaleLinear().domain([0, 10]).range([10, size.height - 10]);

  var line = d3.line()
    .x(function(d,i) {return x(i);})
    .y(function(d) {return y(d);})
    .curve(d3.curveNatural)

  // data is created inside the function so it is always unique
  let repeat = () => {
    var data = d3.range(11).map(function(){return Math.random()*10})
    var color = colors[Math.floor(Math.random()*colors.length)];
    // Uncomment following line to clear the previously drawn line
    //svg.selectAll("path").remove();

    // Set a light grey class on old paths
    svg.selectAll("path").attr("class", "old");

    var path = svg.append("path")
      .attr("d", line(data))
      .attr("stroke", color)
      .attr("stroke-width", "2")
      .attr("fill", "none");

    var totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(slideDuration)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .on("end", repeat)
      .transition()
        .delay(slideDuration * 2.5)
        .duration(slideDuration / 4)
        .ease(d3.easeLinear)
        .attr("stroke-width", 0);
  };
  repeat();

});
