import { LightningElement, api } from 'lwc';
	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUTN_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class LightningRecordForme extends LightningElement {

    @api recordId
    @api objectApiName
    
    objectName = ACCOUTN_OBJECT
    fieldList =[NAME_FIELD, ANNUAL_REVENUE,TYPE_FIELD, INDUSTRY_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title:"Account create",
            message:"record ID "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
        
    }
}