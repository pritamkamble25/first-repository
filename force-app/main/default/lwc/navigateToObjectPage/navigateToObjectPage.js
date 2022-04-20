import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils' //  module provide 2 function encodeDefaultFieldValues and ecodeDefaultFieldValues
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    newrecordHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account', //any standard obje Api name
                actionName:'new'
            }
        })
    }

    newrecordwithdefaultValues(){ // we have to import 
       const defaultvalue = encodeDefaultFieldValues({
            FirstName:'pritam',
            LastName:'Hero',
            Phone:1234567,
            LeadSource:'web'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact', 
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultvalue
            }
        })
    }

    ListViewNavigate(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account', //any standard obje Api name
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    NavigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}