const row = document.querySelector('.row');
const all = document.querySelector('#all');
const search = document.querySelector('#search');
const searchBox = document.querySelector('.search-wrapper')
const searchInput = document.querySelector('#searchInput')
const result = document.querySelector('.result')
const image = document.querySelector('#image')
const name = document.querySelector('#name')
const submit = document.querySelector('#submit')
const kind = document.querySelector('#kinds')
const instruction = document.querySelector('#instruction')

const handleDrinks = () => {
    fetch('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            json.drinks.forEach(drinks => {
                row.innerHTML += `
               <div class="col-4">
                 <div class="card">
                   <img src="${drinks.strDrinkThumb}" alt="">
                <div class="card-body">
                     <h3 class="card-title">${drinks.strDrink}</h3>
                     <p class="card-subtitle">${drinks.strAlcoholic}</p>
                </div>
                  </div>
               </div>
               `
            })
        })
}
handleDrinks()

all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

search.addEventListener('change', () => {
    if (search.checked) {
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})

const handleSearch = () => {
    let value = searchInput.value
    result.classList.remove('hidden')
    console.log(value)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            console.log(value)
            json.drinks.forEach(drinks => {
                image.src = drinks.strDrinkThumb
                name.innerText = drinks.strDrink
                kind.innerText = drinks.strAlcoholic
                instruction.innerText = drinks.strInstructions
            })
        })
}

submit.addEventListener('click', () => {
    handleSearch()
})


