/*
@title The Ridge
@author: Colin Montigel
@snapshot: colored2.png
*/

const width = 800
const height = 600

setDocDimensions(width, height)

const sky = [[
  [0, 0],
  [0, 600],
  [800, 600],
  [800, 0]
]]
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


const rr = bt.randInRange

let cloudLocation = rr(80, 720)
let cloudHeight = rr(400, 550)
const cloud = [bt.nurbs([
  [cloudLocation, cloudHeight + 50],
  [cloudLocation + 40, cloudHeight + 10],
  [cloudLocation + 80, cloudHeight],
  [cloudLocation + 10, cloudHeight - 40],
  [cloudLocation - 30, cloudHeight - 20],
  [cloudLocation - 70, cloudHeight + 15],
  [cloudLocation - 45, cloudHeight + 30],
  [cloudLocation - 5, cloudHeight + 5],
  [cloudLocation, cloudHeight + 50]
])]

let cloud2Location = rr(110, 690)
let cloud2Height = rr(400, 550)
const cloud2 = [bt.nurbs([
  [cloud2Location, cloud2Height - 50],
  [cloud2Location - 70, cloud2Height - 20],
  [cloud2Location - 110, cloud2Height],
  [cloud2Location - 30, cloud2Height + 20],
  [cloud2Location + 60, cloud2Height + 50],
  [cloud2Location + 30, cloud2Height - 10],
  [cloud2Location + 75, cloud2Height - 40],
  [cloud2Location + 5, cloud2Height - 5],
  [cloud2Location, cloud2Height - 50]
])]

// COLORED
///*
drawLines(sky, { fill: "skyblue" });
drawLines(cloud, { fill: "lightgrey" });
drawLines(cloud2, { fill: "lightgrey" });
drawLines(ridge, { fill: "brown" });
drawLines(ground, { fill: "darkgreen" });
drawLines([[[60, 370], [30, 290]], [[350, 320], [335, 240]]]);
drawLines(cactus, { fill: "YellowGreen" });
//*/

// NOT COLORED
/*
drawLines(sky);
drawLines(cloud);
drawLines(cloud2);
drawLines(ridge);
drawLines(ground);
drawLines([[[60, 370], [30, 290]], [[350, 320], [335, 240]]]);
drawLines(cactus);
*/