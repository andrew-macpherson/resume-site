
setJumboTron = function(){
	console.log('setting jumbotron height');
	var height = $(window).innerHeight();
	var negativePadding = parseInt($('.jumbotron').css('padding-top'));
	negativePadding = negativePadding + parseInt($('.jumbotron').css('padding-bottom'));

	$('.jumbotron').height(height - parseInt(negativePadding));
	$('#top .overlay').height(height);
}


setAge = function(){
	var birthday = +new Date('1988-09-22');
	var age =  ~~((Date.now() - birthday) / (31557600000));


	x = document.getElementsByClassName('age');
	for(var i = 0; i < x.length; i++){
	    x[i].innerText = age;
    }
}



$(document).ready(function(){
	setJumboTron();
	setAge();
});

$(window).resize(function(){
	setJumboTron();
});