function buildPlot() {
    /* data route */
  var url = "/api/v1.0/product_id";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = [response];

    var layout = {
      title: "ProductID pie chart",
      xaxis: {
        title: "Age"
      },
      yaxis: {
        title: "Occupation"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
