new Vue({

    el: '#app',
    data: {
        counter: 0,
        title: 'Счетчик'
    },
    methods: {
        upCounter: function () {
            this.counter++;
        },
        onHover: function (e) {
            e.target.style.color = "green"
        },
        rizeCounter: function (num, str, event) {
            this.counter += num;
            this.title = str

            if (num === 5) {
                //blue
                event.target.style.color = "blue"
            } else if (num === 10) {
                //red
                event.target.style.color = "red"
            }
        }
    },
});