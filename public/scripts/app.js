const toggleBtns = document.querySelectorAll('.toggle-theme')
const submenuOpenBtn = document.querySelector('.submenu-open-btn')
const submenuMobileElem = document.querySelector('.submenu')
const navOpenIcon = document.querySelector('.nav-icon')
const navbarMenu = document.querySelector('.nav')
const navCloseIcon = document.querySelector('.close-nav')
const overlay = document.querySelector('.overlay')
const cartCloseBtn = document.querySelector('.cart-close-btn')
const shoppingCartBtn = document.querySelector('.shopping-cart-btn')
const cartBox = document.querySelector('.cart-box')

const changeTheme = ()=>{
    if(localStorage.theme === "dark"){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
};

const CloseMobilenav = ()=>{
    navbarMenu.classList.add('-right-64')
    navbarMenu.classList.remove('right-0')
    overlay.classList.remove('overlay--active')
}

const closeShoppingBox = ()=> {
    cartBox.classList.add('-left-64')
    cartBox.classList.remove('left-0')
    overlay.classList.remove('overlay--active')
}

submenuOpenBtn.addEventListener('click', (e) => {

    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenuMobileElem.classList.toggle('submenu--open')
    submenuOpenBtn.classList.toggle('rotate-90')
});

navOpenIcon.addEventListener('click', ()=> {
    navbarMenu.classList.remove('-right-64')
    navbarMenu.classList.add('right-0')
    overlay.classList.add('overlay--active')
});

navCloseIcon.addEventListener('click', CloseMobilenav);

overlay.addEventListener('click', ()=> {
    CloseMobilenav()
    closeShoppingBox()
});
cartCloseBtn.addEventListener('click', closeShoppingBox);
shoppingCartBtn.addEventListener('click', ()=> {
    cartBox.classList.remove('-left-64')
    cartBox.classList.add('left-0')
    overlay.classList.add('overlay--active')
})

toggleBtns.forEach(btn => {
    btn.addEventListener('click', changeTheme)
});

