'use strict';

//---------------Блок работы с кнопокй "Лайк"------------------------------

const likeBlock = document.querySelector('.motivation__like')
const likeBtn = likeBlock.querySelector('a')
const likeCounter = likeBlock.querySelector('output')
let likeCounterNumbers = +likeCounter.textContent


likeBtn.addEventListener('click', function () {
    event.preventDefault()
    likeBtn.classList.toggle('active')

    if (!likeBtn.classList.contains('active')) {

        likeCounter.textContent = --likeCounterNumbers
    } else {
        likeCounter.textContent = ++likeCounterNumbers
    }

})



//---------------Блок работы с формой "Написать мне"-----------------------

const commentsColumn = document.querySelector('.comments__column')
const btn = document.querySelector('.comments-form__btn')
const nameInpt = document.querySelector('#name')
const textComments = document.querySelector('#comment')

function createComment(name, message) {

    let commentItem = document.createElement('div')
    commentItem.classList.add('comments__item')
    commentsColumn.append(commentItem)

    let commentPerson = document.createElement('div')
    commentPerson.classList.add('comments__person')
    commentItem.append(commentPerson)

    let commentImg = document.createElement('img')
    commentImg.setAttribute('src', 'img/article/comments/3.png')
    commentPerson.append(commentImg)

    let commentPersonName = document.createElement('h4')
    commentPersonName.classList.add('comments__name')
    commentPersonName.textContent = name
    commentPerson.append(commentPersonName)

    let commentMessage = document.createElement('div')
    commentMessage.classList.add('comments__message')
    commentMessage.textContent = message
    commentItem.append(commentMessage)
}

btn.addEventListener('click', function () {

    createComment(nameInpt.value, textComments.value)
})


//-------------Проверка ввода в поле "сообщение"
const textArea = document.querySelector('#comment')


textArea.addEventListener('input', function () {
    if (textArea.value.length < 10 || textArea.value.length > 300) {

        btn.setAttribute('disabled', 'disabled')
        textArea.style.color = 'red'
    }
    else {
        btn.removeAttribute('disabled')
        textArea.style.color = '#2E2F22'
    }

})
window.addEventListener('load', function () {
    if (textArea.value.length === 0) {
        btn.setAttribute('disabled', 'disabled')
    }
})




const ibgs = document.querySelectorAll('.ibg')

for (let ibg of ibgs) {
    ibg.style.backgroundImage = `url(${ibg.querySelector('img').getAttribute('src')})`
}