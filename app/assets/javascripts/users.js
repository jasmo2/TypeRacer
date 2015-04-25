$( document ).ready(function() {
	// slider
	$('#slider-step').noUiSlider({
		start: [ 0 ],
		step: 1000,
		range: {
			'min': [  0 ],
			'max': [ 10000 ]
		}
	});
});


