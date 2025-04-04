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
 