// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log("Hello & Welcome to BK's Code")

// We first need to build a function that captures our data into an html table 

function displayData(data){ 
    tbody.html("");

    // Next create loop that goes through data to capture specific data points we need

    data.forEach(function(sighting){
    
    // The captured values then need to added to a new tree of data

    new_tree = tbody.append("tr")

    // We can use object enteries now to get specific key/value pairs from the data dictionary

    Object.entries(sighting).forEach(function([key, value]){
        new_tabledata = new_tree.append("td").text(value)	
    })
})}

// Display captured data 

displayData(tableData)

//Establish variables for function that will serve as user inputs
var date = d3.select("#datetime")
var button = d3.select("filter-btn")

// // filter data with date that the user inputs
// function clickSelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();

//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.datetime===date.property("value"))
//     //display the new table
//     displayData(new_table);
// }

// // event listener to handle change and click
// date.on("change", clickSelect)