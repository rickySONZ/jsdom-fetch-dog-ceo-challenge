console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchImages()
    fetchBreeds()
})
    
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then(response => response.json())
    .then(data => addImageToDom(data))
}

function addImageToDom(data){

    imgContainer = document.getElementById("dog-image-container")

    for (const e of data['message']) {
        const img = document.createElement("img")
        img.src = e
        imgContainer.appendChild(img)
    }
}

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => addBreedsToDom(data))
}

function addBreedsToDom(data){

    breedList = document.getElementById("dog-breeds")

    for (breed in data['message']) {
        let li = document.createElement("li")
        li.innerText = breed
        li.click = true
        breedList.appendChild(li)
        li.addEventListener("click", function(e) {
            e.target.style.color = "red";
        })
    }
}
