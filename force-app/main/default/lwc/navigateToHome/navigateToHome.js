import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToHome extends NavigationMixin(LightningElement) {  // know we can use navigationMixin
   
    navigatehomeHandler (){
        this[NavigationMixin.Navigate]({  //use this 
            type:'standard__namedPage',  // page reference
            attributes:{
                pageName:'home'
            }
        })
    }

    navigatechatterHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
}