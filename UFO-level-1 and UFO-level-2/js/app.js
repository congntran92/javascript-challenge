// Level 1: -----------------------------------------------------------------

var tbody = d3.select("#target-table-display");

var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");

var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");

var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");

var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");

var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");


// Create table structure in the html file and insert each "data" object
data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
   
    Object.entries(obj).forEach(([key,value]) => {
        
        var tData = tRow.append("td");
        
        tData.text(value);
    });
});

// implementing fuction to "submit button"
submitButton.on("click", function() {
           
    tbody.html("");
   
    d3.event.preventDefault();
    console.log("You have just clicked the ' Date Time Filter Button'.");

    var inputField = d3.select("#datetime");
  
    var inputElement = inputField.property("value");
   
    console.log(inputElement);
   
    var inputTypeArray = data.filter(one => one.datetime === inputElement);   
    console.log(inputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    inputTypeArray.forEach((selection) => {
        
        var row = tbody.append("tr");
        
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            
            cell.text(value);
        });
    });      
});

// Level 2: ----------------------------------------------------
// adjust for queries to understand other filter searches
citysubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    
    d3.event.preventDefault();
   
    console.log("You have just clicked the 'City Filter Button'.");

    var cityinputElement = cityinputField.property("value");
   
    console.log(cityinputElement);
    
    var cityinputTypeArray = data.filter(two => two.city === cityinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
   
	console.log(cityinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    cityinputTypeArray.forEach((selects) => {
       
        var Crow = tbody.append("tr");
        
        Object.entries(selects).forEach(([key,value]) => {
            var Ccell = Crow.append("td");
            
            Ccell.text(value);
        });
    });      
});


statesubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    
    d3.event.preventDefault();
   
    console.log("You have just clicked the 'State Filter Button'.");
    
    var stateinputElement = stateinputField.property("value");
    
    console.log(stateinputElement);
    
    var stateinputTypeArray = data.filter(three => three.state === stateinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
	
	console.log(stateinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    stateinputTypeArray.forEach((selectss) => {
       
        var Srow = tbody.append("tr");
        
        Object.entries(selectss).forEach(([key,value]) => {
            var Scell = Srow.append("td");
            // adds the "value" to each row in the table
            Scell.text(value);
        });
    });      
});


countrysubmitButton.on("click", function() {
           
    tbody.html("");
   
    d3.event.preventDefault();
    
    console.log("You have just clicked the 'Country Filter Button'.");
   
    var countryinputElement = countryinputField.property("value");
    
    console.log(countryinputElement);
    // use the "field input" to filter the data by "country" only
    var countryinputTypeArray = data.filter(four => four.country === countryinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(countryinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    countryinputTypeArray.forEach((selectsc) => {
        
        var Corow = tbody.append("tr");
        
        Object.entries(selectsc).forEach(([key,value]) => {
            var Cocell = Corow.append("td");
           
            Cocell.text(value);
        });
    });      
});



shapesubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    
    d3.event.preventDefault();
    
    console.log("You have just clicked the 'Shape Filter Button'.");
    
    var shapeinputElement = shapeinputField.property("value");
    // print value in console
    console.log(shapeinputElement);
    // use the "field input" to filter the data by "shape" only
    var shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(shapeinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    shapeinputTypeArray.forEach((selectsh) => {
        
        var Shrow = tbody.append("tr");
        
        Object.entries(selectsh).forEach(([key,value]) => {
            var Shcell = Shrow.append("td");
            
            Shcell.text(value);
        });
    });      
});