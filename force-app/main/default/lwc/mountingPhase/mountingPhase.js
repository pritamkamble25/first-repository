import { LightningElement } from 'lwc';

export default class MountingPhase extends LightningElement {
  
    constructor(){
        super()
        console.log("parent constructor call")
    }
    
    connectedCallback(){
        console.log("parent connectedCallback call ")
    }

    renderedCallback(){
        console.log("parent renderedCallback call")
    }
   
    isVisible = false

    clickme(){
        this.isVisible = !this.isVisible // toogle is 1st click make false to true 2nd click make true to false
    }
}