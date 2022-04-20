import { LightningElement ,wire} from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
//     alias                     componentname    filenamewith__c
import {subscribe ,MessageContext, publish, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService'; //
export default class LmsComponentA extends LightningElement {
 
    // inPutvalueX
    inPutvalue   // locale properrty
    @wire(MessageContext)
    context
    recivedMessageA

    inPutHandler(event){
        this.inPutvalue=event.target.value
    }

    publishMessage(){
        const message={
            lmsData:{
                // valueb:this.inPutvalueX, //---------
                value:this.inPutvalue
            }
        }
        publish(this.context,SAMPLEMC,message)
    }
// ----------------------------

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handlermessage(message)}, {scope:APPLICATION_SCOPE})

    }

// recivedmessage

handlermessage(message){
    this.recivedMessageA = message.lmsData.value? message.lmsData.value : "no data found"
}

    // subscrip unscrip

    unsubcribeHandlerA(){
            unsubscribe(this.subscription)
            this.subscribe=null  
    }
    
    subcribeHandlerA(){
        // this.connectedCallback()
            this.subscribeMessage()
            // alert('Do you want to subscrip again or unblock')
    }
   
}