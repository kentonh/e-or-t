
// Store all quotes in array. Einstein quotes are odd index, Tesla quotes are even index. Nothing in index 0.
var quotes = ["Want another?","Imagination is more important than knowledge.","I don't care that they stole my idea . . I care that they don't have any of their own","Gravitation is not responsible for people falling in love.","The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.","I want to know God's thoughts; the rest are details.","The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.","The hardest thing in the world to understand is the income tax.","If your hate could be turned into electricity, it would light up the whole world.","Reality is merely an illusion, albeit a very persistent one.","One must be sane to think clearly, but one can think deeply and be quite insane.","The only real valuable thing is intuition.","Of all things, I liked books best.","A person starts to live when he can live outside himself.","I do not think you can name many great inventions that have been made by married men.","God is subtle but he is not malicious.","The present is theirs; the future, for which I really worked, is mine.",]

var randomNumber = Math.floor(Math.random()*(quotes.length - 1)) + 1;
var quote = quotes[randomNumber];

document.getElementById('quotePlace').innerHTML = quote;

function einstein(randomNumber) {
	if(randomNumber % 2 !== 0) {
		return '<div class="correct">Correct! <a href="">Want another?</a></div>';
	} else { return '<div class="incorrect">Incorrect! <a href="">Want another?</a></div>' }
}

function tesla(randomNumber) {
	if(randomNumber % 2 === 0) {
		return '<div class="correct">Correct! <a href="">Want another?</a></div>';
	} else { return '<div class="incorrect">Incorrect! <a href="">Want another?</a></div>' }
}

$(document).ready( function() {
	$('#einstein').one("click",function(event) {
		$("#answer").append(einstein(randomNumber));
		$('#tesla').off("click");
	});
	$('#tesla').one("click",function(event) {
		$("#answer").append(tesla(randomNumber));
		$('#einstein').off("click");
	});
});