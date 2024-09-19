let slideIndex = 0;
showSlides(slideIndex);


// Fonction pour avancer d'une diapositive 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher la diapositive actuelle
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// Fonction pour avancer automatiquement
function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

// Appeler autoShowSlides toutes les 3 secondes (3000 millisecondes)
setInterval(autoShowSlides, 2000);