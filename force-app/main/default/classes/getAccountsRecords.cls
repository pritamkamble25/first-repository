public with sharing class getAccountsRecords {
    @AuraEnabled(cacheable=true)
    public static List<Account> getrecordsList() {
        return [select Id, Name, Type, Industry from Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(string type){
        return [SELECT Id, Name, Type from Account where Type=:type LIMIT 5];
    }
}
