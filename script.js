const apiKey = config.MY_API_TOKEN;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

//1st way
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 2nd way
async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  let data = await response.json();
  console.log(data);

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector("#min").innerHTML =
    Math.floor(data.main.temp_min) + "°C";
  document.querySelector("#max").innerHTML =
    Math.floor(data.main.temp_max) + "°C";
  document.querySelector("#desc").innerHTML = data.weather[0].description;
  document.querySelector("#feel").innerHTML =
    Math.floor(data.main.feels_like) + "°C";
  document.querySelector("#pressure").innerHTML = data.main.pressure + "hPa";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + "m/s";

  const img = document.querySelector("#image");
  const imgcode = data.weather[0].icon;
  img.setAttribute("src", `icons/${imgcode}.png`);
  // const imgcode = "01d";
  console.log(imgcode);

  switch (imgcode) {
    case "01d":
    case "01n":
      document.body.style.backgroundImage = `url("icons/clear-sky.gif")`;
      break;
    case "02d":
    case "02n":
      document.body.style.backgroundImage = `url("icons/few clouds.gif")`;
      break;
    case "03d":
    case "03n":
      document.body.style.backgroundImage = `url("icons/scatter-cloud.gif")`;
      break;
    case "04d":
    case "04n":
      document.body.style.backgroundImage = `url("icons/broken-cloud.gif")`;
      break;
    case "09d":
    case "09n":
      document.body.style.backgroundImage = `url("icons/shower-rain.gif")`;
      break;
    case "10d":
    case "10n":
      document.body.style.backgroundImage = `url("icons/rain.gif")`;
      break;
    case "11d":
    case "11n":
      document.body.style.backgroundImage = `url("icons/thunderstorm.gif")`;
      break;
    case "13d":
    case "13n":
      document.body.style.backgroundImage = `url("icons/snow.gif")`;
      break;
    case "50d":
    case "50n":
      document.body.style.backgroundImage = `url("icons/mist.gif")`;
      break;

    default:
      alert("Default case");
      break;
  }
}

const searchBox = document.querySelector(".main .first input ");
const searchButton = document.querySelector(".main .first button ");
// console.log(searchButton)

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
  // console.log(searchBox.value);
});
