// game countdown
function theGame(args) {
  this.$text = args.text;
  this.$gameInput = args.gameInput;
  var gameInput = this.$gameInput;
  var $gameSlider = args.gameSlider;
  var $gameActiveWord = args.gameActiveWord;
  var theText = this.$text
  this.wordCount = 0 , this.textCount = 0;
  //text Array
  var textArray = function(){
    var txt = theText.text()
    , wordArray = txt.replace(/[^\w ]/g, "").split(/\s+/); 
    return wordArray;
  };
  // active word en inicio
  $gameActiveWord.text(textArray()[0]);

  //text Length
  var textLength = textArray().length;
  var paso = function(word) {
    return (word * Math.floor(100/textLength));
  }


  //text char
  var gWordArray = function (word) {
    return word.split('');
  };
  //word check
  this.wordCheck  = function (e,eChar,newWord) {
    newWord = newWord || false;
    if (eChar == null){
      eChar = String.fromCharCode(e.keyCode);
    }else{
      eChar = String.fromCharCode(eChar);
    }
    var wordArray = gWordArray(textArray()[this.textCount]);
    if (newWord && e.which === 32 && this.wordCount == wordArray.length ) {
      // debugger
      this.$gameInput.val("");
      this.wordCount = 0;
      this.textCount += 1;
      $gameSlider.val(paso(this.textCount));
      $gameActiveWord.text(textArray()[this.textCount]);
      gameInput.css({
        "background" : "rgba(117,255,7,0)"
      });
      //user score
      $("#user-score").text(paso(this.textCount));
    }else if (eChar === wordArray[this.wordCount]){
      if ($gameInput.val().length === this.wordCount || this.wordCount + 1 == $gameInput.val().length)
      {
        // debugger
        this.wordCount += 1;
        gameInput.css({
          "background" : "rgba(117,255,7,0.4)"
        });
      }
    }else{
      this.wordCount += 1;
      gameInput.css({
        "background" : "rgba(255,7,7,0.4)"
      });
    }  
}

  // slider
  this.$slider = $('#slider');

  // game timer
  var initializer = function(){
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
          if(!alert('¡El tiempo ha terminado!' + ' Tu puntaje fue ' +  $("#user-score").text() )){window.location.reload();}
          clearInterval(counter);
      } 
    }, 1000);
  };

  //preinitializer
  this.preinitializer = function() {
    $("#game-input").attr("disabled", "true");
    var counter = 3;
    var span = document.getElementById("preinitializer-counter");
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span.innerHTML = counter;
      }
      // Display 'counter' wherever you want to display it.
      if (counter === 0) {
        $(".la-modal").remove();
        $("#game-input").removeAttr("disabled", "true").focus();
        initializer();
      } 
    }, 1000);
  };
}

