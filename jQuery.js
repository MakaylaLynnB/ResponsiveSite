var sourceSwap = function () {
	var $this = $(this);
	var newSource = $this.data('alt-src');
	$this.data('alt-src', $this.attr('src'));
	$this.attr('src', newSource);
};

$(document).ready(function() {
$("#login").click(function() {
	alert("LOGIN system not yet configured.");
}
);

$('#name').hover(function() {
	$(this).css("color", "black");
},

     function(){
    $(this).css("color", "grey");
}
);


$(function () {
	$('img.image').hover(sourceSwap, sourceSwap);

}
);
});

$(document).ready(function() {
    var showChar = 150; 
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  document.body.className = "night";
	else
	  document.body.className = "day";
});

$( document ).ready( function(){
  
  $('#large').click( function(){
    $('#text').css("font-size", "30px");
});

      $('#normal').click( function(){
    $('#text').css("font-size", "16px");
  });
  
        $('#small').click( function(){
    $('#text').css("font-size", "10px");

  });
  });