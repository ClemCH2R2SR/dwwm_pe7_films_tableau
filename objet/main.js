"use strict";

function generateFilmHeaderRow()
{
    let headers = ['Id', 'Titre', 'Année', 'Durée', 'Réalisateur', 'Genre', 'Studio'];
    
    // Création des éléments HTML dont on va avoir besoin
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // On parcourt la liste des en-têtes, on crée les éléments TH correspondants
    // puis on les rattache au tr
    let i = 0;
    while (i<headers.length) {
        let th = document.createElement('th');
        th.textContent = headers[i];
        tr.appendChild(th);
        i++;
    }

    // On rattache le tr au thead
    thead.appendChild(tr);

    return thead;
}

function directorToString(director) {
    return director.name + ", " + director.firstname;
}

function generateFilmDataRow(film) {

    let attributes = ['id', 'title', 'date', 'duration', 'director', 'genre', 'studio'];

    let tr = document.createElement('tr');

    let i = 0;

    while( i < attributes.length)
    {

    let td = document.createElement('td');
    td.textContent = film[attributes[i]];
    if(attributes[i] == 'director'){
        td.textContent = directorToString(film.director);
    }
    tr.appendChild(td);
    i++;
    }


    /*
    let i = 0;
    while (i < film.length) {
        let td = document.createElement('td');
        td.textContent = film[i];
        tr.appendChild(td);
        i++;
    }
    */
    return tr;
}

function generateFilmTBody(films)
{
    let tbody = document.createElement('tbody');
    let i = 0;
    while (i<films.length) {
        let tr = generateFilmDataRow(films[i]);
        tbody.appendChild(tr);
        i++;
    }
    return tbody;
}

// fonction pour convertir le tableau JS en element HTML
function convertFilmListToHTML(films)
{
    // declarer la variable table et lui attribuer le resultat de la fonction de la creation du tableau
    let table = document.createElement('table');

    // declarer la variable thead et lui attribuer le resultat de la fonction permettant de generer la ligne header du tableau en HTML
    let thead = generateFilmHeaderRow();

    //declarer la variable tbody et lui attribuer le resultat de la fonction permettant de generer le corps du tableau en HTML

    let tbody = generateFilmTBody(films);

    // rattacher à la table les elements thead et tbody
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

// attendre que la page soit chargé avant de laisser la fonction main
window.addEventListener('load', function() 
{

    const films = [
        {
            id: 1,
            title: "Titanic",
            date: 1999,
            duration: "3h17",
            director: { 
                name: "Cameron",
                firstname: "James"
            },
            genre: "Historique",
            studio: "20th Century"
        },
        {
            id: 2,
            title:"SuperMario",
            date: 2023,
            duration:"1h49",
            director:{name:"Kojima", firstname:"Ideo"},
            genre:"Jeu vidéo",
            studio:"Nintendo"
        },
        {
            id: 3, 
            title: "Marios Bros",
            date: 1994,
            duration: "1h24",
            director: {
                name: "Doe",
                firstname: "John"
            },
            genre: "Nanard",
            studio: "Paramount"
        },
        {
            id: 4, 
            title:"Narnia", 
            date: 2005,
            duration: "2h12",
            director : {
                name: "Adamson", 
                firstname: "Andrew"
            }, 
            genre:"Heroic Fantaisy",
            studio: "Paramount"
        },
    ];

    console.table(films);
    //declarer un variable pour y mettre le résultat de la fonction devant convertir le tableau de films javascript en tableau HTML
    let htmlTable = convertFilmListToHTML(films);
    //ratacher au body l'element htmlTable
    document.querySelector('body').appendChild(htmlTable);

});