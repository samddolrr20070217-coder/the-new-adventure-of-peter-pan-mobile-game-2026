const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "peterpan.png";

const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

const player = {
  x: 200,
  y: 300,
  width: 120,
  height: 140,
  speed: 6
};

const tinkerbell = {
  x: -40,
  y: -40
};

const lostKids = [
  {x:2200,y:500,name:"Lost Boy"},
  {x:2300,y:500,name:"Lost Girl"},
  {x:2400,y:500,name:"Lost Boy"},
  {x:2500,y:500,name:"Lost Girl"}
];

const pirates = [
  {x:4100,y:500},
  {x:4250,y:500},
  {x:4400,y:500}
];

let cameraX = 0;

function update(){

  if(keys["ArrowRight"]){
    player.x += player.speed;
  }

  if(keys["ArrowLeft"]){
    player.x -= player.speed;
  }

  if(keys["ArrowUp"]){
    player.y -= player.speed;
  }

  if(keys["ArrowDown"]){
    player.y += player.speed;
  }

  cameraX = player.x - 300;
}

function drawSky(){

  ctx.fillStyle = "#001d3d";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<100;i++){

    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.arc(
      (i*80-cameraX*0.2)%5000,
      (i*37)%600,
      2,
      0,
      Math.PI*2
    );

    ctx.fill();
  }
}

function drawLondon(){

  ctx.fillStyle = "#444";

  for(let i=0;i<10;i++){

    ctx.fillRect(
      i*180-cameraX,
      350,
      120,
      300
    );
  }

  ctx.fillStyle = "pink";

  ctx.fillRect(
    900-cameraX,
    380,
    180,
    160
  );

  ctx.fillStyle = "white";
  ctx.font = "24px Arial";

  ctx.fillText(
    "Wendy House",
    860-cameraX,
    350
  );
}

function drawNeverland(){

  ctx.fillStyle = "green";

  ctx.fillRect(
    1500-cameraX,
    550,
    4000,
    200
  );

  ctx.fillStyle = "#14532d";

  for(let i=0;i<30;i++){

    ctx.fillRect(
      1600+i*120-cameraX,
      380,
      40,
      180
    );

    ctx.beginPath();

    ctx.arc(
      1620+i*120-cameraX,
      360,
      60,
      0,
      Math.PI*2
    );

    ctx.fill();
  }
}

function drawPlayer(){

  ctx.drawImage(
    playerImage,
    player.x-cameraX,
    player.y,
    player.width,
    player.height
  );

  ctx.fillStyle = "yellow";

  ctx.beginPath();

  ctx.arc(
    player.x+tinkerbell.x-cameraX,
    player.y+tinkerbell.y,
    12,
    0,
    Math.PI*2
  );

  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";

  ctx.fillText("Peter Pan",20,40);
}

function drawLostKids(){

  lostKids.forEach(k=>{

    ctx.fillStyle = "orange";

    ctx.fillRect(
      k.x-cameraX,
      k.y,
      45,
      70
    );

    ctx.fillStyle = "white";

    ctx.fillText(
      k.name,
      k.x-cameraX-10,
      k.y-10
    );
  });
}

function drawIndianVillage(){

  ctx.fillStyle = "#8b4513";

  ctx.beginPath();

  ctx.moveTo(3200-cameraX,400);
  ctx.lineTo(3150-cameraX,520);
  ctx.lineTo(3250-cameraX,520);

  ctx.fill();

  ctx.beginPath();

  ctx.moveTo(3380-cameraX,400);
  ctx.lineTo(3330-cameraX,520);
  ctx.lineTo(3430-cameraX,520);

  ctx.fill();

  ctx.fillStyle = "white";

  ctx.fillText(
    "Indian Village",
    3140-cameraX,
    360
  );

  ctx.fillStyle = "hotpink";

  ctx.fillRect(
    3500-cameraX,
    460,
    50,
    80
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    "Tiger Lily",
    3460-cameraX,
    440
  );
}

function drawPirates(){

  ctx.fillStyle = "brown";

  ctx.fillRect(
    4000-cameraX,
    250,
    500,
    260
  );

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";

  ctx.fillText(
    "Captain Hook Ship",
    4040-cameraX,
    220
  );

  pirates.forEach(p=>{

    ctx.fillStyle = "purple";

    ctx.fillRect(
      p.x-cameraX,
      p.y,
      60,
      90
    );
  });

  ctx.fillStyle = "red";

  ctx.fillRect(
    4550-cameraX,
    420,
    90,
    120
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    "Captain Hook",
    4470-cameraX,
    390
  );
}

function gameLoop(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  update();

  drawSky();
  drawLondon();
  drawNeverland();
  drawIndianVillage();
  drawPirates();
  drawLostKids();
  drawPlayer();

  requestAnimationFrame(gameLoop);
}

gameLoop();
