import { station, timeGraph } from './data.js';

export function checkInputVaild(dom) {
  const { departureStationInput, arrivalStationInput } = dom;
  const departure = departureStationInput.value;
  const arrival = arrivalStationInput.value;
  if (departure === arrival || departure.length < 2 || arrival.length < 2) {
    return false;
  }
  return (station.has(departure) && station.has(arrival));
}

export function checkShortestPath(dom) {
  const { departureStationInput, arrivalStationInput } = dom;
  const path = timeGraph.findShortestPath(departureStationInput.value, arrivalStationInput.value);
  if (!path) {
    return false;
  }
  return true;
}
