require('./bootstrap');

console.log("hello")

window.Echo.channel('laravel_database_sayHello')
    .listen('Hello', (e) => {
        console.log(e);
    });


window.Echo.channel('sayHello')
    .listen('test', (e) => {
        console.log(e);
    });
