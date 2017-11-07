$(window).on('load', function showImages() {
	var imgIndex1 = Math.round(Math.random() * 80);
	var imgIndex2 = Math.round(Math.random() * 80);
	var imgIndex3 = Math.round(Math.random() * 80);
	//I tried to change these to "$("randomimage") like in your examples, but that broke the code. I wasn't getting an error, which gives me the impression that it wasn't even being recognized as a function. I looked up a solution and found this: https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery, but even making the recommended change ($("#randomimage")[0]) fixed the problem.
	document.getElementById("randomImage1").src = "usethese/random/" + imgIndex1 + ".jpg";
	document.getElementById("randomImage2").src = "usethese/random/" + imgIndex2 + ".jpg";
	document.getElementById("randomImage3").src = "usethese/random/" + imgIndex3 + ".jpg";
});