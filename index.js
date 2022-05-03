
var menu_expanded = false

document.addEventListener('DOMContentLoaded', () => {
    let main_nav = document.getElementById('main-nav')
    let btn_open = document.getElementById('open-menu-btn')
    let btn_close = document.getElementById('close-menu-btn')
    let mobile_menu = document.getElementById('mobile-menu')

    document.addEventListener('scroll', () => {
        if (scrollY > 0 || menu_expanded) {
            main_nav.classList.add('nav-on-scroll')
        } else {
            main_nav.classList.remove('nav-on-scroll')
        }
    })

    btn_open.addEventListener('click', () => {
        menu_expanded = true
        
        btn_open.style.display = 'none'
        btn_close.style.display = 'inline'

        document.body.classList.add('menu-expanded')

        mobile_menu.style.display = 'block'

        main_nav.classList.add('nav-on-scroll')
    })

    btn_close.addEventListener('click', () => {
        menu_expanded = false
        
        btn_open.style.display = 'inline'
        btn_close.style.display = 'none'

        document.body.classList.remove('menu-expanded')

        mobile_menu.style.display = 'none'

        main_nav.classList.remove('nav-on-scroll')
    })
})