class Ordinary {
    constructor(selector) {
        this.buttons = Array.from(document.querySelectorAll(selector));
        if (this.buttons) {
            this.changeDay();
        }
    }

    changeDay() {
        this.day = this.getWeekDay(new Date());
        this.selectDay = this.buttons.filter((dayTarget) => dayTarget.dataset.targetDay === this.day);
        this.selectDay[0].classList.add('day__active');
    }

    getWeekDay(date) {
        let days = ['', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        return days[date.getDay()];
    }

}

new Ordinary('[data-target-day]');
