(function() {
    function sayHello() {
        console.log('hello from helloModule.js');
    }
    function retrieveData(dataId) {
        fetch('https://jsonplaceholder.typicode.com/todos/' + dataId)
        .then(response => response.json())
        .then(json => console.log(json));
    }
    // this makes the sayHello function available in the window namespace
    // so we can call window.sayHello from any LWC JS file
    window.sayHello = sayHello;
    window.retrieveData = retrieveData;
})();
