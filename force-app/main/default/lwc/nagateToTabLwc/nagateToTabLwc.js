import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NagateToTabLwc extends NavigationMixin(LightningElement) {
  
    NavigateToTAB(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'static_resource'
            }
        })
    }

    NavigateToNavigateTAB(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Navigatioin_page'
            }
        })
    }
    
}