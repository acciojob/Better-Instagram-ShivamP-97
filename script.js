const images = document.querySelectorAll(".image");
let draggedItem = null;
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.style.opacity = "0.5";
  });
  image.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1";
    draggedItem = null;
  });
  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  image.addEventListener("drop", (e) => {
    e.preventDefault();
    const dropTarget = e.target;
    if (draggedItem !== dropTarget) {
      const draggedItemBg = window.getComputedStyle(draggedItem).backgroundImage;
      const dropTargetBg = window.getComputedStyle(dropTarget).backgroundImage;
      draggedItem.style.backgroundImage = dropTargetBg;
      dropTarget.style.backgroundImage = draggedItemBg;
    }
  });
});