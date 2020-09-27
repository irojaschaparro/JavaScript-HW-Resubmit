// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

function ufos(data){
    data.forEach(function(ufosighting) {
        var row = tbody.append("tr");
       
        Object.entries(ufosighting).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
});
};

ufos(tableData);
var form = d3.select("#form");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(i => i.datetime === inputValue);
    
    console.log(filteredData);
    tbody.html("");
    ufos(filteredData);
};