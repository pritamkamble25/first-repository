import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NevigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    // @api recordId
    NavigateToRelatedObj(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                // recordId:this.recordId,
                recordId:'001N0000024PNAKIA4',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}