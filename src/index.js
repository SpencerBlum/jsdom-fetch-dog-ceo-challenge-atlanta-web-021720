console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
  .then(resp => resp.json())
//   .then(json => console.log(json))
//   .then(json => json.message.forEach (dog => renderDog(dog)) )
.then(data => {
  


    for (const message of data.message) {
        let dogImage = document.createElement('img')
        dogImage.src = message
        dogImage.height = 150
        dogImage.widtht = 150
        let dogParent = document.getElementById("dog-image-container")
        dogParent.append(dogImage)
    }
});


// console.log(breedArray)
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    let allBreeds = Object.keys(data.message);
    renderBreeds(allBreeds)
    runBreeds(allBreeds)
  });

  function runBreeds(allBreeds) {
  let filter = document.querySelector("#breed-dropdown")
  // console.log(breedArray)
  filter.addEventListener("change", function(e){
      let tempArray = []
     console.log(allBreeds.length)
     allBreeds.forEach(breed => {
       if (breed.charAt(0) === e.target.value) {
         tempArray.push(breed)
       }        
}) 
  renderBreeds(tempArray)
console.log(tempArray)
  }.bind(allBreeds) ) 
}

})

function renderBreeds(breeds){
  console.log("Working")
  let breedContainer = document.querySelector("#dog-breeds")
  breedContainer.innerHTML = null
  breeds.forEach(breed => {
    let newLi = document.createElement("li")
    newLi.innerText = breed
    breedContainer.appendChild(newLi)
  }) 
}


// function renderBreed(images) {
//   console.log(images)
// }







//   .then(data => {
//        for (const message in data.message) {
//            debugger
//         console.log(message)
//     const imageLocation = document.querySelector("dog-image-container")
//     const dogImg = document.createElement("img")
//     dogImg.src = message
//     console.log(message)
//     imageLocation.appendChild(dogImg)  
//   }
//   });


 



