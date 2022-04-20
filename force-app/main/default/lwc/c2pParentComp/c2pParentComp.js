import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement {
    isVisibel =false
    msg
    age
    showhandler(){
        this.isVisibel=true
    }
    closehandler(event){
        this.msg=event.detail.name
        this.age=event.detail.age
        this.isVisibel=false
    }
}