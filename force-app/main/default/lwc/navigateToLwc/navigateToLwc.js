import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLwc(){
        var defination={
            componentDef:'c:quiz', //componentName
            // attributes:{
            //     recordId:'123456789' ///to recordId pass -other component js--@api recordId -html--{recordId}
            // }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
                                //  we are convert object to string
            }
        })
    }
}