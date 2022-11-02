const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 10) {
        nav.classList.add('back')
    } else {
        nav.classList.remove('back')
    }
})

const menu_btn = document.querySelector('.menu-btn')
const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const menuShow = document.querySelector('#menu')

menu_btn.addEventListener('click', ()=> {
    openBtn.classList.toggle('hidden')
    closeBtn.classList.toggle('hidden')
    menuShow.classList.toggle('hidden')
    menuShow.classList.toggle('flex')
})