import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin(LightningElement) {

    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes:{
                url:"/apex/lmsvfPage"
            }                            // cret navigation ulr come in form of  promise
        }).then(generatedUrl=>{                 //we lisence the promise
            console.log(generatedUrl)
            window.open(generatedUrl, "_blank")
        })
    }
}