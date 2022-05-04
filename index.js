
var menu_expanded = false
var main_nav
var btn_open
var btn_close
var mobile_menu



function closeMenuMobile() {
    menu_expanded = false
        
    btn_open.style.display = 'inline'
    btn_close.style.display = 'none'

    document.body.classList.remove('menu-expanded')

    mobile_menu.classList.add('mobile-menu-collapsed')
    mobile_menu.classList.remove('mobile-menu-expanded')

    main_nav.classList.remove('nav-on-scroll')
}

function openMenuMobile() {
    menu_expanded = true
        
    btn_open.style.display = 'none'
    btn_close.style.display = 'inline'

    document.body.classList.add('menu-expanded')

    mobile_menu.classList.remove('mobile-menu-start')
    mobile_menu.classList.remove('mobile-menu-collapsed')
    mobile_menu.classList.add('mobile-menu-expanded')

    main_nav.classList.add('nav-on-scroll')
}

document.addEventListener('DOMContentLoaded', () => {
    main_nav = document.getElementById('main-nav')
    btn_open = document.getElementById('open-menu-btn')
    btn_close = document.getElementById('close-menu-btn')
    mobile_menu = document.getElementById('mobile-menu')

    document.addEventListener('scroll', () => {
        if (scrollY > 0 || menu_expanded) {
            main_nav.classList.add('nav-on-scroll')
        } else {
            main_nav.classList.remove('nav-on-scroll')
        }
    })

    btn_open.addEventListener('click', openMenuMobile)

    btn_close.addEventListener('click', closeMenuMobile)
    document.getElementById('btn-inicio').addEventListener('click', closeMenuMobile)
    document.getElementById('btn-sobre').addEventListener('click', closeMenuMobile)
    document.getElementById('btn-servicos').addEventListener('click', closeMenuMobile)
    document.getElementById('btn-depoimentos').addEventListener('click', closeMenuMobile)

    ScrollReveal({
        origin: 'right',
        distance: '30px',
        duration: 700
    }).reveal(`
        .card,
        #div-numeros
    `)
})
