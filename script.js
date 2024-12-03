

let son = 0;


const qoshish = document.getElementById('qoshish');
const tozalash = document.getElementById('tozalash');
const boxContainer = document.getElementById('boxContainer');



qoshish.addEventListener('click', () => {
    son++;
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = son;

    

    box.style.backgroundColor = randomranggeneratori();



    box.addEventListener('click', () => {
        boxContainer.removeChild(box);
    });

    boxContainer.appendChild(box);
});



tozalash.addEventListener('click', () => {
    boxContainer.innerHTML = '';
    son = 0;
});



function randomranggeneratori() {
    const randomranglaruchunelementlar = '0123456789ABCDEF';
    let rang = '#';
    for (let i = 0; i < 6; i++) {
        rang += randomranglaruchunelementlar[Math.floor(Math.random() * 16)];
    }
    return rang;
}
