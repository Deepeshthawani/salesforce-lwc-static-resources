import { LightningElement } from 'lwc';
import SAY_HELLO from '@salesforce/resourceUrl/helloModule';
import { loadScript } from 'lightning/platformResourceLoader';

export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
    clickHandler() {
        console.log('hello from helloWorld.js');
        window.sayHello();
        for (let i = 1; i < 4; i++) {
            window.retrieveData(i);
        }
    }
    renderedCallback() {
        loadScript(this, SAY_HELLO)
        .then(() => console.log('Loaded sayHello'))
        .catch(error => console.log(error));
    }
}
