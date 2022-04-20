    import { LightningElement } from 'lwc';

    export default class Parent2child extends LightningElement {
    nonprimitivepassP2C=[
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"first card",
            description:"First card description.pk"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"second card",
            description:"second card description.pk"
        },
        {
            src: "https://www.ehowportal.com/wp-content/uploads/2014/02/Create-URL-for-an-Image.jpg",
            header:"third card",
            description:"third card description.pk"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"fourth card",
            description:"four card description.pk"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"five card",
            description:"five card description.pk"
        },
        {
            src: "https://www.ehowportal.com/wp-content/uploads/2014/02/Create-URL-for-an-Image.jpg",
            header:"six card",
            description:"six card description.pk"
        }
    ]


    percentage =10

    handler(event){
        this.percentage = event.target.value
    }
        
    methodcall(event){
                                            // call child public method 
        this.template.querySelector('c-p2c-slider-comp').resetmethod()
    }
    }