const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(
  (number, accumulator) => number + accumulator,
  0
);
