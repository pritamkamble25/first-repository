import { LightningElement ,wire,api} from 'lwc';
import { getRecord , getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
// const fields=[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]
export default class GetRecord extends LightningElement {
   name
   owner
   AnnualRevenue
   @api recordId
    @wire(getRecord, {recordId:'$recordId', 
    fields:fields})
    // @wire(getRecord, {recordId:'$recordId',
    //   layoutTypes:['Full'], modes:['View']})

    accountHandler({data}){
        if(data){
            console.log(data)
            this.name = getFieldValue(data, NAME_FIELD) 
            this.owner = getFieldValue(data, OWNER_NAME_FIELD) 
            this.AnnualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD) 

           //coment // if ? displayvalue are there print displayvalue otherwise : value
            //  this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue:
            // data.fields.Name.value
            // this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:
            // data.fields.Owner.value
            // this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:
            // data.fields.AnnualRevenue.value
        }
    }
}