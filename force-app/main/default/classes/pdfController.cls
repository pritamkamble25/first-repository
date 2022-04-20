public with sharing class pdfController {
    @AuraEnabled    
    public static Attachment generatePDF(Id recordId, string htmlData) {
            pagereference page = page.renderAsPDF;
            page.getParameters().put('pdfText',htmlData);

            contact con = new contact(Id=recordId);
            Attachment objAttachment = new Attachment();
            objAttachment.Name='invoice.pdf';
            objAttachment.ParentId = con.Id;
            objAttachment.Body = page.getContentaspdf();
            objAttachment.IsPrivate = false;
            insert objAttachment;
            return objAttachment;
        }
}