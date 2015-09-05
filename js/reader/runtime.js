var speech = "";
function submit(){
	 speech = document.getElementById('speech').value;
	document.getElementById("userSpeech").innerHTML = speech;

	// document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){
 speech = document.getElementById('speech').value;
 rate = document.getElementById('rate').value;
	readContent(speech, rate);
}
