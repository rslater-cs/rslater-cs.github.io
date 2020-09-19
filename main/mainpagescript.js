const baseTime = 300
const offset = 100
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "R"}, baseTime)
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RY"}, baseTime+(offset*1));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYA"}, baseTime+(offset*2));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYAN"}, baseTime+(offset*3));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANS"}, baseTime+(offset*4));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANSL"}, baseTime+(offset*5));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANSLA"}, baseTime+(offset*6));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANSLAT"}, baseTime+(offset*7));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANSLATE"}, baseTime+(offset*8));
setTimeout(()=>{document.getElementById('MainTitle').innerHTML = "RYANSLATER"}, baseTime+(offset*9));

setInterval(cycle, 5000);