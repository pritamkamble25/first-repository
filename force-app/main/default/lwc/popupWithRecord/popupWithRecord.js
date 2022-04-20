import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/popupApexCls.popupApexCls'

import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';


const columns = [
    {
        label: 'Name',
        fieldName: 'First_Name__c',
        type: 'text',
    }, {
        label: 'Last Name',
        fieldName: 'Last_Name__c',
        type: 'phone',
        editable: true,
    }, {
        label: 'picklistval',
        fieldName: 'picklistval__c',
        type: 'text',
        editable: true,
        hideDefaultActions: true,
        actions: [
            {label: 'All', checked: true, name: 'all'},
            { label: 'value1',checked: false, name: 'value1'},  
            { label: 'value2', checked: false, name: 'value2' },]
    }, {
        label: 'Email',
        fieldName: 'Email__c',
        type: 'text',
        editable: true
    }
    
];
export default class PopupWithRecord extends LightningElement {

    columns = columns;
    @track accObj;
    fldsItemValues = [];

    @wire(getAccounts)
    cons(result) {
        this.accObj = result;
        if (result.error) {
            this.accObj = undefined;
        }
    };

    saveHandleAction(event) {
        this.fldsItemValues = event.detail.draftValues;
        const inputsItems = this.fldsItemValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });

       
        const promises = inputsItems.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Records Updated Successfully!!',
                    variant: 'success'
                })
            );
            this.fldsItemValues = [];
            return this.refresh();
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An Error Occured!!',
                    variant: 'error'
                })
            );
        }).finally(() => {
            this.fldsItemValues = [];
        });
    }

   
    async refresh() {
        await refreshApex(this.accObj);
    }


    handleHeaderAction(event){
         // Retrieves the name of the selected filter
    const actionName = event.detail.action.name;
    // Retrieves the current column definition
    // based on the selected filter
    const colDef = event.detail.columnDefinition;
    const columns = this.columns;
    const activeFilter = this.activeFilter;

    if (actionName !== activeFilter) {
        var idx = columns.indexOf(colDef);
        // Update the column definition with the updated actions data
        var actions = columns[idx].actions;
        actions.forEach((action) => {
            action.checked = action.name === actionName;
        });
        this.activeFilter = actionName;
        this.updateBooks();
        this.columns = columns;
    }
    }
    updateBooks(cmp){
        const rows = this.rawData;
        const activeFilter = this.activeFilter;
        const filteredRows = rows;
        if (activeFilter !== 'all') {
            filteredRows = rows.filter(function (row) {
                return (activeFilter === 'value1') ||
                  (activeFilter === 'value2');
            });
        }
        this.data = filteredRows;
    
    }
    
}