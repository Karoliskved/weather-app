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
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${system}&APPID=4e5d61ac6ce3845af2774671cb952eb3`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZLFNBQVMsT0FBTztBQUNyRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygndGVzdCcpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0dpZicpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZScpO1xuY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVySWNvbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5jb25zdCBkZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVnJyk7XG5jb25zdCBndXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1c3QnKTtcbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5c3RlbScpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZycpO1xuY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlckluZm8nKTtcbmNvbnN0IHNlbGVjdGVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0ZWRMb2NhdGlvbicpO1xubGV0IHN5c3RlbSA9ICdtZXRyaWMnO1xubGV0IHRlbXBTeXN0ZW0gPSAnQyc7XG5sZXQgc3BlZWRTeXN0ZW0gPSAna20vaCc7XG5jaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBzeXN0ZW0gPSAnaW1wZXJpYWwnO1xuICAgIHRlbXBTeXN0ZW0gPSAnRic7XG4gICAgc3BlZWRTeXN0ZW0gPSAnbXBoJztcbiAgICBnZXRJbmZvKCk7XG4gIH0gZWxzZSB7XG4gICAgdGVtcFN5c3RlbSA9ICdGJztcbiAgICBzeXN0ZW0gPSAnbWV0cmljJztcbiAgICBzcGVlZFN5c3RlbSA9ICdrbS9oJztcbiAgICBnZXRJbmZvKCk7XG4gIH1cbn0pO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldEluZm8oKTtcbiAgd2VhdGhlckluZm8uaGlkZGVuID0gZmFsc2U7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgY29uc3Qgc2VhcmNoVmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgbG9hZGluZy50ZXh0Q29udGVudCA9ICdsb2FkaW5nJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaFZhbHVlfSZ1bml0cz0ke3N5c3RlbX0mQVBQSUQ9NGU1ZDYxYWM2Y2UzODQ1YWYyNzc0NjcxY2I5NTJlYjNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgKTtcbiAgLy90ZXN0aW5nIGFzeW5jIHNldHRpbmdcbiAgLyogYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndGltZW91dCcpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIDIwMDApXG4gICk7Ki9cbiAgbG9hZGluZy50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBnaWZEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhnaWZEYXRhKTtcbiAgc2VsZWN0ZWRMb2NhdGlvbi50ZXh0Q29udGVudCA9IHNlYXJjaFZhbHVlO1xuICBjb25zdCByZWxldmFudERhdGEgPSBjcmVhdGVPYmooZ2lmRGF0YSk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEudGVtcCArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KSArIHRlbXBTeXN0ZW07XG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9XG4gICAgcmVsZXZhbnREYXRhLmZlZWxzTGlrZSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMTc2KSArIHRlbXBTeXN0ZW07XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLmh1bWlkaXR5ICsgJyUnO1xuICB3ZWF0aGVyLnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLndlYXRoZXI7XG4gIHdlYXRoZXJJY29uLnNyYyA9IHJlbGV2YW50RGF0YS53ZWF0aGVySWNvbjtcbiAgd2luZC50ZXh0Q29udGVudCA9IHJlbGV2YW50RGF0YS53aW5kICsgc3BlZWRTeXN0ZW07XG4gIGRlZy50ZXh0Q29udGVudCA9IHJlbGV2YW50RGF0YS5kZWcgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nik7XG4gIGd1c3QudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEuZ3VzdCArIHNwZWVkU3lzdGVtO1xufVxuZnVuY3Rpb24gY3JlYXRlT2JqKGRhdGEpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICAvL2dldCBkYXRhIGZyb20gb2JqZWN0XG4gIGlmIChkYXRhLm1haW4udGVtcCAhPSB1bmRlZmluZWQpIG9iai50ZW1wID0gZGF0YS5tYWluLnRlbXA7XG4gIGVsc2Ugb2JqLnRlbXAgPSAnbm8gaW5mbyc7XG4gIGlmIChkYXRhLm1haW4uZmVlbHNfbGlrZSAhPSB1bmRlZmluZWQpIG9iai5mZWVsc0xpa2UgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgZWxzZSBvYmouZmVlbHNMaWtlID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS5tYWluLmh1bWlkaXR5ICE9IHVuZGVmaW5lZCkgb2JqLmh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICBlbHNlIG9iai5odW1pZGl0eSA9ICdubyBpbmZvJztcbiAgaWYgKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiAhPSB1bmRlZmluZWQpXG4gICAgb2JqLndlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGlmIChkYXRhLndlYXRoZXJbMF0uaWNvbiAhPSB1bmRlZmluZWQpXG4gICAgb2JqLndlYXRoZXJJY29uID1cbiAgICAgICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nICsgZGF0YS53ZWF0aGVyWzBdLmljb24gKyAnQDJ4LnBuZyc7XG4gIGVsc2Ugb2JqLndlYXRoZXJJY29uID0gJyc7XG4gIGlmIChkYXRhLndpbmQuc3BlZWQgIT0gdW5kZWZpbmVkKSBvYmoud2luZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgZWxzZSBvYmoud2luZCA9ICdubyBpbmZvJztcbiAgaWYgKGRhdGEud2luZC5kZWcgIT0gdW5kZWZpbmVkKSBvYmouZGVnID0gZGF0YS53aW5kLmRlZztcbiAgZWxzZSBvYmouZGVnID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS53aW5kLmd1c3QgIT0gdW5kZWZpbmVkKSBvYmouZ3VzdCA9IGRhdGEud2luZC5ndXN0O1xuICBlbHNlIG9iai5ndXN0ID0gJ25vIGluZm8nO1xuICByZXR1cm4gb2JqO1xufVxuY29uc29sZS5sb2coJ3Rlc3QnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==