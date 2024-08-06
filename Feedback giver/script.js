//--Global--
const timer = 2000;
const MAX_CHAR = 150;


const textareaEL = document.querySelector('.form__textarea');
const counterEL = document.querySelector('.counter');
const formEL = document.querySelector('.form');
const feedsEL=document.querySelector('.feedbacks');
const submitEL=document.querySelector('.submit-btn');


const inputHandler = () => {
    const maxChars = MAX_CHAR;

    const CharsTyped = textareaEL.value.length;

    const charsLeft = maxChars - CharsTyped;

    // show number of characters left
    counterEL.textContent = charsLeft;
}

textareaEL.addEventListener('input', inputHandler);

// -- Start Submit Component

const submitHandler = event => {
    event.preventDefault();
    const text = textareaEL.value;

    if (text.includes('#') && text.length >= 5) {
        formEL.classList.add('form--valid');
        changeClass('form--valid');
    } else {
        formEL.classList.add('form--invalid');
        changeClass('form--invalid'); 
        textareaEL.focus();
        return;
    }
    //ToDo Job

    const hashtag = text.split(' ').find(word => word.includes('#'));
    console.log(hashtag);
    const company = hashtag.substring(1);
    console.log(company);
    const badgeLetter = company.substring(0,1).toUpperCase();
    console.log(badgeLetter);
    const upvoteCount = 0;
    const dayAgo = 0;

    const feedItem = `
    <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${company}</p>
                <p class="feedback__text">
                ${text}
                </p>
            </div>
            <p class="feedback__date">${dayAgo === 0 ? 'NEW' : `${dayAgo}d`}</p>
        </li>
    `;
feedsEL.insertAdjacentHTML('beforeend',feedItem);
textareaEL.value='';
submitEL.blur();
counterEL.textContent = MAX_CHAR;
};

function changeClass(className) {
    setTimeout(() => formEL.classList.remove(className), timer);
}

formEL.addEventListener('submit', submitHandler);
// -- End Submit Component