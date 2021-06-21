import Dijkstra from './utils/Dijkstra.js';

export const greenLine = [
  {
    name: '교대',
    next: {
      distance: 2,
      time: 3,
    },
  },
  {
    name: '강남',
    prev: {
      distance: 2,
      time: 3,
    },
    next: {
      distance: 2,
      time: 3,
    },
  },
  {
    name: '역삼',
    prev: {
      distance: 2,
      time: 3,
    },
  },
];

export const orangeLine = [
  {
    name: '교대',
    next: {
      distance: 3,
      time: 2,
    },
  },
  {
    name: '남부터미널',
    prev: {
      distance: 3,
      time: 2,
    },
    next: {
      distance: 6,
      time: 5,
    },
  },
  {
    name: '양재',
    prev: {
      distance: 6,
      time: 5,
    },
    next: {
      distance: 1,
      time: 1,
    },
  },
  {
    name: '매봉',
    prev: {
      distance: 1,
      time: 1,
    },
  },
];

export const redLine = [
  {
    name: '강남',
    next: {
      distance: 2,
      time: 8,
    },
  },
  {
    name: '양재',
    prev: {
      distance: 2,
      time: 8,
    },
    next: {
      distance: 10,
      time: 3,
    },
  },
  {
    name: '양재시민의숲',
    prev: {
      distance: 10,
      time: 3,
    },
  },
];

export const station = ((...lines) => {
  const result = [];
  lines.forEach((line) => {
    line.forEach((val) => result.push(val.name));
  });
  return new Set(result);
})(greenLine, orangeLine, redLine);

export const distanceGraph = ((...lines) => {
  const result = new Dijkstra();
  lines.forEach((line) => {
    for (let i = 0; i < line.length - 1; i += 1) {
      result.addEdge(line[i].name, line[i + 1].name, line[i].next.distance);
    }
  });
  return result;
})(greenLine, orangeLine, redLine);

export const timeGraph = ((...lines) => {
  const result = new Dijkstra();
  lines.forEach((line) => {
    for (let i = 0; i < line.length - 1; i += 1) {
      result.addEdge(line[i].name, line[i + 1].name, line[i].next.time);
    }
  });
  return result;
})(greenLine, orangeLine, redLine);
