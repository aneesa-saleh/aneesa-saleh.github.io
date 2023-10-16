var scrolling = false;

$(document).ready(function () {
    //call the onScroll method when the user is scrolling
    $(document).on("scroll", onScroll);
    
    //when one of the navigation tabs is clicked, call this function
    $('nav a').on('click', function(e) {
      //this is set true to prevent onScroll from firing during automated scroll
      scrolling = true;

      //get the data-scroll attribute of the clicked nav link
      var scrollAnchor = $(this).attr('data-scroll'),
      //get the section with data-anchor attribute equal to data-scroll, get its top coordinate and subtract 40 to compensate for the navbar, i.e go up by 40
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 40;
  //animate the scroll to that point
  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500);
  
      //this is to compensate for the animation time
  setTimeout(function(){
    scrolling = false;
  },450);
})
  
 //make button wider on hover
$('.send').hover(function() {
    $(this).stop().animate({ width: '33%' }, 500);
}, function() {
    $(this).stop().animate({ width: '30%' }, 500);
});
  
});

//this function highlights nav link when user scrolls to a particular section
function onScroll(event){
    //do not highlight any nav during automated scroll
    if(scrolling)
      return;
    
  //get coordinate of the top of the screen relative to page
    var scrollPos = $(document).scrollTop();
    //for each of the nav links
    $('#nav-list a').each(function () {
        var currLink = $(this);
        //href is linked to the corresponding section id, get that section
        var refElement = $(currLink.attr("href"));
        //if scroll position is up to the top of the element - 60 and it's not past the bottom of the element - 61 (to account for the next section's offset))
        if (refElement.offset().top - 60 <= scrollPos && refElement.offset().top + refElement.height() - 61 > scrollPos) {
              //add the active class to this one
              currLink.addClass("active");
        }
        else{
              //remove the active class
              currLink.removeClass("active");
        }
    });
  
}