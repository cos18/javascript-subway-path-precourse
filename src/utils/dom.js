export function initDOM() {
  const findLocationButton = document.getElementById('find-location');
  const departureStationInput = document.getElementById('departure-station');
  const arrivalStationInput = document.getElementById('arrival-station');
  const resultContainer = document.getElementById('result-container');

  return {
    findLocationButton,
    departureStationInput,
    arrivalStationInput,
    resultContainer,
  };
}

export function getRadiochecked() {
  const searchByRadios = document.getElementsByName('search-by');

  for (let i = 0; i < searchByRadios.length; i += 1) {
    if (searchByRadios[i].checked) {
      return searchByRadios[i].value;
    }
  }
  return undefined;
}
