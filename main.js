const p = console.log;

// GET THE REFERENCES
const $container = document.querySelector(".main-content");
const $links = document.querySelectorAll(".nav");

// CREATE THE OBJECT TO STORE THE LOADED CONTENT
const contents = {};

fetch("./partials/home.html").then(function(response){
     return response.text();
    }).then(function(data){
    $container.innerHTML = data;
    })



const storeContents = function(nav) {
   if (!contents[nav]) {
         fetch(nav)
           .then(function(response){
             return response.text();
         })
           .then(function(data){
             contents[nav] = data;
             $container.innerHTML = contents[nav];
         })
        } else {
            $container.innerHTML = contents[nav];
        }
};


const handleClick =function (e) {
    e.preventDefault();
    let url = e.target.href;
    
  storeContents(url);
};

for (let i=0; i < $links.length; i++) {
    $links[i].addEventListener("click", handleClick);
}