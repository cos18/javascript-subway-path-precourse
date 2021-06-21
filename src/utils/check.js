import { station } from './data.js';

export default function checkInputVaild(departure, arrival) {
  if (departure === arrival || departure.length < 2 || arrival.length < 2) {
    return false;
  }
  return (station.has(departure) && station.has(arrival));
}
