import { LightningElement, wire, api, track } from 'lwc';
import { getRecordNotifyChange } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getDealTermDetails from '@salesforce/apex/MLSE_DealTermsEditor.RetriveDealTerms';
import updateSchedules from '@salesforce/apex/MLSE_DealTermsEditor.UpdatePaymentSchedules';

export default class InlineEditingTable extends LightningElement {

    draftValues = [];
    @track wiredResults;
    @track multiple = true;
    @track deal_terms;    
    @track error;
    @track toastVisible;      
    @api recordId;    
    @track columns = [ 
         { label: 'Invoice #', fieldName: 'Name', type: 'text' },         
         { label: 'Invoice Date', fieldName: 'Payment_Due_Date__c', type: 'date-local', editable: true  },
         { label: 'Payment Received Date', fieldName: 'Payment_Received_Date__c', type: 'date-local', editable: true  },      
         { label: 'Amount Pending', fieldName: 'Amount_Pending__c', type: 'currency', editable: true },
         { label: 'Amount Received', fieldName: 'Amount_Received__c', type: 'currency', editable: true  }   
      ];

    @wire(getDealTermDetails, { contract: '$recordId' })
    wiredDealTerms(results) {        
        this.wiredResults = results;
            if (results.data) {
                this.deal_terms = results.data;
                this.error = undefined;                
            } else if (results.error) {
                this.records = undefined;
                this.error = 'Unknown error';
            }           
    }  

    async handleSave(event) {        
        const updatedFields = event.detail.draftValues;                
        // Prepare the record IDs for getRecordNotifyChange()
        const notifyChangeIds = updatedFields.map(row => { return { "recordId": row.Id } });
       // console.log('notifyChangeIds' + JSON.stringify(notifyChangeIds));
        await updateSchedules({data: updatedFields})        
        .then(result => {
       //     console.log(JSON.stringify("Apex update result: "+ result));      
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Records updated',
                    variant: 'success'
                })
            );
    
        // Refresh LDS cache and wires
        getRecordNotifyChange(notifyChangeIds);
        //call refresh to do refreshapex        
        this.refresh();                        
       })            
       .catch(error => {
           console.log(error);
        this.error = error;
        });

    }  

    refresh() {         
        refreshApex(this.wiredResults)
            .then(() => {
                this.draftValues = [];                
               // console.log('refresh apex complete');
            }).catch();
        }
}