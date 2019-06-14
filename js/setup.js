'use strict';

var userPanel = document.querySelector('.setup');
userPanel.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var fistName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomName = function (fistName, surName) {
  var randomName = fistName[Math.floor(Math.random()*fistName.length)]  + " " +  surName[Math.floor(Math.random()*surName.length)];
  return randomName;
};

var getRandomCoat = function (coat) {
  var randomCoat =  coat[Math.floor(Math.random()*coatColor.length)];
  return randomCoat;
};

var getRandomEyes = function (eyes) {
  var randomEyes = eyes[Math.floor(Math.random()*eyesColor.length)];
  return randomEyes;
};

var createNewArr = function (n) {
  var ojectArr = [];
  for (i = 0; i < n; i++) {
    ojectArr[i] = {name: getRandomName(fistName, surName), coatColor: getRandomCoat(), eyesColor: getRandomEyes()}
  }
  return ojectArr;
}

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');


var newWizard = function (data) {
  var wizardArr = [];
  for (var i = 0; i < data.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = data[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = data[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;
    wizardArr.push(wizardElement);
  }
  return wizardArr;
};

var objectArr = createNewArr(4);
var wizardArr = newWizard(objectArr);


var fragment = document.createDocumentFragment();

for (var i = 0; i < wizardArr.length; i++) {
  fragment.appendChild(wizardArr[i]);
};
similarListElement.appendChild(fragment);
