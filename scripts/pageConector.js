fetch('top-bar.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector(".top-bar").innerHTML = data;
    })


fetch ("footer.html") 
    .then(res => res.text())
    .then(data => {
        document.querySelector(".footer").innerHTML = data;
    });

// side-bar display 

document.addEventListener("DOMContentLoaded", function () {
    function displaySidebar() {
        const toggle = document.querySelector('.toggle');
        const sidebar = document.querySelector('.side-bar');

        menubar.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        console.log("SIDEBAR function initialized")
    }
})
