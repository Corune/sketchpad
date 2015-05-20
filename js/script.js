// A function to handle the generation of the table
var genTable = function(table, dimensions) {
    var tableScheme = "";
    for (var i = 0; i < dimensions; i++) {
	tableScheme += "<tr>";
	for (var j = 0; j < dimensions; j++)
	    tableScheme += "<td></td>";
	tableScheme += "</tr>";
    }
    table.append(tableScheme);
};

var resetTable = function(table, dimensions) {
    table.empty();
    genTable(table, dimensions);
};

// A function to handle clearing the table
var clearTable = function() {
    $("td").removeClass("clicked");
};

$(document).ready(function(){
    var isDown = false;
    var doc = $(document);
    var table = $("table");

    // Generating the table
    genTable(table, 50);

    // Reseting the sketchpad when #reset is clicked
    $("#reset").click(function(){
	var resolution = prompt("What resolution would you like the square?");
	if (!resolution || isNaN(resolution))
	    return;
	resetTable(table, resolution);
    });

    // Clear table when #clear is clicked
    $("#clear").click(clearTable);

    // Checking to see if mouse is clicked down
    doc.mousedown(function(){
	isDown = true;
    }).mouseup(function(){
	isDown = false;
    });

    // If mouse is down, start drawing, if not, don't
    // Using a delegator to catch dynamically
    // generated table cells.
    table.on("mouseover", "td", function(event){
	event.preventDefault();
	thisOne = $(this);
	if (isDown)
	    thisOne.addClass("clicked");
    });
});
