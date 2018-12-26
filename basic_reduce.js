function countWords(inputWords){
return	inputWords.reduce(function(acc, cur){
	acc[cur] = ++acc[cur] || 1;
	return acc;
	},{})//second argument to reduce initialises acc to {}
}

module.exports = countWords;