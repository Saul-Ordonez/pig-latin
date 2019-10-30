// function(words) {


// ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];

// ['b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentenceInput").val();
    var words = sentence.split(' ');
    // var vowels = /[aeiou]/i;
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
    var vowelsWithY = /[aeiouy]/i
    // }
    // var letters = words.split('');

    if ((sentence.length === 1) && (vowels.includes(words[0][0]))) {
      sentence += 'ay';
      console.log(vowels.includes(words[0][0]));
    } else if (sentence.length === 1) {
      alert('Please enter a real word');
    } else if ((vowels.includes(sentence[0]))){
      sentence += "way";
    } else if ((vowels.includes(sentence[1][1]))){
      var slicedLetter = sentence.splice(0,1);
      var wordRemainder = sentence.splice(1);
      console.log(slicedLetter);
      console.log(wordRemainder);
      sentence = wordRemainder + slicedLetter + "ay";
    }

    $("#output").append("<li>" + sentence + "</li>");

    });
  });
