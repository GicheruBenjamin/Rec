// Selecting Elements
const body = document.body;
const val = body.querySelector('#val');
const submit = body.querySelector('#submit');
const place = body.querySelector('#place');

submit.addEventListener('click', () => {
const numDivs = parseInt(val.value);
if (!isNaN(numDivs)) { 
  place.innerHTML = "";         
  createDivs(numDivs);
}
});

function createDivs(num) {
if (num > 0) {
    const gtr = document.createElement('div');
    gtr.classList.add('gtr');
    const gtrs = document.createElement('span');

    gtrs.textContent = `${num}`;
    gtr.appendChild(gtrs);
    place.appendChild(gtr);
    createDivs(num - 1);
}
}