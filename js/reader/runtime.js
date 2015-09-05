var speech = document.getElementByName("speech")[0].value;

function submit()
{
	document.getElementById("userSpeech").innerHTML = speech;
	console.log('hi');
	// document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}

function read(){

	readContent(speech, rate);
}