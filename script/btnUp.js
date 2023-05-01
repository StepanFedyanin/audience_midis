class BtnUp {
    selector = '[data-scroll]';

    constructor() {
        this.Btn = document.querySelector(this.selector);
        window.addEventListener('scroll', () => this.scrollEvent());
        this.btnEvent();
    }

    scrollEvent() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.changeBtn(true) : this.changeBtn(false);
    }

    changeBtn(target) {
        this.Btn.classList.toggle('active', target);
    }

    btnEvent() {
        this.Btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
}

new BtnUp();
