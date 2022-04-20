import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGameLwc extends LightningElement {
    timerRef 
    totalTime='00:00'
    isLibloaded = false
    openedCards =[]
    matchedCard=[]
    moves = 0
    showCongratulations =false

    cards=[
        { id:1, listClass:"card", type:"diamond", icon:'fa fa-diamond' },
        { id:2, listClass:"card", type:"plane", icon:'fa fa-paper-plane-o'},
        { id:3, listClass:"card", type:"anchor", icon:'fa fa-anchor'},
        { id:4, listClass:"card", type:"bicycle", icon:'fa fa-bicycle' },
        { id:5, listClass:"card", type:"bomb", icon:'fa fa-bomb'},
        { id:6, listClass:"card", type:"leaf", icon:'fa fa-leaf'},
        { id:7, listClass:"card", type:"cube", icon:'fa fa-cube'},
        { id:8, listClass:"card", type:"anchor", icon:'fa fa-anchor' },
        { id:9, listClass:"card", type:"bolt", icon:'fa fa-bolt'},
        { id:10, listClass:"card", type:"bicycle", icon:'fa fa-bicycle'},
        { id:11, listClass:"card", type:"diamond", icon:'fa fa-diamond'},
        { id:12, listClass:"card", type:"plane", icon:'fa fa-paper-plane-o'},
        { id:13, listClass:"card", type:"cube", icon:'fa fa-cube'},
        { id:14, listClass:"card", type:"bolt", icon:'fa fa-bolt'},
        { id:15, listClass:"card", type:"bomb", icon:'fa fa-bomb'},
        { id:16, listClass:"card", type:"leaf", icon:'fa fa-leaf'},
        
    ]


        get gameRating(){
            let start = this.moves >9 && this.moves<12 ? [1,2,3,4,5]:this.moves>=13 && this.moves<15? [1,2,3]:[1]
            return this.matchedCard.length === 16 ?start :[]
        }

            displayCars(event){
                let currCard = event.target
                currCard.classList.add("open","show","disabled")
                this.openedCards = this.openedCards.concat(event.target)
                const len = this.openedCards.length
                if(len === 2){
                    this.moves = this.moves+1
                    if(this.moves ===1){
                        this.timer()
                    }
                    if(this.openedCards[0].type === this.openedCards[1].type){
                        this.matchedCard = this.matchedCard.concat(this.openedCards[0],this.openedCards[1])
                        this.matched()
                    }else{
                        this.unmatched()
                    }
                }
        }


        matched(){
            this.openedCards[0].classList.add("match", "disabled")
            this.openedCards[1].classList.add("match", "disabled")
            this.openedCards[0].classList.remove("show", "open")
            this.openedCards[1].classList.remove("show", "open")
            this.openedCards=[]
            if(this.matchedCard.length === 16){
                window.clearInterval(this.timerRef)  // close the time which are running
                this.showCongratulations =true
            }

        }

        unmatched(){
            this.openedCards[0].classList.add("unmatched")
            this.openedCards[1].classList.add("unmatched")

            this.action('DISABLE')
            setTimeout(()=>{
                this.openedCards[0].classList.remove("show", "open", "unmatched")
                this.openedCards[1].classList.remove("show", "open", "unmatched")
                this.action('ENABLE')
                this.openedCards=[]
            }, 1100)
        }

        action(action){
              let cards = this.template.querySelectorAll('.card')
              Array.from(cards).forEach(item=>{
                  if(action === 'ENABLE'){
                        let isMatch = item.classList.contains('match')
                        if(!isMatch){
                            item.classList.remove('disabled')
                        }
                  }
                  if(action ==='DISABLE'){
                      item.classList.add('disabled')
                  }
              }) 
        }

                timer(){
                    let startTime = new Date()
                   this.timerRef = setInterval(()=>{
                        let diff =new Date().getTime() - startTime.getTime()
                        let d = Math.floor(diff/1000)
                        const m = Math.floor(d % 360 / 60);
                        const s = Math.floor(d % 360 % 60);
                        const mDisplay = m>0 ? m+(m===1? "minute,":" minutes, " ):""
                        const sDisplay = s>0 ? s+(s===1? "second":" seconds"):""
                        this.totalTime = mDisplay + sDisplay
                    }, 1000)
                }


                shuffle(){
                    this.showCongratulations=false
                   this.totalTime='00:00'
                   this.isLibloaded = false
                   this.openedCards =[]
                   this.matchedCard=[]
                   this.moves = 0
                   window.clearInterval(this.timerRef)
                   let elem = this.template.querySelectorAll('.card')
                   Array.from(elem).forEach(item=>{ //from
                       item.classList.remove("show", "open", "match", "disabled")
                   })

                    // shuffling and swaping ligic
                   let array =[...this.cards] 
                let counter = array.length
                while(counter>0){
                    let index = Math.floor(Math.random()*counter)
                    counter--

                    let tem = array[counter]
                    array[counter] = array[index]
                    array[index] = tem
                }   
                this.cards = [...array]

                }


    renderedCallback(){
        if(this.isLibloaded){
            return
        } else{
        loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
            console.log("loaded successfully")
        }).catch(error=>{
            console.error(error)
        })
        this.isLibloaded = true
        }
        
    }
}