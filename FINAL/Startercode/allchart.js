var tableData = data2;
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
// Donut chart based on Number of purchase records by age group.
var ctx = document.getElementById('doughnut-chart').getContext('2d');
var myChart = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["0-17", "18-25", "26-35", "36-45", "46-50","51-55","55+"],
      datasets: [
        {
          label: "Purchase by age group",
          backgroundColor: ["#8e5ea2", "#cdbe3e","#3cba9f","#cd3e4e","#95cd3e","#cd3e95","#3e4ecd",],
          data: [10051,2138,15496,8390,5229,15628,6421]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Number of purchase records by age group.'
      }
    }
});
// Polar Area chart based on occupation category on the basis of age group
var ctx = document.getElementById("polarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["0-17", "18-25", "26-35", "36-45", "46-50", "51-55", "55+"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#e74c3c",
        "#9b59b6",
        "#34495e",
        "#95a5a6",
        "#f1c40f"
      ],
      data: [10, 12, 4, 9, 1, 0, 7]
    }]
  }
});

//Bar chart based on purchase based on Occupation
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['0','1','2','3','4','5'],
      
        datasets: [{
            label: 'Purchase based on Occupation',
            data: [213384825,
                134362252,
                74993407,
                51870196,
                230642215,
                40980298,
                60996124],
              
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],
                
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



