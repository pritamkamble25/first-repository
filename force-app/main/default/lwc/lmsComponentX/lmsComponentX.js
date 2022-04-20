import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe ,MessageContext, APPLICATION_SCOPE, unsubscribe, publish} from 'lightning/messageService'; 
export default class LmsComponentX extends LightningElement {
    
    // inPutvalue
    inPutvalueX
    subscription
    recivedMessage
    
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{
            this.handlermessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handlermessage(message){
        this.recivedMessage = message.lmsData.value? message.lmsData.value : "no data found"
    }

    unsubcribeHandler(){
        unsubscribe(this.subscription)
        this.subscribe=null
    }
    
    subcribeHandler(){
        // this.connectedCallback()
        this.subscribeMessage()
        // alert('Do you want to subscrip or unblock')
    }

    // --------------

    inPutHandlerX(event){
        this.inPutvalueX=event.target.value
        // this.inPutvalue=event.target.value
    }

    publishMessageX(){
        const message={
            lmsData:{
                value:this.inPutvalueX,
                // valueb:this.inPutvalue
            }
        }
        publish(this.context,SAMPLEMC,message)
    }
}