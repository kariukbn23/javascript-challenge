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

// Next need to create a function/loop that recognizes variable inputs from the user
// This will serve as the interactive capabilities of the site. 

function handleClick(){
    // The follow d3 function prevents from the page refreshing upon choosing filter settings
    d3.event.preventDefault()

    
