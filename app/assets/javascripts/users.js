$( document ).ready(function() {
  


});

// game countdown
function theGame(args) {
  this.$text = args.text;
  this.$gameInput = args.$gameInput;
  var theText = this.$text
  //text Array
  this.textArray = function(){
    var txt = theText.text()
    , wordArray = txt.replace(/[^\w ]/g, "").split(/\s+/); 
    return wordArray;
  };

  //text Length
  var textLength = this.textArray().length;
  this.paso = function(word) {
    return (word * Math.floor(100/textLength));
  }

  //text char
  this.wordArray = function (word) {
    return word.split('');
  };

  // slider
  this.$slider = $('#slider');

  // game timer
  this.initializer = function(){
    var getTime = function(sg) {
      var minutes = Math.floor(sg / 60);
      var leftover = sg - minutes * 60;
      leftover = (leftover < 10) ? "0" + leftover: leftover
      return (minutes + ':' + leftover);
    };
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
  };
}

