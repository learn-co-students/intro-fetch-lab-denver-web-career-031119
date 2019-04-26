// Write your numbers code in this file!
const oneBtn = document.querySelector('#number-one')
const oneFactsDiv = document.querySelector('#one-facts')
const pickNum = document.querySelector('#pick-a-number')
const randFact = document.querySelector('#random-math-fact')
const yearHistory = document.querySelector('#year-history')
const allNumBtn = document.querySelector('#all-numbers-button')
const allNum = document.querySelector('#all-the-numbers')

function fetchNumData (num, type) {
  return fetch(`http://numbersapi.com/${num}/${type}`)
  .then(response => response.text())
}

function oneClick () {
  fetchNumData(1, 'trivia')
    .then(data => {
      oneFactsDiv.innerHTML = data
    })
}

function randNumFact () {
  let number = pickNum.value
  if (isNaN(number)) {
    randFact.innerHTML = "please enter a valid number"
    } else {
      fetchNumData(number, 'trivia')
        .then(data => {
          randFact.innerHTML = data
        })
    }
}

function yearFact (year) {
  fetchNumData(year, 'year')
    .then(data => {
    yearHistory.innerHTML = data
  })
}

function thisYear () {
  let currentYear = 2019
  yearFact(currentYear)
  setInterval(function() {
      currentYear -= 1
      yearFact(currentYear)
  }, 5000)
}

function allNumbers () {
  return fetch(`http://numbersapi.com/1..100`)
  .then(response => response.json())
  .then(data => {
    for (let key in data) {
      console.log(data[key])
      let ul = document.createElement('ul')
      let li = document.createElement('li') 
      li.innerHTML = `${data[key]}`
      ul.appendChild(li)
      allNum.appendChild(ul)
    }
  })
}

oneBtn.addEventListener('click', oneClick)
allNumBtn.addEventListener('click', allNumbers)
pickNum.addEventListener('change', randNumFact)
document.addEventListener('DOMContentLoaded', thisYear())
