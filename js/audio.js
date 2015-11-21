// var audio = document.querySelectorAll("audio");
//
// for (var i = 0; i < audio.length; i++) {
// 	if (audio[i].onplay) {
// 		$("audio").not($(this)).get(0).pause();
// 	}
// }

$('audio').bind('play', function() {
    activated = this;
    $('audio').each(function() {
        if(this != activated) this.pause();
    });
});


$('audio').bind('ended', function() {
	activated = this;
    index = $('audio').index(activated);
	$('audio').eq(index+1).get(0).play();
})
