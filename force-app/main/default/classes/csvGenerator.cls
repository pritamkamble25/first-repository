public with sharing class csvGenerator {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select Id, Name, Phone, AnnualRevenue, Industry from Account limit 10];
    }
}
