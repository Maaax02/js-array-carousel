let title = [
    'Sciopero generale del 16 dicembre, ecco chi si ferma e chi no',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'Novità nel mondo della tecnologia'
     

]
let news = [ 
    'Milano torna lo sciopero generale, indetto da Cgil Uil con il dissenso della Cisl, per protestare contro la Manovra del governo Draghi. "Insieme per la giustizia" è lo slogan scelto dalle due sigle per l\'agitazione di otto ore del 16 dicembre. Prevista una manifestazione nazionale a Roma e il contemporaneo svolgimento di iniziative interregionali in altre quattro città: Bari, Cagliari, Milano e Palermo.',
    'Voluptates ad praesentium suscipit atque nulla provident facilis, laboriosam cupiditate vero quibusdam! Debitis in nulla accusantium a aliquid error ut aut et.',
    'In uscita nei prossimi mesi gli hardware di ultima generazione pronti pronti a soddsifare ogni aspettativa dell\'utente. Lorem Ipsum sit dolor amet. Saepe, repellendus consectetur quam blanditiis quas voluptate commodi cum corrupti amet nobis! Alias quam dignissimos voluptas quas veritatis cupiditate, incidunt nesciunt! Dolore!'
]

let currentIndex = 0;
let outputTitle = document.querySelector('.main-title');
let outputParagraph = document.querySelector('.paragraph');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

outputTitle.innerHTML = title[0];
outputParagraph.innerHTML = news[0];

right.addEventListener('click', function(){
    if(currentIndex >= title.length -1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    outputTitle.innerHTML= title[currentIndex];
    outputParagraph.innerHTML= news[currentIndex];
})




