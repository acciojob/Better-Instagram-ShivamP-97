let draggedElement = null;

document.querySelectorAll('.image').forEach(image => {
  image.addEventListener('dragstart', e => {
    draggedElement = image;
    image.classList.add('dragging');
  });

  image.addEventListener('dragend', e => {
    image.classList.remove('dragging');
    draggedElement = null;
  });

  image.addEventListener('dragover', e => {
    e.preventDefault(); // Needed to allow dropping
  });

  image.addEventListener('drop', e => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.currentTarget) {
      const dragImg = draggedElement.querySelector('img');
      const dropImg = e.currentTarget.querySelector('img');

      // Swap the src attributes of the <img> elements
      const tempSrc = dragImg.src;
      dragImg.src = dropImg.src;
      dropImg.src = tempSrc;
    }
  });
});
