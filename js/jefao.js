const fighters = [
    { name: 'Tyson Fury', age: 34, country: 'π¬π§', division: 'pesado', gender: 'M', img: 'tyson.jpeg' },
    { name: 'Jermell Charlo', age: 32, country: 'πΊπΈ', division: 'medio', gender: 'M', img: 'jermel.jpeg' },
    { name: 'Josh Taylor', age: 31, country: 'π¬π§', division: 'medio', gender: 'M', img: 'josh.jpeg' },
    { name: 'Gervonta Davis', age: 28, country: 'πΊπΈ', division: 'leve', gender: 'M', img: 'gervonta.jpeg' },
    { name: 'Shakur Stevenson', age: 25, country: 'πΊπΈ', division: 'medio', gender: 'M', img: 'shakur.jpeg' },
    { name: 'Rey Vargas', age: 31, country: 'π²π½', division: 'medio', gender: 'M', img: 'rey.jpeg' },
    { name: 'Naoya Inoue', age: 31, country: 'π―π΅', division: 'medio', gender: 'M', img: 'naoya.jpeg' },
    { name: 'Dmitrii Bivol', age: 31, country: 'π·πΊ', division: 'meio pesado', gender: 'M', img: 'dimitrii.jpeg' },
    { name: 'Lawrence Okolie', age: 29, country: 'π¬π§', division: 'medio', gender: 'M', img: 'lawrence.jpeg' },
    { name: 'Saul Alvarez', age: 32, country: 'π¬π§', division: 'super medio', gender: 'M', img: 'saul.jpeg' },
]

function renderRandomFighter(){
    const champion = document.querySelector('#champion')
    const champ = fighters[randomIntFromInterval(0, 9)]
    champion.innerHTML = `
        <h4>${champ.name}</h4>
        <img src="assets/imgs/figthers/${champ.img}" alt="" class="rounded">`
}

function renderFighter(index){
    const champion = document.querySelector('#champion')
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const champ = fighters[urlParams.get('fighter')]
    // console.log(urlParams.get('fighter'))
    champion.innerHTML = `
        <h4>${champ.name}</h4>
        <img src="assets/imgs/figthers/${champ.img}" alt="" class="rounded">`
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function renderFighters() {
    const fightersList = document.querySelector('#fightersList')
    fighters.forEach((fighter, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="champ.html?fighter=${index}">
            <div class="jefao-main-content">
                <div>
                    <img src="assets/imgs/figthers/${fighter.img}" alt="${fighter.name}" class="rounded" style="height: 75px">
                </div>
                <div style="padding-left: 8px">
                    <h6>${fighter.country} ${fighter.name}</h6>
                    <p><small class="text-muted">${fighter.division}</small></p>
                </div>
            </div>
            </a>`
        fightersList.appendChild(li)
    })
}
