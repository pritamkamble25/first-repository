import { LightningElement } from 'lwc';

export default class C2pSimpleEvent extends LightningElement {
    okHandler(){
        const simpleevent = new CustomEvent('close',{
            detail:{
                name:"pritam",
                age:33
            }
        })
        this.dispatchEvent(simpleevent)
        // this.dispatchEvent(new CustomEvent('close'))
    }
}