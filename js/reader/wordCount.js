var wordCount = function countWords(){
	speech = document.getElementById('speech').value;
	s = speech
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s.split(' ').length;
	
}