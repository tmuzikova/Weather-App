function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let city = searchInputElement.value;

  //search temperature
  function displayTemp(response) {
    let currentTemp = document.querySelector(".current-temperature-value");
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
  }

  let apiKey = "6ddtf02cf3a61b83b8oaf010eba5f493";
  axios
    .get(
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`
    )
    .then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
