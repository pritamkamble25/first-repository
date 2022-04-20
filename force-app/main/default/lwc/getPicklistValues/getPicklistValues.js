import { LightningElement, wire} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPR_FIELD from '@salesforce/schema/Account.Type'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValues extends LightningElement {
    selectedType='';
    selectedIndustry = '';
    industryOptions=[]
    typeOptions=[]

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, {fieldApiName:INDUSTRY_FIELD, recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    industryPicklist({data, error}){
        if(data){
            console.log(data)
           this.industryOptions =[...this.generatePicklist(data)]  //it will pass the data
        }
        if(error){
            console.error(error)
        }
    }
    generatePicklist(data){    /// it will recieve the data
        return data.values.map(item=>({ label: item.label , value: item.value})) //it will recieve the data which pass in IF condition and  once the data come we have to generat formate and wheneevr we have to generat something it means we have to transform the data and whenere we have to transform the data we have to use a map
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    // -------second picklist-------

    @wire(getPicklistValues, {fieldApiName:TYPR_FIELD, recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    typePicklist({data, error}){
        if(data){
            console.log(data)
           this.typeOptions =[...this.generatePicklist(data)]  //it will pass the data to generatepicklist
        }
        if(error){
            console.error(error)
        }
    }

    handletypeChange(event) {
        this.selectedType = event.detail.value;
    }
}