function updateTime() {
  let currentLocationDateElement = document.querySelector(
    "#current-location-date"
  );
  let currentLocationTimeElement = document.querySelector(
    "#current-location-time"
  );
  let currentLocation = moment.tz.guess();

  let currentLocationTime = moment().tz(currentLocation).format("H:mm:ss");
  let currentLocationDate = moment()
    .tz(currentLocation)
    .format("dddd, Do YYYY");

  currentLocationTimeElement.innerHTML = currentLocationTime;
  currentLocationDateElement.innerHTML = currentLocationDate;

  let lahoreElement = document.querySelector("#lahore");
  if (lahoreElement) {
    let lahoreDateElement = lahoreElement.querySelector(".date");
    let lahoreTimeElement = lahoreElement.querySelector(".time");

    let lahoreTime = moment().tz("Asia/Karachi").format("H:mm:ss");
    let lahoreDate = moment().tz("Asia/Karachi").format("dddd, Do YYYY");

    lahoreDateElement.innerHTML = lahoreDate;
    lahoreTimeElement.innerHTML = lahoreTime;
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    let sydneyTime = moment().tz("Australia/Sydney").format("H:mm:ss");
    let sydneyDate = moment().tz("Australia/Sydney").format("dddd, Do YYYY");

    sydneyDateElement.innerHTML = sydneyDate;
    sydneyTimeElement.innerHTML = sydneyTime;
  }
}
