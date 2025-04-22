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


  /* //brightness
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
    */

    
    //parent
    const sliderBox = document.querySelector('#sliderBox');
    //opacity
    const sliderOpacity = document.querySelector('#sliderOpacity');
    const numOpacity = document.querySelector('#numOpacity');
    //saturation
    const sliderSaturation = document.querySelector('#sliderSaturation');
    const numSaturation = document.querySelector('#numSaturation');
    //brightness
    const sliderBrightness = document.querySelector('#sliderBrightness');
    const numBrightness = document.querySelector('#numBrightness');
    //hue-rotate
    const sliderHue = document.querySelector('#sliderHue');
    const numHue = document.querySelector('#numHue');
    //grayscale
    const sliderGray = document.querySelector('#sliderGray');
    const numGray = document.querySelector('#numGray');
    //blur
    const sliderBlur = document.querySelector('#sliderBlur');
    const numBlur = document.querySelector('#numBlur');

    sliderBox.addEventListener('change', function(){
        filterConfig = 'opacity(' + sliderOpacity.value + '%)'
                       + 'saturate(' + sliderSaturation.value + '%)'
                       +'brightness(' + sliderBrightness.value + '%)'
                       + 'hue-rotate(' + sliderHue.value + 'deg)'
                       + 'grayscale(' + sliderGray.value + '%)'
                       + 'blur(' + sliderBlur.value + 'px)';

        theImg.style.filter = filterConfig;
        //update numbers
        numOpacity.textContent = sliderOpacity.value;
        numSaturation.textContent = sliderSaturation.value;
        numBrightness.textContent = sliderBrightness.value;
        numHue.textContent = sliderHue.value;
        numGray.textContent = sliderGray.value;
        numBlur.textContent = sliderBlur.value;
    });
   
});