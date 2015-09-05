var speech = document.getElementById("userSpeech").value;

function submit()
{

	document.getElementById("userSpeech").innerHTML = speech;
	document.getElementById("wordCount").innerHTML = "Words: "+wordCount;
}