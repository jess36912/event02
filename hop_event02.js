document.addEventListener("DOMContentLoaded", function() { 

    /* add code after this comment */

    let theImg = document.querySelector('#imgManipulated img');
    
    let Images = document.querySelectorAll('#thumbBox img');

    for(let img of Images)
    {
        console.log(img.src);
        let path = img.src;
        let pathArray = path.split('/');
        //console.log(pathArray);
        //console.log(pathArray[pathArray.length-1]);
        let theImagePath = 'images/medium/' + pathArray[pathArray.length-1];

        img.addEventListener('click', function(){
             theImg.src = theImagePath;

             //update title and alts
             document.querySelector("figcaption em").textContent = img.alt;
             document.querySelector("figcaption span").textContent = img.title;
        });
        
    }



});