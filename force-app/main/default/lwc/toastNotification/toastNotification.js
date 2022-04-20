import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class ToastNotification extends LightningElement {

    callHandler(){
       const evtS = new ShowToastEvent({
            title:'success',
            message:'Account create ',
            variant:'success',
        })
        this.dispatchEvent(evtS)
    }
    callHandlerTwo(){
        const evtE = new ShowToastEvent({
            title:'Error',
            message:'Account creation is faild',
            variant:'error',
            url:'https://login.salesforce.com/'
        })
        this.dispatchEvent(evtE)
    }


    // you can use this method also TO redus of writing long code
    callHandlerThree(){
        this.showToast("warning","{0}password should have 15 charactors!! {1}","warning")

    }

    callHandlerfour(){
        this.showToast("Info","Summer 20 realease is available","info")

    }

    showToast(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'salesforce',{
                    url:'https://login.salesforce.com/',
                    label:'click HERE'
                }
            ],
            mode:'sticky' // default is dismissable stricky not remove automaticly
        })
        this.dispatchEvent(event)
    }
}