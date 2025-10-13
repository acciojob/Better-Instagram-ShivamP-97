let draggedElement = null;

// Select all draggable image containers
const images = document.querySelectorAll('.image');

images.forEach(image => {
  // Drag start
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    draggedElement.classList.add('selected');
  });

  // Drag end
  image.addEventListener('dragend', () => {
    draggedElement.classList.remove('selected');
  });

  // Drag over
  image.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (e.target !== draggedElement) {
      e.currentTarget.classList.add('drag-over');
    }
  });

  // Drag leave
  image.addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('drag-over');
  });

  // Drop
  image.addEventListener('drop', (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    target.classList.remove('drag-over');

    if (draggedElement !== target) {
      const draggedImg = draggedElement.querySelector('img');
      const targetImg = target.querySelector('img');

      // Swap image sources
      const tempSrc = draggedImg.src;
      draggedImg.src = targetImg.src;
      targetImg.src = tempSrc;
    }
  });
});
