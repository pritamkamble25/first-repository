import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name' //to import the reference THE benifite the useing this aprotch
import EMAIL_FIELD from '@salesforce/schema/User.Email' //if someone change the fields name in salesforce org
const fields=[NAME_FIELD, EMAIL_FIELD] //in java scrip if your key and value name are same then you dont need to difine again and again
export default class WireUserDetail extends LightningElement {

    userId = Id
    //005N000000Ah5bRIAR //

// @wire(adapter, {adapterConfig})
// propertyOrfunction

userDetail    //undifine
                                        // ['user.Name','user.email'] dont use this
@wire(getRecord, {recordId:'$userId', fields:fields}) // never reference hardcoded fields name always import the reference
userDetailHandler({data, error} ){  //you can directly use data error 
//    let data = response.data
//    let error = response.error
//if data is available then perform this action
    if(data){
        this.userDetail = data.fields
    }
    //otherwire this action error
    if(error){
        console.error(error)  //print the error
    }
} 


// use function method 1st if its working fine then use property method

@wire(getRecord, {recordId:'$userId', fields}) //fields:fields dont need to difine
userDetailProperty
}