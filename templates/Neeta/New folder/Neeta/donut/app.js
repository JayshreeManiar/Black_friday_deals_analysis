// Define the data as a two-dimensional array of numbers. If you had other
// data to associate with each number, replace each number with an object, e.g.,
// `{key: "value"}`.

var data = [[213384825,
    134362252,
    74993407,
    51870196,
    230642215,
    40980298,
    60996124,
    187550876,
    5816512,
    18388543,
    43166614,
    33660030,
    112705223,
    21428037,
    88969298,
    42144742,
    76906735,
    151563365,
    21144033,
    23752448,
    90832607]];
   // var data =[['0-17','18-25','26-35','36-45','46-50','51-55','55+']]


// Define the margin, radius, and color scale. The color scale will be
// assigned by index, but if you define your data using objects, you could pass
// in a named field from the data object instead, such as `d.name`. Colors
// are assigned lazily, so if you want deterministic behavior, define a domain
// for the color scale.
var m = 10,
    r = 100,
    z = d3.scale.category20c();

// Insert an svg element (with margin) for each row in our dataset. A child g
// element translates the origin to the pie center.
var svg = d3.select("body").selectAll("svg")
    .data(data)
  .enter().append("svg")
    .attr("width", (r + m) * 2)
    .attr("height", (r + m) * 2)
  .append("g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

// The data for each svg element is a row of numbers (an array). We pass that to
// d3.layout.pie to compute the angles for each arc. These start and end angles
// are passed to d3.svg.arc to draw arcs! Note that the arc radius is specified
// on the arc, not the layout.
svg.selectAll("path")
    .data(d3.layout.pie())
  .enter().append("path")
    .attr("d", d3.svg.arc()
        .innerRadius(r / 2)
        .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });