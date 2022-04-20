public with sharing class popupApexCls {

        @AuraEnabled(cacheable=true)
        public static List<customObj__c> popupApexCls(){
            List<customObj__c> cusobjList = [Select Id, First_Name__c, Last_Name__c,picklistval__c, Email__c  From customObj__c limit 10];
            try{
                return cusobjList;
             }
             catch(Exception e){
                throw new AuraHandledException(e.getMessage());
             }
       
        }
    
}
