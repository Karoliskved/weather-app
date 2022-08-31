/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxZQUFZLFNBQVMsT0FBTztBQUNwRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygndGVzdCcpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0dpZicpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZScpO1xuY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVySWNvbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5jb25zdCBkZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVnJyk7XG5jb25zdCBndXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1c3QnKTtcbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5c3RlbScpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZycpO1xuY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlckluZm8nKTtcbmNvbnN0IHNlbGVjdGVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0ZWRMb2NhdGlvbicpO1xubGV0IHN5c3RlbSA9ICdtZXRyaWMnO1xubGV0IHRlbXBTeXN0ZW0gPSAnQyc7XG5sZXQgc3BlZWRTeXN0ZW0gPSAna20vaCc7XG5jaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBzeXN0ZW0gPSAnaW1wZXJpYWwnO1xuICAgIHRlbXBTeXN0ZW0gPSAnRic7XG4gICAgc3BlZWRTeXN0ZW0gPSAnbXBoJztcbiAgICBnZXRJbmZvKCk7XG4gIH0gZWxzZSB7XG4gICAgdGVtcFN5c3RlbSA9ICdGJztcbiAgICBzeXN0ZW0gPSAnbWV0cmljJztcbiAgICBzcGVlZFN5c3RlbSA9ICdrbS9oJztcbiAgICBnZXRJbmZvKCk7XG4gIH1cbn0pO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldEluZm8oKTtcbiAgd2VhdGhlckluZm8uaGlkZGVuID0gZmFsc2U7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgY29uc3Qgc2VhcmNoVmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgbG9hZGluZy50ZXh0Q29udGVudCA9ICdsb2FkaW5nJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7c2VhcmNoVmFsdWV9JnVuaXRzPSR7c3lzdGVtfSZBUFBJRD00ZTVkNjFhYzZjZTM4NDVhZjI3NzQ2NzFjYjk1MmViM2AsXG4gICAgeyBtb2RlOiAnY29ycycgfVxuICApO1xuICAvL3Rlc3RpbmcgYXN5bmMgc2V0dGluZ1xuICAvKiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3V0Jyk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgMjAwMClcbiAgKTsqL1xuICBsb2FkaW5nLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGdpZkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGdpZkRhdGEpO1xuICBzZWxlY3RlZExvY2F0aW9uLnRleHRDb250ZW50ID0gc2VhcmNoVmFsdWU7XG4gIGNvbnN0IHJlbGV2YW50RGF0YSA9IGNyZWF0ZU9iaihnaWZEYXRhKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IHJlbGV2YW50RGF0YS50ZW1wICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpICsgdGVtcFN5c3RlbTtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID1cbiAgICByZWxldmFudERhdGEuZmVlbHNMaWtlICsgU3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpICsgdGVtcFN5c3RlbTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEuaHVtaWRpdHkgKyAnJSc7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEud2VhdGhlcjtcbiAgd2VhdGhlckljb24uc3JjID0gcmVsZXZhbnREYXRhLndlYXRoZXJJY29uO1xuICB3aW5kLnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLndpbmQgKyBzcGVlZFN5c3RlbTtcbiAgZGVnLnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLmRlZyArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KTtcbiAgZ3VzdC50ZXh0Q29udGVudCA9IHJlbGV2YW50RGF0YS5ndXN0ICsgc3BlZWRTeXN0ZW07XG59XG5mdW5jdGlvbiBjcmVhdGVPYmooZGF0YSkge1xuICBsZXQgb2JqID0ge307XG4gIC8vZ2V0IGRhdGEgZnJvbSBvYmplY3RcbiAgaWYgKGRhdGEubWFpbi50ZW1wICE9IHVuZGVmaW5lZCkgb2JqLnRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgZWxzZSBvYmoudGVtcCA9ICdubyBpbmZvJztcbiAgaWYgKGRhdGEubWFpbi5mZWVsc19saWtlICE9IHVuZGVmaW5lZCkgb2JqLmZlZWxzTGlrZSA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xuICBlbHNlIG9iai5mZWVsc0xpa2UgPSAnbm8gaW5mbyc7XG4gIGlmIChkYXRhLm1haW4uaHVtaWRpdHkgIT0gdW5kZWZpbmVkKSBvYmouaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gIGVsc2Ugb2JqLmh1bWlkaXR5ID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uICE9IHVuZGVmaW5lZClcbiAgICBvYmoud2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgaWYgKGRhdGEud2VhdGhlclswXS5pY29uICE9IHVuZGVmaW5lZClcbiAgICBvYmoud2VhdGhlckljb24gPVxuICAgICAgJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLycgKyBkYXRhLndlYXRoZXJbMF0uaWNvbiArICdAMngucG5nJztcbiAgZWxzZSBvYmoud2VhdGhlckljb24gPSAnJztcbiAgaWYgKGRhdGEud2luZC5zcGVlZCAhPSB1bmRlZmluZWQpIG9iai53aW5kID0gZGF0YS53aW5kLnNwZWVkO1xuICBlbHNlIG9iai53aW5kID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS53aW5kLmRlZyAhPSB1bmRlZmluZWQpIG9iai5kZWcgPSBkYXRhLndpbmQuZGVnO1xuICBlbHNlIG9iai5kZWcgPSAnbm8gaW5mbyc7XG4gIGlmIChkYXRhLndpbmQuZ3VzdCAhPSB1bmRlZmluZWQpIG9iai5ndXN0ID0gZGF0YS53aW5kLmd1c3Q7XG4gIGVsc2Ugb2JqLmd1c3QgPSAnbm8gaW5mbyc7XG4gIHJldHVybiBvYmo7XG59XG5jb25zb2xlLmxvZygndGVzdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9