import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavogateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:"c__NavigateToLwcAura"
            },
            stae:{
                "c__id":"12345678876543"
            }
        })
        
    }
}