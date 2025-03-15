
window.addEventListener("scroll", function () {
    let nav = document.getElementById("navbar"); 
    let navbarLinks = document.querySelectorAll(".nav-link"); // Select all elements with class nav-link
    let button = this.document.querySelector(".join");
    let img = document.getElementById("logo");
    if (window.innerWidth <= 992) return; // To Work on big Screen only
    if (window.scrollY > 100) { 
        nav.classList.add("bg-light"); 
        nav.classList.remove("bg-transparent"); 
        nav.classList.add("shadow"); // Add shadow to navbar
        // Loop through each nav-link element and apply the class changes
        navbarLinks.forEach(link => {
            link.classList.add("text-dark");
            link.classList.remove("text-white");
        });
        button.classList.add("btn-danger");
        button.classList.remove("btn-light");
        img.src = "images/fitness-dark.png"; // Replace to second image
    } else {
        nav.classList.add("bg-transparent"); 
        nav.classList.remove("bg-light"); 
        nav.classList.remove("shadow"); // Delete shadow from navbar
        // Loop through each nav-link element and revert the class changes
        navbarLinks.forEach(link => {
            link.classList.add("text-white");
            link.classList.remove("text-dark");
        });
        button.classList.add("btn-light");
        button.classList.remove("btn-danger");
        img.src = "images/fitness-light.png"; // Back to Orignal image
    }
});
