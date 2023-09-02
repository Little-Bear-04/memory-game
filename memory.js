const cardArray =[
    {
        name:"bear",
        img:"newbear.png",
    },
    {
        name:"cat",
        img:"newcat.png",
    },
    {
        name:"fox",
        img:"newfox.png",
    },
    {
        name:"frog",
        img:"newfrog.png",
    },
    {
        name:"pig",
        img:"newpig.png",
    },
    {
        name:"wolf",
        img:"newwolf.png",
    },
        {
        name:"bear",
        img:"newbear.png",
    },
    {
        name:"cat",
        img:"newcat.png",
    },
    {
        name:"fox",
        img:"newfox.png",
    },
    {
        name:"frog",
        img:"newfrog.png",
    },
    {
        name:"pig",
        img:"newpig.png",
    },
    {
        name:"wolf",
        img:"newwolf.png",
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src','squaretile.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img'); 
    // or add in #grid to search all items in the div if adding exta images later
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'squaretile.jpg');
        cards[optionTwoId].setAttribute('src', 'squaretile.jpg');
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'white1.png');
        cards[optionTwoId].setAttribute('src', 'white1.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
           cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'squaretile.jpg');
        cards[optionTwoId].setAttribute('src', 'squaretile.jpg');
        alert('Sorry, try again!');
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length/2) {
        //resultDisplay.innerHTML = 'Congratulations, you found them all!'
        alert('Congratulatons, you found them all!');
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }

}