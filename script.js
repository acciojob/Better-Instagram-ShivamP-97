//your code here
let draggedDiv = null;

const imageDivs = document.querySelectorAll('.image');

imageDivs.forEach((div) => {
  div.addEventListener('dragstart', (e) => {
    draggedDiv = e.target;
    e.target.classList.add('selected'); 
  });

  div.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); 
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();

    if (draggedDiv !== e.target) {
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
