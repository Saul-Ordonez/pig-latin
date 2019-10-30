


// var sentence = ['this', 'sentence', 'will', 'be', 'in', 'piglatin']

var sentence = [];
var allLetters = /[a-z]/i;
var vowels = /[aeiou]/i;

// allLetters.test(sentence[0])

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

  var sentence = $("input#sentenceInput").val();
  // var words = sentence.split(' ');


  // var translation = function(sentence) {
    if ((sentence.length === 1) && (vowels.test(sentence[0]))) {
      sentence += 'ay';


      // translation(sentence);
    // }
  };


    $("#output").append("<li>" + sentence + "</li>");
  });
});
