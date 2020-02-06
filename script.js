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
        }
    }
});

