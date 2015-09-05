var speech = document.getElementById("speech").value;

function submit()
{
	document.getElementById("userSpeech").innerHTML = speech;
	document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){
	readContent(speech, rate);
}