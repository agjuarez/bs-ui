

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Isotope after each image loads
$('.grid').imagesLoaded().progress( function() {
  $grid.masonry();
}); 

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});
$('a[data-toggle=tab]').each(function () {
  var $this = $(this);

  $this.on('shown.bs.tab', function () {
    $('.grid').imagesLoaded( function () {
      $grid.masonry({
        columnWidth: '.grid-item',
        itemSelector: '.grid-item'
      });   
    });  
  });
});