//creo l'array di oggetti comprendente titoli, descrizioni e immagini
//creo le variabili corrispondenti agli elementi html
//dopo ciò creo una variabile indice che mi tenga il conto 
//dopo aver cancellato gli elementi statici uso l'array fornito per popolare dinamicamente la parte dell'immagine
//creo l'evento click in cui dico che al clic le immagini devono scorrere a seconda di quale freccia venga cliccata



//creo l'array di oggetti comprendente titoli, descrizioni e immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//creo le variabili corrispondenti agli elementi html
let immaginEl = document.getElementById('carosel-actual-img');
let gameTitle = document.getElementById('carosel-actual-title');
let gameDesc = document.getElementById('carosel-actual-text');
const frecciaSin = document.getElementById("frecciasx");
const frecciaDes = document.getElementById('frecciadx');

//dopo ciò creo una variabile indice che mi tenga il conto 
let indice = 0;

//dopo aver cancellato gli elementi statici uso l'array fornito per popolare dinamicamente la parte dell'immagine
//faccio una verifica inserendo i primi elementi degli array
immaginEl.src = images[indice].image;
gameTitle.innerHTML = images[indice].title;
gameDesc.innerHTML = images[indice].text;

//creo l'evento click in cui dico che al clic le immagini devono scorrere a seconda di quale freccia venga cliccata
//credo di dover fin da adesso cercare di impostarmi il codice in modo tale da ottenere un ciclo perpetuo

frecciaDes.addEventListener('click' function(){
    //aumento il valore di indice cosicché gli elementi dell'array scorrano
    indice++;
    //mostro l'elemento dell'array corrispondente a quel valore dell'indice
    immaginEl.src = images[indice].image;
    gameTitle.innerHTML = images[indice].title;
    gameDesc.innerHTML = images[indice].text;
    console.log().
});

