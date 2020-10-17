const srcImages = {
    1: 'images/1.jpg',
    2: 'images/2.jpg',
    3: 'images/3.jpg',
    4: 'images/4.jpg',
    5: 'images/5.jpg',
    6: 'images/6.jpg',
    7: 'images/7.jpg',
    8: 'images/8.jpg',
    9: 'images/9.jpg',
    10: 'images/10.jpg',
    11: 'images/11.jpg',
    12: 'images/12.jpg',
    13: 'images/13.jpg',
    14: 'images/14.jpg',
    15: 'images/15.jpg',
    16: 'images/16.jpg',
    17: 'images/17.jpg',
    18: 'images/18.jpg',
    19: 'images/19.jpg',
}

const carousel = document.querySelector('.carousel-inner');
const indicator = document.querySelector('.carousel-indicators');
let carouselHTML = ''
let indicatorHTML = ''

function createHTML(item) {
    if (item == 1) {
        return `<div class="carousel-item active">
        <img src="${srcImages[item]}" class="d-block w-100">
        </div>
        `
    }
    else {
        return `<div class="carousel-item">
        <img src="${srcImages[item]}" class="d-block w-100">
        </div>
        `
    }
}

function createIndicator(item) {
    if (item == 1) {
        return `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
    }
    else {
        return `<li data-target="#carouselExampleIndicators" data-slide-to=${item - 1}></li>`
    }
}

for (item in srcImages) {
    carouselHTML += createHTML(item);
    indicatorHTML += createIndicator(item);
}

carousel.innerHTML = carouselHTML;
indicator.innerHTML = indicatorHTML;