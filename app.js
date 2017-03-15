
let root = document.getElementById('root');
let grid = document.querySelector('.grid');
let spinner = new Spinner().spin(grid);
// root.style.visibility = 'hidden';
root.style.display = 'none';
let msnry = new Masonry(grid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});


imagesLoaded(grid).on('progress', function() {
  // layout masonry after each image load
  spinner.stop();
  msnry.layout();
  // root.style.visibility = 'visible';
  root.style.display = 'block';
});
