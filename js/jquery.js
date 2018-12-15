// This function is used to replace the images in div#content to restart all animations
$("button").click(function(){
	$("img#img").replaceWith($('img#img').clone());
	$("p#description").replaceWith($("p#description").clone());
	$("img.sweetimg").replaceWith($("img.sweetimg").clone());
});