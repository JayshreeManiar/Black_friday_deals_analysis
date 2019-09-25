// Define SVG area dimensions
var svgWidth = 2960;
var svgHeight = 2660;

// Define the chart's margins as an object
var chartMargin = {
  top: 230,
  right: 230,
  bottom: 230,
  left: 230
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("BlackFriday_new_data.csv", function(error, data) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(data);

  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function(data) {
    data.gender = +data.gender;
    data.purchase = +data.purchase;
  });

  var xTimeScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.gender))
  .range([0, width]);


  
  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.purchase)])
    .range([height, 0]);


     // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale1);

   // Step 7: Append the axes to the chartGroup - ADD STYLING
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

 // CHANGE THE TEXT TO THE CORRECT COLOR
 chartGroup.append("g")
 .attr("stroke", "green") // NEW!
 .call(leftAxis);

// Step 8: Set up two line generators and append two SVG paths
  // ==============================================
  // Line generators for each line
  var line1 = d3
    .line()
    .x(d => xTimeScale(d.gender))
    .y(d => yLinearScale1(d.purchase));


    var line2 = d3
    .line()
    .x(d => xTimeScale(d.gender))
    .y(d => yLinearScale2(d.purchase));



// Append a path for line1
chartGroup.append("path")
.data([data])
.attr("d", line1)
.classed("line green", true);

 // Append a path for line2
 chartGroup.append("path")
 .data([data])
 .attr("d", line2)
 .classed("line orange", true);


 chartGroup.append("text")
 // Position the text
 // Center the text:
 // (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
 .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
 .attr("text-anchor", "middle")
 .attr("font-size", "16px")
 .attr("fill", "green")
 .text("Morning Donut Craving Level");

chartGroup.append("text")
 .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
 .attr("text-anchor", "middle")
 .attr("font-size", "16px")
 .attr("fill", "orange")
 .text("Evening Donut Craving Level");

});

























