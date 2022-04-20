import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class MultiChoice extends NavigationMixin(LightningElement) {
   
   selected={} // for storing answers
     correctAnswers = 0
     isSubmitted = false
     
     
    myQuestions=[
        {
            id:"Questions1",
            question:"Salesforce Scratch Org is?",
            answers:{
                a:"Sandbox Org",
                b:"Production Org",
                c:"Disposable Org"
            },
            correctAnswer:"c"
        },
        {
            id:"Questions2",
            question:"How you write Expression in LWC HTML?",
            answers:{
                a:'if:true="{propertyName}"',
                b:"if:true={propertyName}",
                c:"if:true={!propertyName}"
            },
            correctAnswer:"b"
        },
        {
            id:"Questions3",
            question:"Mandatory minimum number of components in LWC ?",
            answers:{
                a:"1",
                b:"2",
                c:"3"
            },
            correctAnswer:"c"
        },
        {
            id:"Questions4",
            question:"What’s the annotation used to invoke an Apex method imperatively from LWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled",
                c:"@isTest"
            },
            correctAnswer:"b"
        },
        {
            id:"Questions5",
            question:"What’s the annotation used to wire an Apex method to a property or function inLWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled(cacheable=true)",
                c:"@isTest"
            },
            correctAnswer:"b"
        },
        {
            id:"Questions6",
            question:"Can we have a css file in the LWC resource bundle?",
            answers:{
                a:"NO",
                b:"YES",
               
            },
            correctAnswer:"b"
        },
        {
            id:"Questions7",
            question:"What are the maximum no of components that we can include in an LWC?",
            answers:{
                a:"25",
                b:"100",
                c:"No limit"
               
            },
            correctAnswer:"c"
        },
        {
            id:"Questions8",
            question:"for styling css what we have to avoid",
            answers:{
                a:"ID",
                b:"Class",
                c:"p-Tag"
               
            },
            correctAnswer:"a"
        }
        
    ]

     get allNotselected(){
         //  Object's O all ways capital
        return !(Object.keys(this.selected).length === this.myQuestions.length)
     }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
    }

    changeHandler(event){
        console.log("name", event.target.name)
         console.log("value", event.target.value)
         const {name, value} = event.target
        //  const name = event.targer.name
        //  const value = event.targer.value
        this.selected={...this.selected, [name]:value}
        // this.selected={"Question1" : "a"}
    }
   
    submitHandler(event){
         event.preventDefault()
        // //this.selected = {"Question1":a,"Question2":"b","Question3":"a"}
         let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswer", this.correctAnswers)
    }

    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.okHandler()
    }

    okHandler(){
         this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'quizz_app'          // navigate
            }
        })

        // or do this

        this.isSubmitted=false
    }
       

    
}