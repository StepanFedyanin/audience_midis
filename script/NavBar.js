class NavBar {
    selector = {
        nav: '[data-navbar]',
        container: '[data-navbar-container]',
        list: '[data-navbar-list]'
    }

    constructor(toggle) {
        this.btn = toggle;
        this.navbar = document.querySelector(this.selector.nav);
        this.container = document.querySelector(this.selector.container);
        this.navlist = document.querySelector(this.selector.list);
        if (this.btn && this.navbar && this.container) {
            this.bindEvent();
        }
    }

    switchNavBar() {
        this.navbar.classList.toggle('navbar__active');
        this.fixedScroll();
    }

    bindEvent() {
        this.btn.addEventListener('click', () => this.switchNavBar());
        this.navlist.addEventListener('click', (e) => e.stopPropagation());
        this.container.addEventListener('click', () => this.navbar.classList.contains('navbar__active') ? this.switchNavBar() : null);
    }

    fixedScroll() {
        const body = document.querySelector('body');
        body.classList.toggle('fixed__scroll')
    }
}

const btnNavBar = document.querySelector('#navbar-toggler');
const navbar = new NavBar(btnNavBar);
