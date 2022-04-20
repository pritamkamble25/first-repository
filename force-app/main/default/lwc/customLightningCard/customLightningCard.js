import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    handleslot(){
        const footerelem = this.template.querySelector('footer')
        if(footerelem){
            footerelem.classList.remove('slds-hide')
        }
    }
}