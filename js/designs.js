let  gridHeight, gridWidth;
let color = "black"; // Default color
let tr = "<tr></tr>";
let td = "<td></td>"
let canvas = $('#pixel_canvas');

// Select color input
$('#color_picker').change(function() {
	color = $(this).val();
});

// Select size input
$('#input_height').change(function() {
	gridHeight = $(this).val();
});

$('#input_width').change(function() {
	gridWidth = $(this).val();
});

// When size is submitted by the user, call makeGrid()
function makeGrid(row, column) {
	// Remove all the child nodes in table
	canvas.empty();
	// Making the grid cavas
	for (let r = 0; r < row; r++) {
		canvas.append(tr);
		for (let c = 0; c < column; c++) {
			$('tr:nth-child(' + (r + 1) + ')').append(td);
		}
	}
	// <td> change color
	$('td').click(function() {
		$(this).css('background-color', color);
	});
	$('td').dblclick(function() {
		$(this).css('background-color', 'white');
	});
}

// Submit button
$('#size_picker').submit(function(event) {
	makeGrid(gridHeight, gridWidth);
	event.preventDefault();
});

