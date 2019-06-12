'use strict';

var userPanel = document.querySelector('.setup');
userPanel.classList.remove('hidden');


var fistName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomName = function(fistName, surName) {
  var randomName = fistName[Math.floor(Math.random()*fistName.length)]  +  surName[Math.floor(Math.random()*surName.length)];
  return randomName;
};

var getRandomCoat = function () {
var randomCoat =  coatColor[Math.floor(Math.random()*color.length)];
return randomCoat;
};

var getRandomEyes = function () {
  var randomEyes = eyesColor[Math.floor(Math.random()*eyesColor.length)];
  return randomEyes;
};

var createNewArr = function (i) {
var ojectArr = i;
for (i = 0, i <= 4, i++) {

}
return ojectArr;
};
