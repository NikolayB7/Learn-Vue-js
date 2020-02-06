var inp = document.querySelector('input[name="answer"]');



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
        changeText: function () {
            for (i = 0; i < inp.length; i++) {

            }
            console.log(inp.dataset.status);

            if (inp.dataset.status.value === '1') {
                console.log('1');
            } else {
                console.log('0');
            }

        }
    }
});

