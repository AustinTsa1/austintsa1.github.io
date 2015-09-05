var speech = ""
function submit()
{

	document.getElementById("userSpeech").innerHTML = speech;
	console.log('hi');
	// document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){
 speech = document.getElementById('speech').value;
	readContent(speech, rate);
}