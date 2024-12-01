function updateClock(city, offset) {
  const day = new Date();

  // Calculate the UTC time by adjusting for the local timezone offset
  const utcTime = day.getTime() + day.getTimezoneOffset() * 60000;

  // Calculate the city time by adding the timezone offset (in hours)
  const cityTime = new Date(utcTime + 3600000 * offset);

  const hours = String(cityTime.getHours()).padStart(2, "0");
  const minutes = String(cityTime.getMinutes()).padStart(2, "0");
  const seconds = String(cityTime.getSeconds()).padStart(2, "0");

  // Update the time in the HTML element for the specified city
  document.querySelector(
    `#${city} .time`
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

function startWorldClock() {
  updateClock("los angeles", -8); // Los angeles (UTC-8)
  updateClock("massachusetts", -5); // massachusetts (UTC-5)
  updateClock("london", 0); // London (UTC+0)
  updateClock("italy", +1); // Italy (UTC+1)
  updateClock("nigeria", +1); // Nigeria(UTC+1);
  updateClock("maine", -5); // Maine(UTC-5);

  setInterval(startWorldClock, 1000);
}

// Start the clock when the page loads
document.addEventListener("DOMContentLoaded", startWorldClock);
