// from data.js
var tableData = data;

//Function adds the option fields for the passed list item with the passed array parameter
function addSelect(lival, arr){
  //Selecting the element using the id value passed as parameter.
  var selectItem = document.getElementById(lival);
  if (selectItem == null) {
      console.log("Select item is null");
  }
  else {
    //Clearing the dropdown list items if present. 
    //To avoid having wrong cities for state and wrong states for countries etc.
    if (selectItem.options.length > 0) {
          selectItem.options.length = 0;
    }

    //creating dropdown box values or options dynamically
    for(var i=0;i<arr.length;i++) {
        var option = document.createElement("option");
        option.text = arr[i];
        option.value = arr[i];
        selectItem.add(option);
    }
    
    //Defaultly no item is selected in the dropdown box
    selectItem.value = "";
  }
}

//Remove duplicates from arrays and return arrays with no duplicate values.
function removeDuplicates(arrData){
  let unique = {};
  arrData.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  
  return Object.keys(unique);
  
}

//Fills data i.e creates option elements for the passed element.
//The data for the country , city,state and shapes is retreived from the data.js
function fillData(selValue){
      var optionData = [];
      tableData.forEach((DealsData)=>{
          Object.entries(DealsData).forEach(([key,value])=>{
          if(key === selValue)
          optionData.push(value);
          });
      });
  var optionsArray = removeDuplicates(optionData);
  console.log("selValue: "+selValue);
  addSelect(selValue,optionsArray);
}

//Defaulty populate all the dropdown boxes with values.
fillData("City_Category");
fillData("Age");
fillData("Gender");

function getData(dropVal){
  // console.log(dropVal);
  var genderval;
  var ageval;
  var agearr = [];
  var genderarr = [];

  //iterating through the entire data set.
  tableData.forEach((DealsData)=>{
    Object.entries(DealsData).forEach(([key,value])=>{

        //storing the city and state values in variables for each object.
        if(key === "Gender"){
            genderval = value;
        }
        if (key === "Age"){
            ageval = value;
        }

        //checking  if the current value is the value that has been selected
        if(value === dropVal){
            //if the value is equal then is the key a country or a state.
            if(key === "City_Category"){
                //The key is a country. so populating the state and city arrays with respective values
                genderarr.push(genderval);
                agearr.push(ageval);
            }else if (key === "Age"){
                //The key is state. so populating only the city array for the state.
                genderarr.push(genderval);
            }
        }
    });
});

if (agearr.length > 0){
  var ageArray = removeDuplicates(agearr);
  addSelect("Age",ageArray);

  var genderArray = removeDuplicates(genderarr);
  addSelect("Gender",genderArray);

  console.log(ageArray);
  console.log(genderArray);
}else if(agearr.length === 0 && genderarr.length > 0){
  var genderArray = removeDuplicates(agearr);
  addSelect("Gender",genderArray);
}

}

//Get button reference
var filter_btn = d3.select("#filter-btn");


// Get a reference to the table body
var tbody = d3.select("tbody");

//on the click of the filter button
filter_btn.on("click",function(){

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

  var occupation =d3.select("#occupation");
  var occupation_value= occupation.property("value");

  var filteredData = tableData.filter(searcheoccupation => searcheoccupation.Occupation === occupation_value);

  filteredData.forEach((DealsData)=>{
    // console.log(ufoData);
    // console.log("Key: ");
    var row = tbody.append("tr");
    Object.entries(DealsData).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});
});

