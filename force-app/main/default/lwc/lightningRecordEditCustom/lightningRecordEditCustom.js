import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordEditCustom extends LightningElement {

    objectName = ACCOUNT_OBJECT
    inputValue=''

    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(event){
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')  // if more then one input use All
        const value = inputCmp.value

        if(!value.includes('Australia') && !value.includes('pk')){
            inputCmp.setCustomValidity("the account name must include 'Australia'")
        }
        else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }

    successHandler(event){
       const toastEvent= new ShowToastEvent({
            title:"Account create",
            message:"record ID "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }

    errorHandler(event){
        const toastEvent= new ShowToastEvent({
            title:"Error creating Account",
            message: event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)


    }
}