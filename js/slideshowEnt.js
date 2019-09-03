let sliderImagesEnt = document.getElementsByClassName('image-container');
let arrowLeftEnt = document.getElementById('prev-arrow');
let arrowRightEnt = document.getElementById('next-arrow');
currentEnt = 0;
timeoutHandleEnt = 0;

startSlideEnt();
showAutoSlidesEnt();


function resetEnt(){
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImagesEnt[i].style.display = "none";
    }
}

function startSlideEnt(){
    resetEnt();
    sliderImagesEnt[0].style.display = "block";
}

function slideLeftEnt(){
    resetEnt();
    sliderImagesEnt[currentEnt-1].style.display = 'block';
    currentEnt--;
}

function slideRightEnt(){
    resetEnt();
    sliderImagesEnt[currentEnt+1].style.display = 'block';
    currentEnt++;
}

arrowLeftEnt.addEventListener('click', function(){
    clearTimeout(timeoutHandleEnt);
    if (currentEnt === 0)
    {
        currentEnt = sliderImagesEnt.length;
    }
    slideLeftEnt();
    showAutoSlidesEnt();
});

arrowRightEnt.addEventListener('click', function(){
    clearTimeout(timeoutHandleEnt);
    if (currentEnt === sliderImagesEnt.length - 1)
    {
        currentEnt = -1;
    }
    slideRightEnt();
    showAutoSlidesEnt();
});

function showAutoSlidesEnt() {
    timeoutHandleEnt = setTimeout(function(){
        if (currentEnt === sliderImagesEnt.length - 1)
        {
            currentEnt = -1;
        }
        slideRightEnt();
        showAutoSlidesEnt();
    }, 7000);
}
