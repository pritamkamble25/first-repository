import { LightningElement, wire } from 'lwc';
import { exportCSVFile } from 'c/csvUtil';
import getAccount from '@salesforce/apex/csvGenerator.getAccounts'
export default class CsvDemo extends LightningElement {
    accountData
    accountHeaders={
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual revenue",
        Industry:"Industry",
        Phone:"Phone"
    }
    @wire(getAccount)
    accountHandler({data, error}){
        if(data){
            console.log(data)
            this.accountData = data
        }
        if(error){
            console.error(error)
        }
    }

    csvGenerator(){
        exportCSVFile(this.accountHeaders, this.accountData, "account_records")
    }
}