import { LightningElement } from 'lwc';

export default class SubChild extends LightningElement {
    constructor(){
        super()
        console.log("i m a sub child but im also a constructor")
    }
    connectedCallback(){
        console.log("i m a sub child but im also a connectedcallback")
    }
    renderedCallback(){
        console.log("im a sub child but im also a rendered call bacl")
    }
    
    name
    changehd(event){
        this.name= event.target.value
    }
}