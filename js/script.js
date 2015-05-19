$(document).ready(function(){
    var isDown = false;
    var table = $(document);

    table.mousedown(function(){
	isDown = true;
    }).mouseup(function(){
	isDown = false;
    });

    $("td").mouseover(function(event){
	event.preventDefault();
	thisOne = $(this);
	if (isDown) {
	    if (thisOne.hasClass("clicked"))
		thisOne.removeClass("clicked");
	    else
		thisOne.addClass("clicked");
	}
    });
});
