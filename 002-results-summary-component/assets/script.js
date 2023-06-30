'use strict';

const indicatorsEl = document.querySelector('.summary--indicators');

fetch('../data.json')
    .then(data => data.json())
    .then(indicators => {
        for (const indicator of indicators) {
            displayIndicator(indicator);
        }
    });

function displayIndicator(indicator) {
    const indicatorEl = document.createElement('div');
    indicatorEl.classList.add('indicator');

    const image = new Image();
    image.classList.add('indicator--icon');
    image.src = indicator.icon;
    image.alt = `${indicator.category} Icon`;

    const h3 = document.createElement('h3');
    h3.classList.add('indicator--category');
    h3.textContent = indicator.category;

    const indicatorScoreEl = document.createElement('div');
    indicatorScoreEl.classList.add('indicator--score');

    const strong = document.createElement('strong');
    strong.textContent = indicator.score;

    const span = document.createElement('span');
    span.textContent = '/ 100';

    indicatorScoreEl.appendChild(strong);
    indicatorScoreEl.appendChild(span);

    indicatorEl.appendChild(image);
    indicatorEl.appendChild(h3);
    indicatorEl.appendChild(indicatorScoreEl);

    indicatorsEl.appendChild(indicatorEl);
}
