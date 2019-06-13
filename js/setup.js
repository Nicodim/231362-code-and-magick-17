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

var createNewArr = function (n) {
  var ojectArr = [];
  for (i = 0, i < n, i++) {

    ojectArr[n] = {name: getRandomName(), coatColor: getRandomCoat(), eyesColor: getRandomEyes()}
  }
  return ojectArr;
}

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');


var newWizard = function (n) {
  var wizardArr = [];
  for (var i = 0; i < n; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = ojectArr[n].name;
    wizardElement.querySelector('.wizard-coat').style.fill = ojectArr[n].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = ojectArr[n].eyesColor;
    // similarListElement.appendChild(wizardElement);
  }
  return wizardArr;
};


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardArr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardArr.coatColor;
wizardElement.querySelector('.wizard-eyes').style.fill = wizardArr.coatColor;
  return wizardElement;
}
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < ojectArr.length; i++) {
//   fragment.appendChild(renderWizard(ojectArr[i]));
// }
// similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
