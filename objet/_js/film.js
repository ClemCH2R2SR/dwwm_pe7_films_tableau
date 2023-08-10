"use strict";

class Film {
    id;
    title;
    date;
    duration;
    director;
    genre;
    studio;
    toHTMLTableRow() {
        let attributes = ['id', 'title', 'date', 'duration', 'director', 'genre', 'studio'];
        let tr = document.createElement('tr');
        let i = 0;
        while (i < attributes.length) {
            let td = document.createElement('td');
            td.textContent = this[attributes[i]];
            if (attributes[i] == 'director') {
                td.textContent = this.director.toString();
            }
            tr.appendChild(td);
            i++;
        }
        return tr;
    }
    toHTMLTableHeader() {
        let headers = ['Id', 'Titre', 'Année', 'Durée', 'Réalisateur', 'Genre', 'Studio'];
    
        // Création des éléments HTML dont on va avoir besoin
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
    
        // On parcourt la liste des en-têtes, on crée les éléments TH correspondants
        // puis on les rattache au tr
        let i = 0;
        while (i < headers.length) {
            let th = document.createElement('th');
            th.textContent = headers[i];
            tr.appendChild(th);
            i++;
        }
    
        // On rattache le tr au thead
        thead.appendChild(tr);
    
        return thead;
    }
}