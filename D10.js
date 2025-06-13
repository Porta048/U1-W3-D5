/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// Aggiungo un separatore visivo per la console
console.log("%c=== INIZIO ESERCIZI ===", "color: blue; font-size: 16px; font-weight: bold");

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("%cEsercizio A - Somma:", "color: green; font-weight: bold", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("%cEsercizio B - Numero casuale:", "color: green; font-weight: bold", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
    name: "Mario",
    surname: "Rossi",
    age: 25
};
console.log("%cEsercizio C - Oggetto me:", "color: green; font-weight: bold", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("%cEsercizio D - Oggetto me dopo rimozione age:", "color: green; font-weight: bold", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS", "Python"];
console.log("%cEsercizio E - Oggetto me con skills:", "color: green; font-weight: bold", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Java");
console.log("%cEsercizio F - Skills dopo aggiunta:", "color: green; font-weight: bold", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("%cEsercizio G - Skills dopo rimozione ultimo elemento:", "color: green; font-weight: bold", me.skills);

console.log("%c=== FINE ESERCIZI BASICS ===", "color: blue; font-size: 16px; font-weight: bold");

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log("%cEsercizio 1 - Risultato dado:", "color: green; font-weight: bold", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log("%cEsercizio 2 - Numero maggiore tra 5 e 3:", "color: green; font-weight: bold", whoIsBigger(5, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
*/
function splitMe(str) {
    return str.split(" ");
}
console.log("%cEsercizio 3 - Split stringa:", "color: green; font-weight: bold", splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, bool) {
    return bool ? str.slice(1) : str.slice(0, -1);
}
console.log("%cEsercizio 4 - Stringa modificata (primo carattere):", "color: green; font-weight: bold", deleteOne("Hello", true));
console.log("%cEsercizio 4 - Stringa modificata (ultimo carattere):", "color: green; font-weight: bold", deleteOne("Hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
*/
function onlyLetters(str) {
    return str.replace(/[0-9]/g, "");
}
console.log("%cEsercizio 5 - Solo lettere:", "color: green; font-weight: bold", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}
console.log("%cEsercizio 6 - Email valida:", "color: green; font-weight: bold", isThisAnEmail("test@example.com"));
console.log("%cEsercizio 6 - Email non valida:", "color: green; font-weight: bold", isThisAnEmail("test@example"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
    const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    return giorni[new Date().getDay()];
}
console.log("%cEsercizio 7 - Giorno corrente:", "color: green; font-weight: bold", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
*/
function rollTheDices(num) {
    const values = [];
    let sum = 0;
    
    for(let i = 0; i < num; i++) {
        const roll = dice();
        values.push(roll);
        sum += roll;
    }
    
    return {
        sum: sum,
        values: values
    };
}
console.log("%cEsercizio 8 - Risultato dadi:", "color: green; font-weight: bold", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
    const today = new Date();
    const diffTime = Math.abs(today - new Date(date));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log("%cEsercizio 9 - Giorni trascorsi:", "color: green; font-weight: bold", howManyDays("2024-01-01"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    return today.getDate() === birthDate.getDate() && 
           today.getMonth() === birthDate.getMonth();
}
console.log("%cEsercizio 10 - È il mio compleanno:", "color: green; font-weight: bold", isTodayMyBirthday("1990-05-15"));

console.log("%c=== FINE ESERCIZI FUNZIONI ===", "color: blue; font-size: 16px; font-weight: bold");

// Arrays & Oggetti

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri.
*/
function deleteProp(obj, prop) {
    const newObj = {...obj};
    delete newObj[prop];
    return newObj;
}
console.log("%cEsercizio 11 - Oggetto senza proprietà:", "color: green; font-weight: bold", deleteProp({a: 1, b: 2}, "a"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
    return movies.reduce((newest, current) => 
        parseInt(current.Year) > parseInt(newest.Year) ? current : newest
    );
}
console.log("%cEsercizio 12 - Film più recente:", "color: green; font-weight: bold", newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
    return movies.length;
}
console.log("%cEsercizio 13 - Numero di film:", "color: green; font-weight: bold", countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film.
*/
function onlyTheYears() {
    return movies.map(movie => movie.Year);
}
console.log("%cEsercizio 14 - Anni dei film:", "color: green; font-weight: bold", onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso.
*/
function onlyInLastMillennium() {
    return movies.filter(movie => parseInt(movie.Year) < 2000);
}
console.log("%cEsercizio 15 - Film del millennio scorso:", "color: green; font-weight: bold", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film.
*/
function sumAllTheYears() {
    return movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0);
}
console.log("%cEsercizio 16 - Somma degli anni:", "color: green; font-weight: bold", sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film che la contengono nel titolo.
*/
function searchByTitle(str) {
    return movies.filter(movie => 
        movie.Title.toLowerCase().includes(str.toLowerCase())
    );
}
console.log("%cEsercizio 17 - Film con 'Lord':", "color: green; font-weight: bold", searchByTitle("Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array.
*/
function searchAndDivide(str) {
    return {
        match: movies.filter(movie => 
            movie.Title.toLowerCase().includes(str.toLowerCase())
        ),
        unmatch: movies.filter(movie => 
            !movie.Title.toLowerCase().includes(str.toLowerCase())
        )
    };
}
console.log("%cEsercizio 18 - Film divisi:", "color: green; font-weight: bold", searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" privo dell'elemento nella posizione ricevuta.
*/
function removeIndex(index) {
    return movies.filter((_, i) => i !== index);
}
console.log("%cEsercizio 19 - Array senza elemento:", "color: green; font-weight: bold", removeIndex(0));

console.log("%c=== FINE ESERCIZI ARRAYS & OGGETTI ===", "color: blue; font-size: 16px; font-weight: bold");

// DOM

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
    return document.getElementById("container");
}
console.log("%cEsercizio 20 - Elemento container:", "color: green; font-weight: bold", selectContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTd() {
    return document.getElementsByTagName("td");
}
console.log("%cEsercizio 21 - Elementi td:", "color: green; font-weight: bold", selectAllTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td>.
*/
function printTdContent() {
    const tds = document.getElementsByTagName("td");
    console.log("%cEsercizio 22 - Contenuto td:", "color: green; font-weight: bold");
    for(let td of tds) {
        console.log(td.textContent);
    }
}
printTdContent();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function makeLinksRed() {
    const links = document.getElementsByTagName("a");
    for(let link of links) {
        link.style.backgroundColor = "red";
    }
}
console.log("%cEsercizio 23 - Links colorati di rosso", "color: green; font-weight: bold");
makeLinksRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addToList() {
    const list = document.getElementById("myList");
    if (list) {
        const newItem = document.createElement("li");
        newItem.textContent = "Nuovo elemento";
        list.appendChild(newItem);
        console.log("%cEsercizio 24 - Elemento aggiunto alla lista", "color: green; font-weight: bold");
    } else {
        console.log("%cEsercizio 24 - Lista non trovata", "color: red; font-weight: bold");
    }
}
addToList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyList() {
    const list = document.getElementById("myList");
    if (list) {
        list.innerHTML = "";
        console.log("%cEsercizio 25 - Lista svuotata", "color: green; font-weight: bold");
    } else {
        console.log("%cEsercizio 25 - Lista non trovata", "color: red; font-weight: bold");
    }
}
emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test".
*/
function addClassToTr() {
    const trs = document.getElementsByTagName("tr");
    for(let tr of trs) {
        tr.classList.add("test");
    }
    console.log("%cEsercizio 26 - Classe 'test' aggiunta ai tr", "color: green; font-weight: bold");
}
addClassToTr();

console.log("%c=== FINE ESERCIZI DOM ===", "color: blue; font-size: 16px; font-weight: bold");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*".
*/
function halfTree(height) {
    console.log("%cEsercizio 27 - Mezzo albero:", "color: green; font-weight: bold");
    for(let i = 1; i <= height; i++) {
        console.log("*".repeat(i));
    }
}
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*".
*/
function tree(height) {
    console.log("%cEsercizio 28 - Albero completo:", "color: green; font-weight: bold");
    for(let i = 0; i < height; i++) {
        const spaces = " ".repeat(height - i - 1);
        const stars = "*".repeat(2 * i + 1);
        console.log(spaces + stars);
    }
}
tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}
console.log("%cEsercizio 29 - È primo 17:", "color: green; font-weight: bold", isItPrime(17));
console.log("%cEsercizio 29 - È primo 4:", "color: green; font-weight: bold", isItPrime(4));

console.log("%c=== FINE ESERCIZI EXTRA ===", "color: blue; font-size: 16px; font-weight: bold");

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
