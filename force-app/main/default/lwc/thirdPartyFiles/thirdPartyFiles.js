import { LightningElement } from 'lwc';
import thirdpartyfiless from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'  //give any alias 
import {loadScript, loadStyle} from 'lightning/platformResourceLoader' //loadScript and loadStyle is a function
export default class ThirdPartyFiles extends LightningElement {

    currentdate = ''
    randumty=''
    islibLoaded = false

    renderedCallback(){ // this method call again and again so we use if else to handle it
        if(this.islibLoaded){
                    // 2nd tym it is true and nothing will happend
            return
        }else{   // 1st tym it will load and 
            Promise.all([   // this use for if you want to call/ loading multiple files ex- css as well as js
                  loadScript(this, thirdpartyfiless+'/moment/moment.min.js'),//, moment.min is a name 
                  loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{
                // success
                this.setDateOnMyScreenBcpanya()
                
                this.randumtym()
             })
            this.islibLoaded = true   // make it true
        }
        
    }



    randumtym(){
        this.randumty = moment().format('LTS');
    }

    setDateOnMyScreenBcpanya(){
       this.currentdate = moment().format('LLLL')
    }
}