import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001N0000024PNAKIA4',
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001N0000024PNAKIA4',
                objectApiName:'Account',
                actionName:'edit'
            }
        })
    }

    customObjectEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'a00N000000QZLmXIAX',
                objectApiName:'customObj__c',
                actionName:'edit'
            }
        })
    }

   
    
}