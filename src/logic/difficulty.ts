export function parseLapTime(time: string): number {
  const [minStr, secStr] = time.trim().split(":");
  if (!secStr) throw new Error("Invalid format. Use m:ss.xxx");
  return parseInt(minStr) * 60 + parseFloat(secStr);
}

export function estimateDifficulty(userLap: number, difficulty: number[], lapTimes: number[]): number {
  if (userLap >= lapTimes[0]) return difficulty[0];
  if (userLap <= lapTimes[lapTimes.length - 1]) return difficulty[difficulty.length - 1];
  for (let i = 0; i < lapTimes.length - 1; i++) {
    if (userLap <= lapTimes[i] && userLap >= lapTimes[i+1]) {
      
      const x1 = lapTimes[i], x2 = lapTimes[i+1];
      const y1 = difficulty[i], y2 = difficulty[i+1];

      const ratio = (userLap - x2) / (x1 - x2);
      return Math.round(y2 + ratio * (y1 - y2));
    }
  }
  return difficulty[difficulty.length - 1];
}

export function averageDifficulty(userLaps: number[], difficulty: number[], lapTimes: number[]): number {
  const diffs = userLaps.map(l => estimateDifficulty(l, difficulty, lapTimes));
  return Math.round(diffs.reduce((a,b)=>a+b,0)/diffs.length);
}