
$("#sizePicker").submit(function(e){
	e.preventDefault()
});

$('#submit').click(function(){
	var inputHeight = $('#inputHeight').val();
	var inputWidth = $('#inputWeight').val();
	makeGrid(inputHeight, inputWidth);
});

function makeGrid(inputHeight, inputWidth) {
	var pixelCanvas = $("#pixelCanvas");

	pixelCanvas.html('');
	for(var i=0; i<inputHeight; i++){
		pixelCanvas.append('<tr></tr>');
		let tableRow = pixelCanvas.children().last();
		for(var j=0;j<inputWidth; j++){
			tableRow.append("<td></td>");
		}
	}
}


$('#pixelCanvas').on('click','td',function(){
	var color = $('#colorPicker').val();
	$(this).css('background-color',color);
});
