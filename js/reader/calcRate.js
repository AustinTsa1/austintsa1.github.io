var timeMinutes = document.getContentById("time").value;
var rate = function(wordCount){
	return Math.ceil(wordCount/timeMinutes);
}