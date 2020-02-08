
new Vue({
    el: "#app",
    data: {
        name: 'Vue!',
        number: 100,
        isOK: true,
        string: 'My name'
    },
    methods: {
        changeName: function () {
            this.name = event.target.value
        },
        sayHello: function () {
            return 'I am function'
        },
        changeText: function (e) {

            if (e.target.dataset.status == 1) {
                this.isOK = true;
            } else {
                this.isOK = false;
            }

        }
    }
});

