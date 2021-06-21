import initDOM from './utils/dom.js';
import checkInputVaild from './utils/check.js';

function SubwayPath() {
  const dom = initDOM();

  function onFindLocationClicked() {
    if (!checkInputVaild(dom.departureStationInput.value, dom.arrivalStationInput.value)) {
      alert('🚨 입력이 잘못되었습니다 🚨');
      return;
    }
    dom.resultContainer.style.visibility = 'visible';
  }

  dom.resultContainer.style.visibility = 'hidden';
  dom.findLocationButton.addEventListener('click', onFindLocationClicked);
}

new SubwayPath();
