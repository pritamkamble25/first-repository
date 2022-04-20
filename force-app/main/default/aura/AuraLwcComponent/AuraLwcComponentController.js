({
    handleMsg : function(component, event) {
        var msg = event.getParam('masssge')
        var myage = event.getParam('age')

        component.set("v.message", msg)
        component.set("v.ageyear", myage)
    }
})
