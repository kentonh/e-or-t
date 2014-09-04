// Store all quotes in array. Einstein quotes are odd index, Tesla quotes are even index. Nothing in index 0.
var quotes = [
{ name:"E", text:"Imagination is more important than knowledge."},
{ name:"T", text:"I don't care that they stole my idea . . I care that they don't have any of their own"},
{ name:"E", text:"Gravitation is not responsible for people falling in love."},
{ name:"T", text:"The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane."},
{ name:"E", text:"I want to know God's thoughts; the rest are details."},
{ name:"T", text:"The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence."},
{ name:"E", text:"The hardest thing in the world to understand is the income tax."},
{ name:"T", text:"If your hate could be turned into electricity, it would light up the whole world."},
{ name:"E", text:"Reality is merely an illusion, albeit a very persistent one."},
{ name:"T", text:"One must be sane to think clearly, but one can think deeply and be quite insane."},
{ name:"E", text:"The only real valuable thing is intuition."},
{ name:"T", text:"Of all things, I liked books best."},
{ name:"E", text:"A person starts to live when he can live outside himself."},
{ name:"T", text:"I do not think you can name many great inventions that have been made by married men."},
{ name:"E", text:"God is subtle but he is not malicious."},
{ name:"T", text:"The present is theirs; the future, for which I really worked, is mine."}];

var randomNumber = Math.floor(Math.random()*(quotes.length - 1)) + 1;
var quote = quotes[randomNumber];

document.getElementById('quotePlace').innerHTML = quote.text;

function einstein(quote) {
	if( quote.name == "E") {
		return '<div class="correct">Correct! <a href="">Want another?</a></div>';
	} else { return '<div class="incorrect">Incorrect! <a href="">Want another?</a></div>' }
}

function tesla(quote) {
	if( quote.name == "T") {
		return '<div class="correct">Correct! <a href="">Want another?</a></div>';
	} else { return '<div class="incorrect">Incorrect! <a href="">Want another?</a></div>' }
}

$(document).ready( function() {
	$('#einstein').one("click",function(event) {
		$("#answer").append(einstein(quote));
		$('#tesla').off("click");
	});
	$('#tesla').one("click",function(event) {
		$("#answer").append(tesla(quote));
		$('#einstein').off("click");
	});
});