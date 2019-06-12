'use strict';

var userPanel = document.querySelector('.setup');
userPanel.classList.remove('hidden');

var wizardProfile = ['name', 'coatColor', 'eyesColor'];
var name = {
  fistName: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surName: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};

var coatColor = {
  color: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
};

var eyesColor = {
  eyes: ['black', 'red', 'blue', 'yellow', 'green'];
};


var getRandomName = function(fistName, surName) {
  var randomName = name.fistName[Math.floor(Math.random()*fistName.length)]  +  name.surName[Math.floor(Math.random()*surName.length)];
  return randomName;
};

var getRandomCoat = function () {
var randomCoat =  coatColor.color[Math.floor(Math.random()*color.length)];
return randomCoat;
};

var getRandomEyes = function () {
  var randomEyes = eyesColor.eyes[Math.floor(Math.random()*eyes.length)];
  return randomEyes;
}