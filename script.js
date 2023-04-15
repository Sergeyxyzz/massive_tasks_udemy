const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let result = Object.entries(arr).filter(item => item[1].rating >= 8).map(item => item[1])
    return result // получили объекты только с рейтинго 8 и более
}


function showListOfFilms(arr) { 
    let result = Object.entries(arr).filter(item => item[1].name).map(item => item[1].name).reduce((sum, current) => `${sum}, ${current}`)
    return result // Titanic, Die hard 5, Matrix, Some bad film
}


function setFilmsIds(arr) {
    Object.entries(arr).map(item => item[1].id = +item[0])
    return arr // в объект добавили ключ id со значениями от 0 и до кол-ва элементов
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    arr.every(item => item.id)
    return !!arr // true
}
