import { LightningElement,api } from 'lwc';

export default class P2cAlertComp extends LightningElement {
    
    @api massage 
    @api number
    @api isVisibel
    @api cardTitle
}