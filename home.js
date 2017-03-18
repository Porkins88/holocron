// Fading in the homepage after fly-in text
$(function(){
	$('.menuBar').hide().fadeIn(6000);
});
$(function(){
	$('#white').hide().fadeIn(6000);
});
$(function(){
	$('#white2').hide().fadeIn(6000);
});
$(function(){
	$('#contact').hide().fadeIn(6000);
});

// Homepage Pulsing Image
$(function(){
	$('#bgImg').hide().fadeTo(6000, 1);
	setInterval(function(){
	$('#bgImg').fadeTo(4000, 0.5);
	$('#bgImg').fadeTo(4000, 1);
})
});
// Shell Page Pulsing Image
$(function(){
	$('#holoImg').hide().fadeTo(3000, 1);
	setInterval(function(){
	$('#holoImg').fadeTo(2000, 0.5);
	$('#holoImg').fadeTo(2000, 1);
})
});


// fly-in text function
$(function() {
	setTimeout(function() {
		$('.flyText').removeClass('hidden');
	}, 500);
})();

// innerHTML change on menu li hover
function scrub(){
	$('#outputDiv').html('');
}

function radiohead(){
	$('#outputDiv').html('Thom Yorke has a lazy eye.');
}
function starWars(){
	$('#outputDiv').html('May the Schwartz be with you.');
}
function disneyland(){
	$('#outputDiv').html('Churros!');
}
function music(){
	$('#outputDiv').html('Talk about it!');
}
// -----------------------------------------------//



