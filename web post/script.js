const gridContainer = document.querySelector('.grid-container');

function resizeGridItems() {
  const gridItems = document.querySelectorAll('.grid-item');
  const rowHeight = parseInt(window.getComputedStyle(gridContainer).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(gridContainer).getPropertyValue('grid-row-gap'));
  const gridContainerWidth = gridContainer.getBoundingClientRect().width;

  gridItems.forEach(item => {
    const itemHeight = item.querySelector('img').getBoundingClientRect().height;
    const itemRowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
    const itemColSpan = Math.ceil(item.getBoundingClientRect().width / gridContainerWidth * 3);
    item.style.gridRowEnd = `span ${itemRowSpan}`;
    item.style.gridColumnEnd = `span ${itemColSpan}`;
