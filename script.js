var imgInd = 0;
var slide = document.createElement('img');
slide.className = 'slide';
slide.setAttribute('id', 'nat');
console.log(slide.id);
slide.src = 'img/nat-1.jpg';
document.querySelector('.images').appendChild(slide);

var pointInd =0;
var point = document.createElement('point');
point.className = 'point-box';
point.setAttribute('id', 'value');
console.log(point.id);
point.src = '&#9633';
document.querySelector('.point').appendChild(point);

//  Определяем массив слайдов с нумерацией в имени файлов и массив пунктов
var imgNum = [];
var imgSlides = [];

var pointNum = [];  //
var pointSlides = [];   //

for (var i = 1; i < 5; i++) {
    imgNum.push(i);
    pointNum.push(i);   //
}

for (var j = 0; j < 4; j++) {
    imgSlides.push('nat-' + imgNum[j] + '.jpg');
    pointSlides.push(point.src);  //
}

console.log('imgNum: ' + imgNum);
console.log('imgSlides: ' + imgSlides);

console.log('pointNum: ' + pointNum);
console.log('pointSlides: ' + pointSlides);

// выводим поинты на страницу
var point = document.getElementById('point');
var str = ' ';
for (var n = 0; n < pointSlides.length; n++) {
    if (n !== pointInd) {
        pointSlides[n] = '&#9633';
    } else {
        pointSlides[n] = '&#9632';
    }
    str += pointSlides[n] + ' ';
}
point.innerHTML = str;


// событие для кнопки Вперед
function toRight(id) {
    var slide = document.getElementById(id);
    if (imgInd == imgSlides.length - 1) {
        imgInd = 0;
        pointInd = 0;   //
    } else {
        imgInd++;
        pointInd++; //
    }
    slide.src = 'img/' + imgSlides[imgInd];
    var str = ' ';
    for (var n = 0; n < pointSlides.length; n++) {
        if (n !== pointInd) {
            pointSlides[n] = '&#9633';
        } else {
            pointSlides[n] = '&#9632';
        }
        str += pointSlides[n] + ' ';
    }
    point.innerHTML = str;
    
}

// событие для кнопки Назад
function toLeft(id) {
    var slide = document.getElementById(id);
    if (imgInd == 0) {
        imgInd = imgSlides.length - 1;
        pointInd = pointSlides.length - 1;
    } else {
        imgInd--;
        pointInd--;
    }
    slide.src = 'img/' + imgSlides[imgInd];
    var str = ' ';
    for (var n = 0; n < pointSlides.length; n++) {
        if (n !== pointInd) {
            pointSlides[n] = '&#9633';
        } else {
            pointSlides[n] = '&#9632';
        }
        str += pointSlides[n] + ' ';
    }
    point.innerHTML = str;
}
