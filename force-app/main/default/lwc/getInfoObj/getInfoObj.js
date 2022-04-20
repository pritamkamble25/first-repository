import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import CUSTOBJ_OBJECT from '@salesforce/schema/customObj__c'

export default class GetInfoObj extends LightningElement {
    dt=[]
    @wire(getObjectInfo, {objectApiName:CUSTOBJ_OBJECT})
    objectInfo
}