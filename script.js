let draggedElement = null;

const images = document.querySelectorAll('.image');
        
images.forEach(
        image=>{
                //startdragging
        image.addEventListener('dragstart', function(e){

        draggedElement=image;
                    // alert(draggedElement)
                })

        image.addEventListener('dragenter', function(e){
        e.preventDefault();
                })

        image.addEventListener('dragover', function(e){
        e.preventDefault();
                })

                // image.addEventListener('dragend', function(e){
                //     draggedElement=null;
                //     // alert(draggedElement)
                // })

         image.addEventListener('drop', function(e){

                    // alert('dropped')
                    // if(e.target!==draggedElement){
                    // console.log(getComputedStyle(draggedElement))
        const draggedBg = getComputedStyle(draggedElement).backgroundImage;
        const targetBg = getComputedStyle(e.target).backgroundImage;
                        // alert(draggedBg)
                        //swap
        draggedElement.style.backgroundImage=targetBg;
        e.target.style.backgroundImage=draggedBg;

                    
                })
            }
        )