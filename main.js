'use strict';

let img = document.querySelector('img');
let dogButton = document.querySelector('button');

let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#cityInput');
let cityInfoList = document.querySelector('#cityInfoList');
let h3 = document.querySelector('h3');
let city = '';
let temperature = document.createElement('li');
let wind = document.createElement('li');
let description = document.createElement('li');

dogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      img.src = data.message;
    })
})

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  city = cityInput.value;
  fetch(encodeURI(`https://goweather.herokuapp.com/weather/${cityInput.value}`))
    .then(response => response.json())

    .then(data => {

      temperature.className = "list-group-item";
      wind.className = "list-group-item";
      description.className = "list-group-item";

      h3.innerText = city.toUpperCase() + ':';
      temperature.innerText = `Temperature: ${data.temperature}`;
      wind.innerText = `Wind: ${data.wind}`;
      description.innerText = `Description: ${data.description}`;

      cityInfoList.appendChild(temperature);
      cityInfoList.appendChild(wind);
      cityInfoList.appendChild(description);
    })

  cityInput.value = '';
})