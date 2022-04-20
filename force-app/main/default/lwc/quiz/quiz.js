import { LightningElement} from 'lwc';

export default class Quiz extends LightningElement {
   

    userNames=["john", "snth","nik","kkk"]
    fetchHandler(){
        const elem = this.template.querySelector('h1')
        elem.style.border="1px solid red";
        console.log(elem.innerText)
    
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).array.forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title",item.innerText)         
        });

        const childElem = this.querySelector('.child')
        childElem.innerHTML =' <p>Hey i m a child element</p>'
    }

    
    
}