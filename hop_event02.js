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

    //brightness
    const sliderBrightness = document.querySelector('#sliderBrightness');
    const numBrightness = document.querySelector('#numBrightness');
    sliderBrightness.addEventListener('input', function(){
       filterConfig = 'brightness(' + sliderBrightness.value + '%)';
       theImg.style.filter = filterConfig;
       numBrightness.textContent = sliderBrightness.value;
    });


    //grayscale
    const sliderGray = document.querySelector('#sliderGray');
    const numGray = document.querySelector('#numGray');
    sliderGray.addEventListener('input', function(){
       filterConfig = 'grayscale(' + sliderGray.value + '%)';
       theImg.style.filter = filterConfig;
       numGray.textContent = sliderGray.value;
    });


});