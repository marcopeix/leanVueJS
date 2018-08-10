new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com',
        finishedLink: '<a href="https://www.google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Marco',
        attachRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    },
    // watch: {
    //     //Run asynchronous functions
    //     console.log('Run asynchronous code');
    // },
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
