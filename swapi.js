// Write your swapi code in this file!
let openingCrawlButton = document.querySelector('#crawlBtn')
let planetInput = document.querySelector('#planetInput')
let findPlanet = document.querySelector('#findPlanet')
let planetData = document.querySelector('#planetData')
let droid2 = document.querySelector('#droid-2')
let droid3 = document.querySelector('#droid-3')


function fetchData (type, num) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/${type}/${num}`, {header: {
    "Access-Control-Allow-Origin": "*",
    mode: "no-cors"
  }})
  .then(response => response.json())
}

function getOpeningCrawl () {
  fetchData ('films', 1)
    .then(data => {
    crawlDiv = document.querySelector('#crawlDiv');
    crawlDiv.innerHTML = data.opening_crawl;
  });
};

function getPlanet () {
  // planetInput.preventDefault()
  let planetNumber = planetInput.value
  fetchData('planets', planetNumber)
    .then(data =>
    planetData.innerHTML = `Name: ${data.name}, Climate: ${data.climate}`)
}

function getDroids () {
  let droids = [2,3]
  droids.map(function(d) {
    fetchData('people', d)
      .then(data => {
        if (d === 2) {
          droid2.innerHTML = `Name: ${data.name}, Height: ${data.height}, Mass: ${data.mass}`
        } else {
          droid3.innerHTML = `Name: ${data.name}, Height: ${data.height}, Mass: ${data.mass}`
        }
    })
  })
}


document.addEventListener('DOMContentLoaded', getDroids ())
openingCrawlButton.addEventListener('click', getOpeningCrawl)
findPlanet.addEventListener('click', getPlanet)
