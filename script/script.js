class ModalSlider {
    constructor() {
        window.onload = () => {
            Fancybox.bind("[data-fancybox]", {
                btnTpl: {
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev" title="{{PREV}}">' +
                        '<i class="fa fa-angle-left 1231" aria-hidden="true"></i>' +
                        "</button>",

                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right next" title="{{NEXT}}">' +
                        '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
                        "</button>"

                }
            });
        }
    }
}

new ModalSlider();
