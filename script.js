let draggedElem = null;

const imageDivs = document.querySelectorAll('.image');

imageDivs.forEach((div) => {
  // Start dragging
  div.addEventListener('dragstart', (e) => {
    draggedElem = e.target;
    e.target.classList.add('selected');
  });

  // End dragging
  div.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  // Allow drop
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Optional: visual effect when dragged over
  div.addEventListener('dragenter', (e) => {
    e.preventDefault(); // Needed for dragover to work consistently
    e.target.classList.add('highlight');
  });

  // Remove highlight on drag leave
  div.addEventListener('dragleave', (e) => {
    e.target.classList.remove('highlight');
  });

  // On drop, swap background images
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.classList.remove('highlight');

    const dropTarget = e.target.closest('.image');

    if (draggedElem && dropTarget && draggedElem !== dropTarget) {
      const draggedImg = getComputedStyle(draggedElem).backgroundImage;
      const dropImg = getComputedStyle(dropTarget).backgroundImage;

      // Swap background images
      draggedElem.style.backgroundImage = dropImg;
      dropTarget.style.backgroundImage = draggedImg;
    }
  });
});
