// from data.js
var tableData = "http://127.0.0.1:9999/api/v1.0/product_id";

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
 d3.event.preventDefault();

  // Select the Age element and get the raw HTML node
  var inputElement = d3.select("#Age");

  // Get the value property of the date input element
  var inputValue = inputElement.property("value");

   // Select the city input element and get the raw HTML node
  var marital_status =d3.select("#marital_status");

  // Get the value property of the date input element
  var marital_status_value = marital_status.property("value");

  // Select the state input element and get the raw HTML node
  var inputstate =d3.select("#state");

  // Get the value property of the state input element
  var input_state_value = inputstate.property("value");

  // Select the country input element and get the raw HTML node
  var inputcountry =d3.select("#country");

  // Get the value property of the country input element
  var input_country_value = inputcountry.property("value");


  // Select the shape input element and get the raw HTML node
  var inputshape =d3.select("#shape");

  // Get the value property of the shape input element
  var input_shape_value = inputshape.property("value");



  // filtering the data on the basis of user input

  var filteredData = tableData.filter(info => info.datetime === inputValue);
  var filtercity = tableData.filter(info => info.city === input_city_value);
  var filterstate = tableData.filter(info => info.state === input_state_value);
  var filtercountry = tableData.filter(info => info.country === input_country_value);
  var filtershape = tableData.filter(info => info.shape === input_shape_value);


    
  
  // comment to clear the body while giving next search
  document.getElementsByTagName('tbody')[0].innerHTML = '';

  //append one table row `tr` for each alliendata object
  filteredData.forEach(function(Alliendata){
     
    var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
    Object.entries(Alliendata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
    });
  });


  // comment to clear the body while giving next search
 //document.getElementsByTagName('tbody')[0].innerHTML = '';
  
//append the data based on the city search
  filtercity.forEach(function(Alliendata){

     var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
   Object.entries(Alliendata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);

   });
  });

  
  
  //append the data based on the state search
  filterstate.forEach(function(Alliendata){*/

