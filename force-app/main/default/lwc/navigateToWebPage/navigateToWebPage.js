import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToWebPage extends NavigationMixin(LightningElement) {

    NavigateToWeb(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"http://www.google.com"
            }
        })
    }

    NavigateLoginPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"https://login.salesforce.com/"
            }
        })
    }
}