var rate = 0;
function calcRate(){
	var timeMinutes = document.getElementById("rpm").value;
	rate = Math.ceil(wordCount/timeMinutes);
}
