function buildMetadata() {

    // @TODO: Complete the following function that builds the metadata panel
  
    // Use `d3.json` to fetch the metadata for a sample
  
    d3.json('Blackfriday.json').then(function(sampleData) {
        
      console.log(sampleData);
     // d3.csv("blackfridat_rename.csv").then(function(data) {
     // console.log(data);
     // });
    //} buildMetadata()
   // Use d3 to select the panel with id of `#sample-metadata`
    var SAMPLE = d3.select(`#selDataset`);
  
       // Use `.html("") to clear any existing metadata
    SAMPLE.html("");
  
  
      // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(sampleData).forEach(([key, value]) => {
      SAMPLE.append('h6').text(`${key}, ${value}`);
      });
    });
  
    
  }
  
    function buildCharts(sample) {
  
    // @TODO: Use `d3.json` to fetch the sample data for the plots
    d3.json(`/api/v1.0/product_id/${sample}`).then(function(data){
      var x_axis = data.occuption;
      var y_axis = data.age;
      var size = data.age;
      var color = data.occuption;
      var texts = data.age;
  
      // @TODO: Build a Bubble Chart using the sample data
  
      var bubble = {
        x: x_axis,
        y: y_axis,
        text: texts,
        mode: `markers`,
        marker: {
          size: size,
          color: color,
          colorscale: "Earth",
        }
      };
  
      var data = [bubble];
        var layout = {
          title: "Age vs Occuptaion",
          xaxis: {title: "Occuption"}
        };
        Plotly.newPlot("bubble", data, layout);
    });
    // @TODO: Build a Pie Chart
      // HINT: You will need to use slice() to grab the top 10 sample_values,
      // otu_ids, and labels (10 each).
    d3.json(`/samples/${sample}`).then(function(data){
      var values = data.age;
      var labels = data.occuption;
      //var display = data.otu_labels.slice(0,10);
      //var hovertext = data.otu_labels.slice(0,10);
  
      var pie_trace =[{
        values: values,
        labels: labels,
        //hovertext: display,
        type: "pie",
        textposition: "inside",
      }];
      var layout={
        title:"ProductID pie chart"
      }
      Plotly.newPlot('pie', pie_trace, layout);
    });
  
    
  
      
  }
  
  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("127.0.0.1:9999/api/v1.0/product_id").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
     // buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
   // buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  // BONUS: Build the Gauge Chart
      // buildGauge(data.WFREQ);*/
//buildMetadata();