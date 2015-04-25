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

  // game countdown
  (function(){
    var counter = 120;
    var span = document.getElementById("game-timer-numbers");
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span.innerHTML = getTime(counter);
      }
      // Display 'counter' wherever you want to display it.
      if (counter === 0) {
          alert('el tiempo ha terminado');
          clearInterval(counter);
      }
      
    }, 1000);
  })();
  var getTime = function(sg) {
    var minutes = Math.floor(sg / 60);
    var leftover = sg - minutes * 60;
    leftover = (leftover < 10) ? "0" + leftover: leftover
    return (minutes + ':' + leftover);
  };

});


