new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com',
        finishedLink: '<a href="https://www.google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        sayHello: function () {
            this.title = 'Hello!';
            return this.title;
        },
        increment: function (num, event) {
            this.counter += num;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
            alert('Yo');
        }
    }
});

// LECTURE 15: TWO-WAY BINDING
