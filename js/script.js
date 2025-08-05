// This event listener ensures that the code runs only after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', function() {

    console.log("Document is ready. Let's add some interactivity!");

    // Example: Smooth scrolling for anchor links (if you add them)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    // You can add more JavaScript functionality here.
    // For example, handling a mobile navigation menu, image sliders, or fetching data from an API.

});