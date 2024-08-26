// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 800
const height = 600

setDocDimensions(width, height)

const ridge = [[
  [0, 400],
  [40, 380],
  [60, 370],
  [90, 450],
  [150, 400],
  [200, 350],
  [350, 320],
  [370, 450],
  [420, 430],
  [500, 350],
  [700, 300],
  [800, 250],
  [800, 0],
  [0, 0]
]]

const ground = [bt.nurbs([
  [0, 120],
  [100, 100],
  [200, 230],
  [300, 200],
  [400, 210],
  [500, 180],
  [600, 160],
  [700, 190],
  [800, 170],
  [800, 160],
  [800, 0],
  [800, 0],
  [0, 0]
])]

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

drawLines(ridge, { fill: "brown" });
drawLines(ground, { fill: "darkgreen" });
drawLines(cactus, { fill: "YellowGreen" });