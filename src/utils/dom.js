export default function initDOM() {
  const findLocationButton = document.getElementById('find-location');
  const departureStationInput = document.getElementById('departure-station');
  const arrivalStationInput = document.getElementById('arrival-station');
  const resultContainer = document.getElementById('result-container');

  return { findLocationButton, departureStationInput, arrivalStationInput, resultContainer };
}
