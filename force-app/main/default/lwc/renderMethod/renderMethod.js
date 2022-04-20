import { LightningElement } from 'lwc';
import signinpage from './signInH1.html'
import signoutpage from './signupH2.html'  //  './filename.extention' 
import renderpage from './renderMethod.html'
export default class RenderMethod extends LightningElement {
   
    selectedBtn=''

    // clickme(event){
    //     this.selectedBtn =event.target.label
    // }
    render(){
        return this.selectedBtn ==='signin' ? signinpage :
        this.selectedBtn === 'signup' ? signoutpage :
        renderpage

    }

    clickme(event){
        this.selectedBtn =event.target.label
    }

    clicku(event){
       alert(`${event.target.label} success fully`)
    }
}
