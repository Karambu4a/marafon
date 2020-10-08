'use strict';


//------------------Блок работы с фоном------------------------
const ibgs = document.querySelectorAll('.ibg')

for (let ibg of ibgs) {
    ibg.style.backgroundImage = `url(${ibg.querySelector('img').getAttribute('src')})`
}
//----------------Блок работы с выпадающим списком-----------------------------------
const select = document.querySelector('select')
const options = select.children
const articlesSmall = document.querySelectorAll('.articles-small__link')
const articlesLarge = document.querySelectorAll('.articles-large__link')

select.addEventListener('change', function () {
    for (let articleSmall of articlesSmall) {
        articleSmall.classList.remove('hidden')
        articleSmall.style.position = "static"
        if (!articleSmall.querySelector('span').textContent.includes(select.selectedOptions[0].dataset.choose)) {
            articleSmall.classList.add('hidden')
            articleSmall.style.position = "absolute"
        }
        if (select.selectedOptions[0].dataset.choose === 'все статьи') {
            articleSmall.style.position = "static"
            articleSmall.classList.remove('hidden')
        }
    }
    for (let articleLarge of articlesLarge) {
        articleLarge.classList.remove('hidden')
        articleLarge.style.position = "static"
        if (!articleLarge.querySelector('span').textContent.includes(select.selectedOptions[0].dataset.choose)) {
            articleLarge.classList.add('hidden')
            articleLarge.style.position = "absolute"
        }
        if (select.selectedOptions[0].dataset.choose === 'все статьи') {
            articleLarge.classList.remove('hidden')
            articleLarge.style.position = "static"
        }
    }
})
//---------------Блок работы с формой "Написать мне"-----------------------

const textArea = document.querySelector('#message')
const btn = document.querySelector('.feedback-form__btn')

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





