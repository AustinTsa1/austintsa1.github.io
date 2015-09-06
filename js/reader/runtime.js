var speech = "";
var wordCount = 0;
function submit(){
	 
	 
	 speech = document.getElementById('speech').value;
	 wordCount = countWords(speech);
	 console.log(wordCount);
x
	// document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){
 speech = document.getElementById('speech').value;
 rate = document.getElementById('rpm').value;
	readContent(speech, rate);
}