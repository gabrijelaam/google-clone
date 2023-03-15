const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event){
    if(event.code === "Enter") {
        search();
    }
});


function search() {
    const input = searchInput.value; 

    window.location.href = "https://www.google.com/search?q=" + input + "&oq="+ input +"+&aqs=chrome..69i57j0i131i433i512j46i512j46i131i433i512j0i433i512j69i60l3.2016j0j4&sourceid=chrome&ie=UTF-8"
}

