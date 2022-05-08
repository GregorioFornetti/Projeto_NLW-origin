
var menu_expanded = false
var main_header
var btn_open
var btn_close
var mobile_menu
var inicio_section
var desktop_nav_list
var nav_links_list


function closeMenuMobile() {
    menu_expanded = false
        
    btn_open.style.display = 'inline'
    btn_close.style.display = 'none'

    document.body.classList.remove('menu-expanded')

    mobile_menu.classList.add('mobile-menu-collapsed')
    mobile_menu.classList.remove('mobile-menu-expanded')

    main_header.classList.remove('nav-on-scroll')
    changeNavColorOnScroll()
}

function openMenuMobile() {
    menu_expanded = true
        
    btn_open.style.display = 'none'
    btn_close.style.display = 'inline'

    document.body.classList.add('menu-expanded')

    mobile_menu.classList.remove('mobile-menu-start')
    mobile_menu.classList.remove('mobile-menu-collapsed')
    mobile_menu.classList.add('mobile-menu-expanded')

    main_header.classList.add('nav-on-scroll')
}

function changeNavColorOnScroll() {
    if (scrollY > 0 || menu_expanded) {
        main_header.classList.add('nav-on-scroll')
    } else {
        main_header.classList.remove('nav-on-scroll')
    }
}

function activeSectionButtonOnScroll() {
    for (objeto_nav of nav_links_list) {
        objeto_nav.button.classList.remove('active')
    }
    for (objeto_nav of nav_links_list) {
        let rect = objeto_nav.section.getBoundingClientRect()
        let meio = rect.top + ((rect.bottom - rect.top) / 2)
        if (window.innerHeight / 1.5 >= meio) {
            objeto_nav.button.classList.add('active')
            break
        }
    }
}

function showBackToTopBtnOnScroll() {
    let btn_backtotop = document.getElementById('backtotop-btn')
    if (scrollY > 500 && !menu_expanded) {
        btn_backtotop.classList.add('show-backtotop-btn')
    } else {
        btn_backtotop.classList.remove('show-backtotop-btn')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main_header = document.getElementById('main-header')
    btn_open = document.getElementById('open-menu-btn')
    btn_close = document.getElementById('close-menu-btn')
    mobile_menu = document.getElementById('mobile-menu')
    desktop_nav_list = document.getElementById('desktop-nav-list')

    document.addEventListener('scroll', () => {
        changeNavColorOnScroll()
        showBackToTopBtnOnScroll()
        activeSectionButtonOnScroll()
    })

    btn_open.addEventListener('click', openMenuMobile)

    btn_close.addEventListener('click', closeMenuMobile)
    mobile_menu.querySelector('.btn-inicio').addEventListener('click', closeMenuMobile)
    mobile_menu.querySelector('.btn-sobre').addEventListener('click', closeMenuMobile)
    mobile_menu.querySelector('.btn-servicos').addEventListener('click', closeMenuMobile)
    mobile_menu.querySelector('.btn-depoimentos').addEventListener('click', closeMenuMobile)

    ScrollReveal({
        origin: 'right',
        distance: '30px',
        duration: 700
    }).reveal(`
        .card,
        #div-numeros
    `)

    nav_links_list = [
        {
            'section': document.getElementById('inicio-section'),
            'button': desktop_nav_list.querySelector('.btn-inicio')
        },
        {
            'section': document.getElementById('servicos-section'),
            'button': desktop_nav_list.querySelector('.btn-servicos')
        },
        {
            'section': document.getElementById('sobre-section'),
            'button': desktop_nav_list.querySelector('.btn-sobre')
        }
    ].reverse()
})
