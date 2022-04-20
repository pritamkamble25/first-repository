import { LightningElement, track } from 'lwc';

export default class CssInLine extends LightningElement {
    @track changeStyle = false;
    get className(){
      //if changeStle is true, getter will return class1 else class2
        return this.changeStyle ? 'class1': 'class2';
                    //booleanVal   //true       false
    }
    handleChange(event){
        this.changeStyle = event.target.checked;
    }

    // renderedCallback(){
    //     const style = document.createElement('style')
    //     style.innerText = `c-css-in-line .slds-button{
    //         background: pink;
          
    //         color: black;
    //     }`

    //     this.template.querySelector('lightning-button').appendChild(style)
    // }

   
}