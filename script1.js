
document.addEventListener('DOMContentLoaded', function() {

    // Light Mode Toggle
    const btnLight = document.getElementById("button-light");
    btnLight.addEventListener('click', function() {

        const iconLight = btnLight.querySelector('i');

        if(iconLight.classList.contains('bi-sun')){
            iconLight.classList.remove('bi-sun');
            iconLight.classList.add('bi-moon');
        } else {
            iconLight.classList.remove('bi-moon');
            iconLight.classList.add('bi-sun');
        }

        if(document.documentElement.getAttribute('data-theme') === 'dark'){
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

    });



    // Play Preview Gifs On Hover
    const gifs = document.querySelectorAll('.project-img');
    const projectArea = document.querySelectorAll('.project'); 

    gifs.forEach(gif =>{

        const static = gif.src;
        const animated = gif.getAttribute('data-gif');

        gif.parentElement.addEventListener('mouseenter', function() {
            gif.src = animated;
        });

        gif.parentElement.addEventListener('mouseleave', function(){
            gif.src = static;
        });

    });


    // Carousel Jumpstart
    updateSlidePosition();

});

// Header Jump To Buttons    
function scrollJump(sectionName){
    document.getElementById(`${sectionName}`).scrollIntoView({    
        behavior: "smooth"
    });


}


// Carousel 

let currentProject = 0;

function updateProjectPosition(){
    const carousel = document.querySelector('#carrousel-projects');
    carousel.style.transform = `translateX(-${currentProject * (100 / 3)}%)`;
    updateNavArrows();
}

function updateNavArrows(){
    const prevBtn = document.querySelector('#button-carrousel-previous');
    const nextBtn = document.querySelector('#button-carrousel-next');
    const totalProjects = document.querySelectorAll('.project').length;

    if(currentProject === 0){
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if(currentProject >= totalProjects - 3){
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }


}

function previousProject(){
    if(currentProject > 0){
        currentProject--;
        updateProjectPosition();
    }
}

function nextProject(){
    const totalProjects = document.querySelectorAll('.project').length;
    if(currentProject < totalProjects - 3){
        currentProject++;
        updateProjectPosition();
    }
}








