const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const searchButton = document.getElementsByClassName('search-button')[0]
const searchBar = document.getElementsByClassName('search-bar')[0]

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('active')
})

const testimoni = [...document.querySelectorAll('.testimoni')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

testimoni.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const cards = document.querySelectorAll(".card");

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    });
}

const userContent = document.querySelectorAll(".user-content");

window.addEventListener('scroll', checkUser);

checkUser()

function checkUser() {
    const triggerUser = window.innerHeight / 5 * 4;

    userContent.forEach(card => {
        const userTop = card.getBoundingClientRect().top;

        if(userTop < triggerUser) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    });
}

const diskonContent = document.querySelectorAll(".diskon-content");

window.addEventListener('scroll', checkDiskon);

checkDiskon()

function checkDiskon() {
    const triggerDiskon = window.innerHeight / 5 * 4;

    diskonContent.forEach(card => {
        const diskonTop = card.getBoundingClientRect().top;

        if(diskonTop < triggerDiskon) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    });
}

const guruContent = document.querySelectorAll(".guru-card-container");

window.addEventListener('scroll', checkGuru);

checkGuru()

function checkGuru() {
    const triggerGuru = window.innerHeight;

    guruContent.forEach(card => {
        const guruTop = card.getBoundingClientRect().top;

        if(guruTop < triggerGuru) {
            card.classList.add('show');
        }
        else {
            card.classList.remove('show');
        }
    });
}

  

