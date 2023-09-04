const picture = document.querySelectorAll('.thumbs-img');
picture.forEach(image => {
    image.addEventListener('mouseover', function(){
document.getElementById("gallery-picture").setAttribute("src", image.getAttribute("src"));
document.getElementById("gallery-title").textContent = image.getAttribute("data-title");
document.getElementById("gallery-description").textContent = image.getAttribute("data-description");
});
});
