function updateTime() {
  let currentLocationDateElement = document.querySelector(
    "#current-location-date"
  );
  let currentLocationTimeElement = document.querySelector(
    "#current-location-time"
  );
  let currentLocation = moment.tz.guess();

  let currentLocationTime = moment().tz(`${currentLocation}`).format("H:mm:ss");
  let currentLocationDate = moment()
    .tz(`${currentLocation}`)
    .format("dddd, Do YYYY");

  currentLocationTimeElement.innerHTML = currentLocationTime;
  currentLocationDateElement.innerHTML = currentLocationDate;

  let lahoreElement = document.querySelector("#lahore");
  if (lahoreElement) {
    let lahoreDateElement = lahoreElement.querySelector(".date");
    let lahoreTimeElement = lahoreElement.querySelector(".time");

    let lahoreDate = moment().tz("Asia/Karachi").format("dddd, Do YYYY");
    let lahoreTime = moment().tz("Asia/Karachi").format("H:mm:ss");

    lahoreDateElement.innerHTML = lahoreDate;
    lahoreTimeElement.innerHTML = lahoreTime;
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDate = moment().tz("Australia/Sydney").format("dddd, Do YYYY");
    let sydneyTime = moment().tz("Australia/Sydney").format("H:mm:ss");

    sydneyDateElement.innerHTML = sydneyDate;
    sydneyTimeElement.innerHTML = sydneyTime;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  if (cityTimeZone.length > 0) {
    citiesElement.innerHTML = `<li class="city">
          <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm")}</div>
        </li>
        <a  href = " / ">Home</a>`;
  } else {
    citiesElement.innerHTML = `<a href=" / ">Home</a>`;
  }
}
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
