let  gridHeight = $('#input_height');
let gridWidth = $('#input_width');
// Select color input
let color = $('#color_picker');
let tr = "<tr></tr>";
let td = "<td></td>"
let canvas = $('#pixel_canvas');

// Select size input
/*$('#input_height').change(function() {
	gridHeight = $(this).val();
});

$('#input_width').change(function() {
	gridWidth = $(this).val();
});*/

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
		$(this).css('background-color', color.val());
	});
	$('td').dblclick(function() {
		$(this).css('background-color', 'white');
	});
}
makeGrid(gridHeight.val(), gridWidth.val());

// Submit button
$('#size_picker').submit(function(event) {
	makeGrid(gridHeight.val(), gridWidth.val());
	event.preventDefault();
});

