const fleetCard = document.querySelector('.fleetData')
const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
const kabluk = document.querySelector('.c1');
const gaz3 = document.querySelector('.c2');
const gaz4 = document.querySelector('.c3');
const check = '../img/check.png'
let count = 1;

const styleButton = (count) => {
    debugger
    switch (count){
        case 1 : 
        kabluk.classList.add('active')
        gaz3.classList.remove('active')
        gaz4.classList.remove('active')
        break
        case 2 : 
        kabluk.classList.remove('active')
        gaz3.classList.add('active')
        gaz4.classList.remove('active')
        break
        case 3 : 
        kabluk.classList.remove('active')
        gaz3.classList.remove('active')
        gaz4.classList.add('active')
        break
        }
}

const kablukClick = () => {
    count = 1;
    slider(count);
}

const gaz3Click = () => {
    count = 2;
    slider(count);
}

const gaz4Click = () => {
    count = 3;
    slider(count);
}

const forwardClick = () => {
    if(count === 3) {
        count = 1;
        return slider(count)
    }
    count++;
    slider(count);
}

const backClick = () => {
    if(count === 1) {
        count = 3;
        return slider(count)
    }
    count--;
    slider(count);
}

const slider = (count) => {
    const newFleetData = fleetData.filter(item => item.id === count)
    console.log(newFleetData)
    fleetCard.innerHTML = `<div class="spanContainer">
    <span class="oldSpan">${newFleetData[0].name}</span>
    <span class="span"><img src="${check}" alt="" class="check">Ширина ${newFleetData[0].w}.</span>
    <span class="span"><img src="${check}" alt="" class="check">Высота ${newFleetData[0].h}.</span>
    <span class="span"><img src="${check}" alt="" class="check">Объем ${newFleetData[0].ob}</span>
    <span class="span"><img src="${check}" alt="" class="check">Грузоподъемность ${newFleetData[0].up}</span>
    <button class="priceButton">Заказать</button>
</div>
<img src=${newFleetData[0].img} alt="" class="fleetImg">
</div>`
styleButton(count)
}

const fleetData = [{
        id: 1,
        name: 'Каблук',
        w: '2м',
        h: '1.5м',
        ob: `4.5m<sup>3</sup>`,
        up: '700 кг',
        img: './img/kabluk.jpg'
    },
    {
        id: 2,
        name: 'Газель 3 метра',
        w: '2м',
        h: '2м',
        ob: `12m<sup>3</sup>`,
        up: '1,5 тонны',
        img: './img/gaz3.jpg'
    },
    {
        id: 3,
        name: 'Газель 4 метра',
        w: '2м',
        h: '2м',
        ob: `16m<sup>3</sup>`,
        up: '2,5 тонны',
        img: './img/gaz4.jpg'
    }
]

kabluk.addEventListener('click', kablukClick);
gaz3.addEventListener('click', gaz3Click);
gaz4.addEventListener('click', gaz4Click);
forward.addEventListener('click', forwardClick);
back.addEventListener('click', backClick);

slider(count)

