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
let system = 'metric';
check.addEventListener('change', (e) => {
  if (e.currentTarget.checked) {
    system = 'imperial';
    getInfo();
  } else {
    system = 'metric';
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

  const relevantData = createObj(gifData);
  temp.textContent = relevantData.temp;
  feelsLike.textContent = relevantData.feelsLike;
  humidity.textContent = relevantData.humidity;
  weather.textContent = relevantData.weather;
  weatherIcon.src = relevantData.weatherIcon;
  wind.textContent = relevantData.wind;
  deg.textContent = relevantData.deg;
  gust.textContent = relevantData.gust;
}
function createObj(data) {
  let obj = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWSxTQUFTLE9BQU87QUFDcEYsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3R2lmJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHNMaWtlJyk7XG5jb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXInKTtcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJJY29uJyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcbmNvbnN0IGRlZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWcnKTtcbmNvbnN0IGd1c3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3VzdCcpO1xuY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lzdGVtJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nJyk7XG5jb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVySW5mbycpO1xubGV0IHN5c3RlbSA9ICdtZXRyaWMnO1xuY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgaWYgKGUuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgc3lzdGVtID0gJ2ltcGVyaWFsJztcbiAgICBnZXRJbmZvKCk7XG4gIH0gZWxzZSB7XG4gICAgc3lzdGVtID0gJ21ldHJpYyc7XG4gICAgZ2V0SW5mbygpO1xuICB9XG59KTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRJbmZvKCk7XG4gIHdlYXRoZXJJbmZvLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEluZm8oKSB7XG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gaW5wdXQudmFsdWU7XG4gIGxvYWRpbmcudGV4dENvbnRlbnQgPSAnbG9hZGluZyc7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaFZhbHVlfSZ1bml0cz0ke3N5c3RlbX0mQVBQSUQ9NGU1ZDYxYWM2Y2UzODQ1YWYyNzc0NjcxY2I5NTJlYjNgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgKTtcbiAgLy90ZXN0aW5nIGFzeW5jIHNldHRpbmdcbiAgLyogYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndGltZW91dCcpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIDIwMDApXG4gICk7Ki9cbiAgbG9hZGluZy50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBnaWZEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhnaWZEYXRhKTtcblxuICBjb25zdCByZWxldmFudERhdGEgPSBjcmVhdGVPYmooZ2lmRGF0YSk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEudGVtcDtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLmZlZWxzTGlrZTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEuaHVtaWRpdHk7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEud2VhdGhlcjtcbiAgd2VhdGhlckljb24uc3JjID0gcmVsZXZhbnREYXRhLndlYXRoZXJJY29uO1xuICB3aW5kLnRleHRDb250ZW50ID0gcmVsZXZhbnREYXRhLndpbmQ7XG4gIGRlZy50ZXh0Q29udGVudCA9IHJlbGV2YW50RGF0YS5kZWc7XG4gIGd1c3QudGV4dENvbnRlbnQgPSByZWxldmFudERhdGEuZ3VzdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU9iaihkYXRhKSB7XG4gIGxldCBvYmogPSB7fTtcbiAgaWYgKGRhdGEubWFpbi50ZW1wICE9IHVuZGVmaW5lZCkgb2JqLnRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgZWxzZSBvYmoudGVtcCA9ICdubyBpbmZvJztcbiAgaWYgKGRhdGEubWFpbi5mZWVsc19saWtlICE9IHVuZGVmaW5lZCkgb2JqLmZlZWxzTGlrZSA9IGRhdGEubWFpbi5mZWVsc19saWtlO1xuICBlbHNlIG9iai5mZWVsc0xpa2UgPSAnbm8gaW5mbyc7XG4gIGlmIChkYXRhLm1haW4uaHVtaWRpdHkgIT0gdW5kZWZpbmVkKSBvYmouaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gIGVsc2Ugb2JqLmh1bWlkaXR5ID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uICE9IHVuZGVmaW5lZClcbiAgICBvYmoud2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgaWYgKGRhdGEud2VhdGhlclswXS5pY29uICE9IHVuZGVmaW5lZClcbiAgICBvYmoud2VhdGhlckljb24gPVxuICAgICAgJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLycgKyBkYXRhLndlYXRoZXJbMF0uaWNvbiArICdAMngucG5nJztcbiAgZWxzZSBvYmoud2VhdGhlckljb24gPSAnJztcbiAgaWYgKGRhdGEud2luZC5zcGVlZCAhPSB1bmRlZmluZWQpIG9iai53aW5kID0gZGF0YS53aW5kLnNwZWVkO1xuICBlbHNlIG9iai53aW5kID0gJ25vIGluZm8nO1xuICBpZiAoZGF0YS53aW5kLmRlZyAhPSB1bmRlZmluZWQpIG9iai5kZWcgPSBkYXRhLndpbmQuZGVnO1xuICBlbHNlIG9iai5kZWcgPSAnbm8gaW5mbyc7XG4gIGlmIChkYXRhLndpbmQuZ3VzdCAhPSB1bmRlZmluZWQpIG9iai5ndXN0ID0gZGF0YS53aW5kLmd1c3Q7XG4gIGVsc2Ugb2JqLmd1c3QgPSAnbm8gaW5mbyc7XG4gIHJldHVybiBvYmo7XG59XG5jb25zb2xlLmxvZygndGVzdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9