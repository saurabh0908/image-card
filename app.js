
let grid = document.querySelector('.grid');
let spinner = new Spinner().spin(grid);

let msnry = new Masonry(grid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  initLayout: false
});


imagesLoaded(grid).on('progress', function() {
  // layout masonry after each image load
  spinner.stop();
  msnry.layout();
})
