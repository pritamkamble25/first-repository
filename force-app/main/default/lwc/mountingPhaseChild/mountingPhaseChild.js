import { LightningElement } from 'lwc';

export default class MountingPhaseChild extends LightningElement {
    constructor(){
        super()
        console.log("child constructor call")
    }

    connectedCallback(){
        console.log("child connectedCallback call ")
    }
    
    renderedCallback(){
        console.log("child renderedCallback call")
    }

    disconnectedCallback(){
        alert("remove child")
    }
}