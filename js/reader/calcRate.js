var rate = 0;
function calcRate(){
	var timeMinutes = document.getContentById("time").value;
	return Math.ceil(wordCount/timeMinutes);
}
rate = calcRate();