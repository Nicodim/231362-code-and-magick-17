var CLOUD_WIDTH = 430;
var CLOUD_HEIGHT = 280;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_WIDTH = 40;
var BAR_HEIGHT = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);


 ctx.fillStyle = '#000';
 ctx.fillText('Вы', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 5 + GAP);
 ctx.fillStyle = 'rgba(255, 0, 0, 1)';
 ctx.fillRect(CLOUD_X + FONT_GAP, FONT_GAP * 2 - CLOUD_Y, TEXT_WIDTH, BAR_HEIGHT);

 ctx.fillStyle = '#000';
 ctx.fillText('Иван', CLOUD_X + TEXT_WIDTH + FONT_GAP + GAP, CLOUD_Y + FONT_GAP * 5 + GAP);
 ctx.fillRect(CLOUD_X + TEXT_WIDTH + FONT_GAP + GAP, FONT_GAP * 2 - CLOUD_Y, TEXT_WIDTH, BAR_HEIGHT);

 ctx.fillStyle = '#000';
 ctx.fillText('Юлия', CLOUD_X + TEXT_WIDTH + FONT_GAP * 2 + GAP, CLOUD_Y + FONT_GAP * 5 + GAP);
 ctx.fillRect(CLOUD_X + TEXT_WIDTH + FONT_GAP * 2 + GAP, FONT_GAP * 2 - CLOUD_Y, TEXT_WIDTH, BAR_HEIGHT);

 ctx.fillStyle = '#000';
 ctx.fillText('Кекс', CLOUD_X + TEXT_WIDTH + FONT_GAP * 3 + GAP, CLOUD_Y + FONT_GAP * 5 + GAP);
 ctx.fillRect(CLOUD_X + TEXT_WIDTH + FONT_GAP * 3 + GAP, FONT_GAP * 2 - CLOUD_Y, TEXT_WIDTH, BAR_HEIGHT);

};
