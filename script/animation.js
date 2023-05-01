class Animation {
    static appearanceFrom(element, container = document.querySelector('body')) {
        this.elements = Array.from(container.querySelectorAll('[data-animation]'));
        console.log(this.elements);
        this.container = container;
        if (this.elements) {
            this.container.style.overflowX = 'hidden'
            Animation.iterator(this.elements, (item) => {
                item.style.transform = `translateX(${Animation.determinePosition(item, 150)}%)`;
            })
        }
        window.onload = () => {
            Animation.iterator(this.elements, (item) => {
                console.log(item.style.transform)
                setTimeout(() => {
                    item.style.cssText = `
                    transform:translateX(${item.style.transform ?item.style.transform : 'translateX(0%)'});
                    transition:transform .8s ease-out;
                `
                }, (Number(item.dataset.type) + 1) * 200)
            })
        }
    }

    static determinePosition(element, params) {
        let value = params;
        if (window.innerWidth / 2 > element.getBoundingClientRect().x) {
            value = -params
        }
        return value;
    }


    static iterator(array, fun) {
        for (const item of this.elements) {
            fun(item);
        }
    }
}

Animation.appearanceFrom();
