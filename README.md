# Spiegazione esercizi JavaScript (D10.js)

Ciao! Qui trovi le mie spiegazioni (molto terra terra) su come ho ragionato per risolvere gli esercizi del file `D10.js`. Ho cercato di scrivere tutto in modo semplice, come se stessi spiegando a un compagno di corso. Se qualcosa non è chiaro, chiedimi pure!

## JS Basics

**Esercizio A**
- Qui era facile: ho fatto semplicemente 10 + 20 e ho messo il risultato in una variabile chiamata `sum`.

**Esercizio B**
- Ho usato `Math.random()` per avere un numero casuale tra 0 e 1, poi l'ho moltiplicato per 21 e arrotondato con `Math.floor()` per avere un numero intero tra 0 e 20.

**Esercizio C**
- Ho creato un oggetto che rappresenta me stesso, con nome, cognome e età. Semplice oggetto JavaScript.

**Esercizio D**
- Ho tolto la proprietà `age` dall'oggetto usando `delete`. Così l'oggetto non ha più l'età.

**Esercizio E**
- Ho aggiunto una nuova proprietà all'oggetto, chiamata `skills`, che è un array con i linguaggi che conosco (tipo JavaScript, HTML, ecc).

**Esercizio F**
- Ho aggiunto un nuovo linguaggio all'array `skills` usando il metodo `push()`.

**Esercizio G**
- Ho tolto l'ultimo elemento dell'array `skills` con `pop()`. Così si elimina l'ultimo linguaggio inserito.

## Funzioni

**Esercizio 1**
- Ho fatto una funzione che simula il lancio di un dado: genera un numero casuale tra 1 e 6.

**Esercizio 2**
- Qui ho fatto una funzione che prende due numeri e restituisce quello più grande. Ho usato l'operatore ternario per essere più "smart".

**Esercizio 3**
- Ho diviso una stringa in parole usando `split(" ")`, così ottengo un array con ogni parola.

**Esercizio 4**
- Ho fatto una funzione che, se il booleano è true, toglie il primo carattere della stringa, altrimenti toglie l'ultimo. Ho usato `slice()`.

**Esercizio 5**
- Ho tolto tutti i numeri da una stringa usando una regex con `replace()`. Così rimangono solo le lettere e gli spazi.

**Esercizio 6**
- Ho controllato se una stringa è un'email valida con una regex molto semplice. Non è perfetta, ma per l'esercizio va bene.

**Esercizio 7**
- Ho usato l'oggetto `Date` per sapere che giorno della settimana è oggi, e ho messo i nomi dei giorni in un array.

**Esercizio 8**
- Ho fatto una funzione che lancia il dado più volte (quante ne vuoi tu) e ti dice la somma totale e tutti i risultati dei lanci.

**Esercizio 9**
- Ho calcolato quanti giorni sono passati da una certa data a oggi facendo la differenza tra le due date e convertendo il risultato in giorni.

**Esercizio 10**
- Ho controllato se oggi è il mio compleanno confrontando solo giorno e mese (l'anno non conta).

## Arrays & Oggetti

**Esercizio 11**
- Ho fatto una funzione che restituisce una copia di un oggetto senza una proprietà specifica (quella che passi come parametro).

**Esercizio 12**
- Ho cercato il film più recente nell'array `movies` usando `reduce()`, confrontando gli anni di uscita.

**Esercizio 13**
- Ho contato quanti film ci sono nell'array `movies` usando `.length`.

**Esercizio 14**
- Ho creato un array con solo gli anni di uscita dei film usando `map()`.

**Esercizio 15**
- Ho filtrato i film usciti prima del 2000 usando `filter()`.

**Esercizio 16**
- Ho sommato tutti gli anni di uscita dei film con `reduce()`.

**Esercizio 17**
- Ho cercato i film che hanno una certa parola nel titolo usando `filter()` e `includes()` (case insensitive).

**Esercizio 18**
- Ho diviso i film in due gruppi: quelli che hanno una certa parola nel titolo e quelli che non ce l'hanno.

**Esercizio 19**
- Ho creato una funzione che restituisce l'array dei film senza l'elemento in una certa posizione (usando `filter()` e l'indice).

## DOM

**Esercizio 20**
- Ho selezionato l'elemento con id `container` usando `getElementById`.

**Esercizio 21**
- Ho selezionato tutti i tag `<td>` usando `getElementsByTagName`.

**Esercizio 22**
- Ho stampato in console il testo di ogni `<td>` con un ciclo.

**Esercizio 23**
- Ho colorato di rosso lo sfondo di tutti i link `<a>` con un ciclo.

**Esercizio 24**
- Ho aggiunto un nuovo elemento alla lista con id `myList`.

**Esercizio 25**
- Ho svuotato la lista con id `myList`.

**Esercizio 26**
- Ho aggiunto la classe CSS `test` a tutti i tag `<tr>`.

## Extra - JS Avanzato

**Esercizio 27**
- Ho fatto una funzione che stampa un mezzo albero di asterischi, ogni riga ha un asterisco in più.

**Esercizio 28**
- Ho fatto una funzione che stampa un albero "vero" di asterischi, centrando le righe con gli spazi.

**Esercizio 29**
- Ho fatto una funzione che controlla se un numero è primo (cioè divisibile solo per 1 e per se stesso). Ho usato un ciclo che arriva fino alla radice quadrata del numero per essere più veloce.

