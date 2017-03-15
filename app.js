
var root = document.getElementById('root');
var grid = document.querySelector('.grid');
var spinner = new Spinner().spin(grid);
// root.style.visibility = 'hidden';
root.style.display = 'none';
var msnry = new Masonry(grid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 1
});


imagesLoaded(grid).on('progress', function() {
  // layout masonry after each image load
  spinner.stop();
  msnry.layout();
  // root.style.visibility = 'visible';
  root.style.display = 'block';
});
