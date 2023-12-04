// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3: Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const box = [ 
    { 
    image: 'img/01.webp', 
    title: 'Marvel\'s Spiderman Miles Morale', 
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    { 
    image: 'img/02.webp', 
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },
    { 
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },
    {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    } 
];

console.log(box);


const carouselContainer = document.getElementById("carousel-container");
    
box.forEach((immagine, puntatoreIndice) => {

    // creare costante per creare div contenitore
    const boxContainer = document.createElement("div")
    boxContainer.classList.add("img-container");

    // // se l'indice è uguale a 0 aggiungi classe css
    if (puntatoreIndice === 0) {
        boxContainer.classList.add("active");
    }

    // creazione costanti per riempire dinamicamente il dom
    const img = document.createElement("img");
    img.src = immagine.image;

    const title = document.createElement("h1");
    title.innerHTML = immagine.title;

    const text = document.createElement("h3");
    text.innerHTML = immagine.text;

    const nextButton = document.createElement ("div")
    nextButton.id = ("next");
    nextButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    // aggiungere la funzione per cambiare immagine al click
    nextButton.addEventListener('click', () => updateImg ("next"));

    const prevButton = document.createElement ("div")
    prevButton.id = ("prev");
    prevButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    // aggiungere la funzione per cambiare immagine al click
    prevButton.addEventListener('click', () => updateImg ("prev"));

    // creare const per start per inizializzare carosello automatico
    const startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.innerHTML = "Start";
    startButton.addEventListener('click', nextImage);
    
    // creare const per start per inizializzare carosello automatico
    const stopButton = document.createElement("button");
    stopButton.classList.add("stop");
    stopButton.innerHTML = "Stop";
    stopButton.addEventListener('click', stopImage);

   
    // appendere i vari elementi
    boxContainer.append(img);

    boxContainer.append(title);

    boxContainer.append(text);

    boxContainer.append(nextButton);

    boxContainer.append(prevButton);

    boxContainer.append(stopButton);

    boxContainer.append(startButton);


    // appendere tutto al container principale
    carouselContainer.append(boxContainer);
    }
);


// Inizializza l'indice corrente a 0
let currentIndex = 0;
let interval;

// aggiornare il carosello in base alla direzione
function updateImg (direction) {
    // Ottienere tutti gli elementi con la classe 'img-container'
    const imgContainers = document.querySelectorAll(".img-container");

    // Aggiorna l'indice in base alla direzione
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % box.length;
    } else {
        currentIndex = (currentIndex - 1 + box.length) % box.length;
    }

    // cerca tutti gli elementi con la classe 'img-container'
    imgContainers.forEach((container, index) => {
        // Rimuovere la classe 'active' da tutti gli elementi
        container.classList.remove("active");
        // Aggiungere la classe 'active' solo all'elemento corrente
        if (index === currentIndex) {
            container.classList.add("active");
        }
    });
};



function nextImage() {
    interval = setInterval(() => {
        updateImg("next");
    }, 3000);
}

function stopImage() {
    clearInterval(interval);
}




