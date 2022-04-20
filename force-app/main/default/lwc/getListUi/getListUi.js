import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import ID_FIELD from '@salesforce/schema/Contact.Id'
// import TYPE_FIELD from '@salesforce/schema/Contact.Type'
export default class GetListUi extends LightningElement {
    isVisibel =false
    contactRow={}
    contacts=[]
    pageToken=null
    nextPageToken=null
    previousPageToken=null
    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts', //listViewApiName
        pageSize:5,
        sortBy:ID_FIELD,
        pageToken:'$pageToken'
})
    handlerFunction({data, error}){
        if(data){
            console.log(data)
         
            this.contacts = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken

        }
        if(error){
            console.error(error)
        }
    }

    previousHandlePager(){
        this.pageToken = this.previousPageToken
    }

    NextHandlerPage(){
        this.pageToken = this.nextPageToken
    }

    // ----------- modal show hide

   
    popwindowHandlert(event){
        this.isVisibel=true

        
    }
    
    okHandler(){
        this.isVisibel=false
    }

}