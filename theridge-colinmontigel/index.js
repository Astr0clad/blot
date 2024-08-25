// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 800
const height = 600

setDocDimensions(width, height)

const cactus = [bt.nurbs([
  [550, 0],
  [550, 100],
  [550, 100],
  [500, 115], 
  [500, 190],
  [500, 190],
  [500, 200],
  [510, 210],
  [520, 200],
  [520, 140],
  [535, 120],
  [550, 140],
  [550, 240],
  [550, 250],
  [560, 260],
  [570, 250],
  [570, 230], 
  [570, 150], 
  [580, 140],
  [590, 150], 
  [590, 200], 
  [590, 210], 
  [600, 220], 
  [610, 210], 
  [610, 200],
  [610, 140],
  [590, 120],
  [580, 100],
  [580, 80],
  [580, 0]
])]

drawLines(cactus, { fill: "YellowGreen" });