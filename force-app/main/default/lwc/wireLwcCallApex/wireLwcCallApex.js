import { LightningElement, wire } from 'lwc';
// import getRecordsList from '@salesforce/apex/getAccountsRecords.getrecordsList'
import filterAccountTypeType from '@salesforce/apex/getAccountsRecords.filterAccountTypeType'
export default class WireLwcCallApex extends LightningElement {
    selectedType=''
    @wire(filterAccountTypeType, {type:'$selectedType'})
   filterAccounts
    

   get typeOptions(){
       return [
           {lable:"Customer - Channel", value:"Customer - channel"},
           {lable:"Customer - Direct", value:"Customer - Direct"}

       ]
   }
   changeType(event){
        this.selectedType = event.target.value
   }
} 