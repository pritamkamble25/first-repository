import { LightningElement , api} from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF'
import {NavigationMixin} from 'lightning/navigation'
export default class PdfGeneration extends NavigationMixin(LightningElement) {
   @api recordId

    imageUrl = 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/05/attachment_82928010-e1494006898649.jpg?auto=format&q=60&fit=max&w=930' 
    
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'123123 sunny road',
        address2:'sunnyvilla, CA 123123'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00},
    ]

    get totalAmount(){
        return this.services.reduce((total, service)=>{
            return total = total+service.amount
        }, 0)
    }

    pdfHandler(){
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
        generatePDF({ recordId:this.recordId, htmlData:content.outerHTML}).then(result=>{
            console.log("attachment Id" , result )
        
             this.recordViewMode()
            window.open(`https://techcloudcomputing147-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(error=>{
            console.error(error)
        })
    }
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }
}