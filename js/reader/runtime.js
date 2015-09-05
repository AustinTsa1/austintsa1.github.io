var speech = "";
var wordCount = 0;
function submit(){
	 
	 
	 speech = document.getElementById('speech').value;
	 wordCount = countWords(speech);
	 console.log(wordCount);
	// document.getElementById("userSpeech").innerHTML = speech;
x
	// document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){
 speech = document.getElementById('speech').value;
 rate = document.getElementById('rate').value;
	readContent(speech, rate);
}
