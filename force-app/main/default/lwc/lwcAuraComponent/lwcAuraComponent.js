import { LightningElement,api } from 'lwc';

export default class LwcAuraComponent extends LightningElement {
    @api namepk

    callaura(){
        const myevent = new CustomEvent('sendmsg',{
            detail:{
                "masssge":"message from  LWC js",
                "age":"12"
            }
        })
        this.dispatchEvent(myevent)
    }
}