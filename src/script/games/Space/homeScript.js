let playButton = document.getElementById("play_button");
let aboutButton = document.getElementById("about_button");
let creditsButton = document.getElementById("credits_button");

playButton.onclick = function() {
  if (window.innerWidth <= 800)
    alert("This Game Is Not Supported On Mobile!");
  window.location.assign("../../games/Space/SpaceMain.html");
};
aboutButton.onclick = function() {
  window.location.assign("../../games/Space/SpaceAbout.html");
};
creditsButton.onclick = function() {
  window.location.assign("../../games/Space/SpaceCredits.html");
};


addEventListener("resize", main);
main();

function main() {
  var canvas = document.getElementById("home_canvas");
  var ctx = setupCanvas(document.querySelector('#home_canvas'));

  const WIDTH = (canvas.width/canvas.height)*1000;
  const HEIGHT = 1000;

  var timer1 = 0;
  var starSpeed = 2;

  var player1 = {
    x: WIDTH/4,
    y: HEIGHT/2.5,
    width: 13,
    height: 13,
    draw: function() {
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
      ctx.fillRect(player1.x-10, player1.y+3, player1.width, player1.height-4);
      ctx.fillRect(player1.x+10, player1.y+3, player1.width, player1.height-4);
      ctx.fillRect(player1.x + 3, player1.y-13, player1.width-6, player1.height);
      ctx.fillRect(player1.x-8, player1.y-10, player1.width-8, player1.height);
      ctx.fillRect(player1.x+16, player1.y-10, player1.width-8, player1.height);
    },
    reIns: function() {
      player1.x = WIDTH/4;
      player1.y = HEIGHT/2.5;
      player1.width = 13;
      player1.height = 13;
    }
  };


  function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  var starsX = [Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2), Math.floor(Math.random()*WIDTH/2)]
  var starsY = [Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2), Math.floor(Math.random()*HEIGHT/2)]

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.save();

    if (keyFDown == true) {
      ctx.fillStyle = getRandomColor();
    }
    else {
      ctx.fillStyle = "white";
    }
    player1.draw();



    for (var i = 0; i < starsX.length; i++) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(starsX[i], starsY[i], 2, 2);
      ctx.globalAlpha = 1;
    }


    ctx.restore();
  };

  function update() {
    if (timer1 > 25) {
      timer1 = 0;
      starSpeed += 0.05;
    }

    for (var i = 0; i < starsX.length; i++) {
      starsY[i] += starSpeed;
      if (starsY[i] > HEIGHT/2) {
        starsY[i] = 0;
        starsX[i] = Math.floor(Math.random()*WIDTH/2)
      }
    };

    timer1 ++;
  }

  function controls() {
    if (keyRightDown == true && player1.x < WIDTH/2 - player1.width*2) player1.x += 5;
    if (keyLeftDown == true && player1.x > 15) player1.x -= 5;
    if (keyUpDown == true && player1.y > 15) player1.y -= 3;
    if (keyDownDown == true && player1.y < HEIGHT/2 - player1.height*2) player1.y += 3;
  }

  function loop() {
    draw();
    update();
    controls();
    requestAnimationFrame(loop);
  };

  // controls for the game
  var keyRightDown = false;
  var keyLeftDown = false;
  var keyUpDown = false;
  var keyDownDown = false
  var keyFDown = false;
  var keyEnterDown = false;
  var keyPDown = false;
  document.onkeydown = function(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
      keyLeftDown = true;
    };
    if (e.keyCode == 39 || e.keyCode == 68) {
      keyRightDown = true;
    };
    if (e.keyCode == 38 || e.keyCode == 87) {
      keyUpDown = true;
    };
    if (e.keyCode == 40 || e.keyCode == 83) {
      keyDownDown = true;
    };
    if (e.keyCode == 70) {
      keyFDown = true;
    };
    if (e.keyCode == 13) {
      keyEnterDown = true;
    }
    if (e.keyCode == 80) {
      keyPDown = true;
    }
  };
  document.onkeyup = function(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
      keyLeftDown = false;
    };
    if (e.keyCode == 39 || e.keyCode == 68) {
      keyRightDown = false;
    };
    if (e.keyCode == 38 || e.keyCode == 87) {
      keyUpDown = false;
    };
    if (e.keyCode == 40 || e.keyCode == 83) {
      keyDownDown = false;
    };
    if (e.keyCode == 70) {
      keyFDown = false;
    };
    if (e.keyCode == 13) {
      keyEnterDown = false;
    }
    if (e.keyCode == 80) {
      keyPDown = false;
    }
  };
  // End of Controls


  loop();
}

