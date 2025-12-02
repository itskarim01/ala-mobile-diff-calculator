import "flag-icons/css/flag-icons.min.css";

export interface TrackInfo {
  difficulty: number[];
  lap_times: number[];
  flag: string;
}

export const TRACK_DATA: Record<string, TrackInfo> = {
  "australia": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [94.844, 86.81, 85.165, 82.366],
    flag: "fi fi-au",
  },
  "china": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [100.665, 95.743, 93.743, 93.223, 90.324],
    flag: "fi fi-cn",
  },
  "bahrain": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [97.788, 94.244, 91.966, 90.547, 88.262],
    flag: "fi fi-bh",
  },
  "motorvalley": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [85.541, 82.247, 80.022, 79.549, 77.425],
    flag: "fi fi-it",
  },
  "spain": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [83.505, 81.127, 79.304, 78.986, 76.748],
    flag: "fi fi-es",
  },
  "monaco": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [82.825, 80.648, 79.250, 78.521, 76.930],
    flag: "fi fi-mc",
  },
  "canada": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [80.302, 76.833, 74.843, 74.022, 72.086],
    flag: "fi fi-ca",
  },
  "austria": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [72.946, 71.426, 69.786, 68.966, 66.282],
    flag: "fi fi-at",
  },
  "britain": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [86.362, 82.209, 79.548, 78.803, 75.609],
    flag: "fi fi-gb",
  },
  "germany": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [81.124, 77.624, 75.463, 74.690, 72.906],
    flag: "fi fi-de",
  },
  "hungary": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [86.288, 82.765, 80.768, 79.187, 78.322],
    flag: "fi fi-hu",
  },
  "belgium": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [112.282, 106.450, 103.967, 103.242, 99.682],
    flag: "fi fi-be",
  },
  "italy": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [93.462, 85.747, 83.305, 82.648, 79.043],
    flag: "fi fi-it",
  },
  "japan": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [98.665, 93.325, 91.826, 91.107, 88.489],
    flag: "fi fi-jp",
  },
  "brazil": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [74.210, 70.943, 69.206, 68.344, 67.204],
    flag: "fi fi-br",
  },
  "emirates": {
    difficulty: [0, 25, 50, 75, 100],
    lap_times: [113.025, 101.123, 95.163, 92.125, 88.889],
    flag: "fi fi-ae",
  }
};
