import { LightningElement,api } from 'lwc';

export default class SetterGetterB extends LightningElement {
    userdetails
    
    @api
     get sg(){
        return this.userdetails
    }
    set sg(data){  //1st set data
        let newage = data.age/2
        this.userdetails = {...data, age:newage, "location":"nagpuri" }
                              //newage overwrite age
    }
}