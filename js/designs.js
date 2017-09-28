let color, gridHeight, gridWidth;
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
	for (let i = 0; i < row; i++) {
		$('#pixel_canvas').append(tr);
	}
	//$('tr').append(td);



}

$('#size_picker').submit(function(event) {
	makeGrid(gridHeight, gridWidth);
	event.preventDefault();
});