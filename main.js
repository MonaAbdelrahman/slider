// get sliders items | Array.from [es6 features]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get numbers of sliders
var slideCount= sliderImages.length;

// set current slide
var currentSlide=1;

// slide number element
var slideNumberElement = document.getElementById('slide-number');

// previous and next buttons
var nextButton= document.getElementById('next');
var prevButton= document.getElementById('prev');

//hanle click on prev and next buttons
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

// create the main ul element
var paginationElement =document.createElement('ul');

//set id on created ul element
paginationElement.setAttribute('id','pagination-ul');

//create list items based on slides count
for(var i=1; i<=slideCount;i++){

    // create the li 
    var paginationItem= document.createElement('li');

    // set custom attribute
    paginationItem.setAttribute('data-index',i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));

   // append items to the main ul list 
    paginationElement.appendChild(paginationItem);
}
// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

// get the new created ul
var paginationCreatedUl =document.getElementById('pagination-ul');

// get pagination items | Array.from [es6 features]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// looop through all bullets items
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}


//trigger the ckecker function
theChecker();


// next slide function
function nextSlide(){

    if(nextButton.classList.contains('disabled')){
    // do nothing
    return false;
    }else{
        currentSlide++;
        theChecker();
    }
}

// prev slide function
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        // do nothing
        return false;
        }else{
            currentSlide--;
            theChecker();
        }
}

// ceate the checker function
function theChecker(){
    // set the slide number
    slideNumberElement.textContent ='slide #' + (currentSlide) + 'of ' + (slideCount);

    // remove all active classes
    removeAllActive();

    // set active class on current slide
sliderImages[currentSlide - 1].classList.add('active');

// set active class on current pagination item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');

// check if current slide is the first
if(currentSlide == 1){
    // add disabled class on previous button
    prevButton.classList.add('disabled');
}else{
    // remove disabled class from previous button
    prevButton.classList.remove('disabled');
}
}
// check if current slide is the last
if(currentSlide == slideCount){
    // add disabled class on next button
    nextButton.classList.add('disabled');
}else{
    // remove disabled class from next button
    nextButton.classList.remove('disabled');

}

// remove all active classes from images and pagination bullets
function removeAllActive(){
    // loop through images
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    // loop through pagination bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });

}


