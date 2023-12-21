const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
let chosenCards = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}
createBoard();

function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const firstCard = chosenCards[0];
    const secondCard = chosenCards[1];

    if (cardArray[firstCard].name === cardArray[secondCard].name) {
        alert('You found a match!');
        cards[firstCard].setAttribute('src', 'images/white.png');
        cards[secondCard].setAttribute('src', 'images/white.png');
        cards[firstCard].removeEventListener('click', flipCard);
        cards[secondCard].removeEventListener('click', flipCard);
        cardsWon.push(chosenCards);
    } else {
        cards[firstCard].setAttribute('src', 'images/blank.png');
        cards[secondCard].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
        cards[firstCard].addEventListener('click', flipCard);
        cards[secondCard].addEventListener('click', flipCard);
    }

    result.textContent = cardsWon.length;
    chosenCards = [];

    if (cardsWon.length === cardArray.length / 2) {
        result.textContent = 'Congratulations! You found them all!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[cardId].img);
    chosenCards.push(cardId);
    if (chosenCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }


}