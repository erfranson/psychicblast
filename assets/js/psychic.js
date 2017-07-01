var wins = 0;
var losses = 0;
var guessAmount = 7;
var num = Math.floor(Math.random() * 100);
var guesses =[];

$("input[type=number").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo text from input
		var choice = parseInt($(this).val());
		parseInt($(this).val(""));
		console.log(choice);
		e.preventDefault();
		if(choice === num){
			win();
			$(".hint").html("BINGO!")
		} else{
			if(choice < num){
				$(".hint").html("Your choice is < the number.");
				guesses.push(choice);
				$(".used").html(guesses + " ");
			} else {
				$(".hint").html("Your choice is > the number.");
				guesses.push(choice);
				$(".used").html(guesses + " ");
			}
			 loss();
			}
		}

});

function win(){
	wins++;
	$(".wins").html(wins);
	 guessAmount = 7;
	 $(".guesses").html(guessAmount);
	  num = Math.floor(Math.random() * 100);
	  guesses = [];
	  $(".used").html(guesses);
}
function loss(){
	guessAmount--;
	$(".guesses").html(guessAmount);
	if(guessAmount === 0){
	   guessAmount = 7;
	   $(".guesses").html(guessAmount);
	   losses++;
	  $(".losses").html(losses);
	  $(".hint").html("Sorry you lose!");
	  num = Math.floor(Math.random() * 100);
	  guesses = [];
	  $(".used").html(guesses);
    }
}

// if(choice < num){
	// 	$(".hint").html("<");
	// } else{
	// 	$(".hint").html(">");