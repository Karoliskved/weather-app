console.log('test');
const button = document.querySelector('#newGif');
const input = document.querySelector('#search');
const temp = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const feelsLike = document.querySelector('#feelsLike');
const weather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weatherIcon');
const wind = document.querySelector('#wind');
const deg = document.querySelector('#deg');
const gust = document.querySelector('#gust');
const check = document.querySelector('#system');
const body = document.querySelector('body');
const loading = document.querySelector('#loading');
const weatherInfo = document.querySelector('#weatherInfo');
const selectedLocation = document.querySelector('#selectedLocation');
let system = 'metric';
let tempSystem = 'C';
let speedSystem = 'km/h';
check.addEventListener('change', (e) => {
  if (e.currentTarget.checked) {
    system = 'imperial';
    tempSystem = 'F';
    speedSystem = 'mph';
    getInfo();
  } else {
    tempSystem = 'F';
    system = 'metric';
    speedSystem = 'km/h';
    getInfo();
  }
});

button.addEventListener('click', () => {
  getInfo();
  weatherInfo.hidden = false;
});

async function getInfo() {
  const searchValue = input.value;
  loading.textContent = 'loading';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${system}&APPID=4e5d61ac6ce3845af2774671cb952eb3`,
    { mode: 'cors' }
  );
  //testing async setting
  /* await new Promise((resolve) =>
    setTimeout(() => {
      console.log('timeout');
      resolve();
    }, 2000)
  );*/
  loading.textContent = '';
  const gifData = await response.json();
  console.log(gifData);
  selectedLocation.textContent = searchValue;
  const relevantData = createObj(gifData);
  temp.textContent = relevantData.temp + String.fromCharCode(176) + tempSystem;
  feelsLike.textContent =
    relevantData.feelsLike + String.fromCharCode(176) + tempSystem;
  humidity.textContent = relevantData.humidity + '%';
  weather.textContent = relevantData.weather;
  weatherIcon.src = relevantData.weatherIcon;
  wind.textContent = relevantData.wind + speedSystem;
  deg.textContent = relevantData.deg + String.fromCharCode(176);
  gust.textContent = relevantData.gust + speedSystem;
}
function createObj(data) {
  let obj = {};
  //get data from object
  if (data.main.temp != undefined) obj.temp = data.main.temp;
  else obj.temp = 'no info';
  if (data.main.feels_like != undefined) obj.feelsLike = data.main.feels_like;
  else obj.feelsLike = 'no info';
  if (data.main.humidity != undefined) obj.humidity = data.main.humidity;
  else obj.humidity = 'no info';
  if (data.weather[0].description != undefined)
    obj.weather = data.weather[0].description;
  if (data.weather[0].icon != undefined)
    obj.weatherIcon =
      'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
  else obj.weatherIcon = '';
  if (data.wind.speed != undefined) obj.wind = data.wind.speed;
  else obj.wind = 'no info';
  if (data.wind.deg != undefined) obj.deg = data.wind.deg;
  else obj.deg = 'no info';
  if (data.wind.gust != undefined) obj.gust = data.wind.gust;
  else obj.gust = 'no info';
  return obj;
}
console.log('test');
