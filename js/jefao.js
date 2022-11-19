const fighters = [
    { name: 'Tyson Fury', age: 34, country: '🇬🇧', division: 'pesado', gender: 'M', img: 'tyson.jpeg' },
    { name: 'Jermell Charlo', age: 32, country: '🇺🇸', division: 'medio', gender: 'M', img: 'jermel.jpeg' },
    { name: 'Josh Taylor', age: 31, country: '🇬🇧', division: 'medio', gender: 'M', img: 'josh.jpeg' },
    { name: 'Gervonta Davis', age: 28, country: '🇺🇸', division: 'leve', gender: 'M', img: 'gervonta.jpeg' },
    { name: 'Shakur Stevenson', age: 25, country: '🇺🇸', division: 'medio', gender: 'M', img: 'shakur.jpeg' },
    { name: 'Rey Vargas', age: 31, country: '🇲🇽', division: 'medio', gender: 'M', img: 'rey.jpeg' },
    { name: 'Naoya Inoue', age: 31, country: '🇯🇵', division: 'medio', gender: 'M', img: 'naoya.jpeg' },
    { name: 'Dmitrii Bivol', age: 31, country: '🇷🇺', division: 'meio pesado', gender: 'M', img: 'dimitrii.jpeg' },
    { name: 'Lawrence Okolie', age: 29, country: '🇬🇧', division: 'medio', gender: 'M', img: 'lawrence.jpeg' },
    { name: 'Saul Alvarez', age: 32, country: '🇬🇧', division: 'super medio', gender: 'M', img: 'saul.jpeg' },
]

const fightersList = document.querySelector('#fightersList')

function renderFighters() {
    fighters.forEach(fighter => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div class="jefao-main-content">
                <div>
                    <img src="assets/imgs/figthers/${fighter.img}" alt="${fighter.name}" class="rounded" style="height: 75px">
                </div>
                <div style="padding-left: 8px">
                    <h5>${fighter.country} ${fighter.name}</h5>
                    <p><small class="text-muted">${fighter.division}</small></p>
                </div>
            </div>`
        fightersList.appendChild(li)
    })
}
