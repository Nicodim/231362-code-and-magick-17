'use strict';
var CLOUD_WIDTH = 430;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, FONT_GAP - CLOUD_Y);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP * 2, FONT_GAP + CLOUD_Y);

  var maxTime = getMaxElement(times);
  // var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, (MAX_BAR_HEIGHT - MAX_BAR_HEIGHT * times[i]) / maxTime - (CLOUD_Y + GAP));
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, CLOUD_Y + FONT_GAP * 5 + GAP);
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, CLOUD_Y + FONT_GAP * 5 - GAP, TEXT_WIDTH, (MAX_BAR_HEIGHT - MAX_BAR_HEIGHT * times[i]) / maxTime);
  }


  // var playerIndex = 0;
  // var playerName = 'Вы';
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Вы', 150, 270);
  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(150, 90, 40, 150);
  //
  // var playerIndex = 1;
  // var playerName = 'Иван';
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Иван', 200, 270);
  // ctx.fillRect(200, 90, 40, 150);
  //
  // var playerIndex = 2;
  // var playerName = 'Юлия';
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Юлия', 250, 270);
  // ctx.fillRect(250, 90, 40, 150);
  //
  // var playerIndex = 3;
  // var playerName = 'Кекс';
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Кекс', 300, 270);
  // ctx.fillRect(300, 90, 40, 150);

};
