import { LightningElement } from 'lwc';
import visibelAllData from '@salesforce/userPermission/ViewAllData'
import customPermissions from '@salesforce/customPermission/show_details' //custom permission name :show_details
export default class CheckPermissions extends LightningElement {

        get hasPermissionavalableData(){
            return visibelAllData
        }
        get mycustompermission(){
            return customPermissions
        }
 
}

