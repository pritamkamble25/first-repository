import { LightningElement,api } from 'lwc';

export default class P2cSliderComp extends LightningElement {
    val = 10

    handlercng(event){
        this.val=event.target.value
    }
    @api resetmethod(){
         this.val=50
     }
}