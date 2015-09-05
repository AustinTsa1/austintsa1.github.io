
var rate = function(wordCount){
	var timeMinutes = document.getContentById("time").value;
	return Math.ceil(wordCount/timeMinutes);
}