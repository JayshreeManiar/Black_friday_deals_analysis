// from data.js
var tableData = data;

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
  var inputElement = d3.select("#city");

  // Get the value property of the date input element
  var inputValue = inputElement.property("value");

   // Select the city input element and get the raw HTML node
  var Age_group=d3.select("#Age");

  // Get the value property of the date input element
  var Age_group_value = Age_group.property("value");

  // Select the state input element and get the raw HTML node
  var gender =d3.select("#gender");

  // Get the value property of the state input element
  var gender_value = gender.property("value");

  


  // filtering the data on the basis of user input

  var filtercity = tableData.filter(info => info.City_Category === inputValue);
  var filterage = tableData.filter(info => info.Age ===  Age_group_value);
  var filtergender = tableData.filter(info => info.Gender === gender_value);
      
  
  // comment to clear the body while giving next search
  document.getElementsByTagName('tbody')[0].innerHTML = '';

  //append one table row `tr` for each alliendata object
  filtercity.forEach(function(dealsdata){
     
    var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
    Object.entries(dealsdata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
    });
  });


  // comment to clear the body while giving next search
 //document.getElementsByTagName('tbody')[0].innerHTML = '';
  
//append the data based on the city search
  filterage.forEach(function(dealsdata){

     var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
   Object.entries(dealsdata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);

   });
  });

  
  
  //append the data based on the state search
  filtergender.forEach(function(dealsdata){
     var row=tbody.append("tr");

  //Use `Object.entries` to console.log each alliendata value
   Object.entries(dealsdata).forEach(function([key, value]){
    // console.log(key, value);

     //Append a cell to the row for each value
     var cell = row.append("td");
     cell.text(value);
   });
  });
});

