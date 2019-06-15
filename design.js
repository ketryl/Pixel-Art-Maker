//
//Define variables for the colorpicker, sizepicker and canvas element tags.
//Select color input
var colorPicker = document.getElementById("colorPicker")
//Select size inputs
var sizePicker = document.getElementById("sizePicker");
//Select table
var canvas = document.getElementById("pixelCanvas");
//
//
//Add eventListener to grab height and width details on entered on submit.
//Include prevent default events; so that grid is created and stays created.
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
})
//Create function to build grid based on user provided input.
function makeGrid(height, width) {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  document.createElement('table');
//Hitting submit a second time it clears the colors of table instead of making a new table. 
  canvas.innerHTML = '';
  for (var x = 0; x < height; x++) {
	var row = document.createElement('tr');
	canvas.appendChild(row); 
    for (var y = 0; y < width; y++) {
		var cell = document.createElement('td');
		row.appendChild(cell); 
//Add event listener to grab the user selected color.
	cell.addEventListener('click', function(event) {
	  var colorPicker = document.getElementById("colorPicker").value
		var color= colorPicker; 
			event.target.style.backgroundColor = color;})
      };
	}
  }