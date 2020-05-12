// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log("Hello & Welcome to BK's Code")

// We first need to build a function that captures our data into an html table 

function displayData(data){ 
    tbody.html("");

//     // Next create loop that goes through data to capture specific data points we need

//     data.forEach(function(sighting){
    
//     // The captured values then need to added to a new tree of data

//     new_tree = tbody.append("tr")

//     // We can use object enteries now to get specific key/value pairs from the data dictionary

//     Object.entries(sighting).forEach(function([key, value]){
//         new_tabledata = new_tree.append("td").text(value)	
//     })
// })}

