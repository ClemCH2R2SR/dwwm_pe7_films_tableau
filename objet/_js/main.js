"use strict";

function generateFilmTBody(films) {
    let tbody = document.createElement('tbody');
    let i = 0;
    while (i < films.length) {
        let tr = films[i].toHTMLTableRow();
        tbody.appendChild(tr);
        i++;
    }
    return tbody;
}

function convertFilmListToHTML(films) {
    let table = document.createElement('table');

    let thead = films[0].toHTMLTableHeader();

    let tbody = generateFilmTBody(films);


    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function buildFilmList()
{
    let films = [];
    let titanic = new Film ();
    titanic.id = 1;
    titanic.title = "Titanic";
    titanic.date = 1999;
    titanic.duration = "3h17";
    let director = new Person();
    director.name = "Cameron";
    director.firstname = "James";
    titanic.director = director;
    titanic.genre = "Historique";
    titanic.studio = "20th Century";
    films.push(titanic);
    let supermario = new Film ();
    supermario.id = 2;
    supermario.title = "SuperMario";
    supermario.date = 2023;
    supermario.duration = "1h49";
    director = new Person ();
    director.name = "Kojima" ;
    director.firstname = "Ideo";
    supermario.director = director; 
    supermario.genre = "Jeu video";
    supermario.studio = "Nintendo";
    films.push(supermario);
    let narnia = new Film ();
    narnia.id = 4;
    narnia.title = "Narnia";
    narnia.date = 2005;
    narnia.duration = "2h12";
    director = new Person();
    director.name = "Adamson";
    director.firstname = "Andrew";
    narnia.director = director;
    narnia.genre = "Heroic Fantasy";
    narnia.studio = "Paramount";
    films.push(narnia);
    let marioBros = new Film ();
    marioBros.id = 3;
    marioBros.title = "marioBros";
    marioBros.date = 1994;
    marioBros.duration = "1h24";
    director = new Person();
    director.name = "John";
    director.firstname = "Doe";
    marioBros.director = director;
    marioBros.genre = "Nanard";
    marioBros.studio = "Paramount";
    films.push(marioBros);

    return films;
}

window.addEventListener('load', function () {

    const films = buildFilmList();

    let htmlTable = convertFilmListToHTML(films);
    document.querySelector('body').appendChild(htmlTable);

});