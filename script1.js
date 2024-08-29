
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


});

// Header Jump To Buttons    
function scrollJump(sectionName){
    document.getElementById(`${sectionName}`).scrollIntoView({    
        behavior: "smooth"
    });

}

document.getElementById("button-download-cv").addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "resume_luiz_leal.pdf";
    link.download = "resume_luiz_leal";
    link.click();
});


document.getElementById("footer-email-copy").addEventListener("click", function(){
    const text = " lealrodriguesjob@gmail.com";
    navigator.clipboard.writeText(text);
});


