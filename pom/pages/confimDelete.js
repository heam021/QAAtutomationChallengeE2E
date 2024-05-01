import { expect } from "@playwright/test";

export const confirmD = class confirmationDel {

    constructor(page){
        this.page = page;
        this.confirmClose = page.frameLocator('iframe[name="aswift_6"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad')
        this.cDelet = page.getByRole('link', { name: 'Continue' });
        this.assDelete = page.getByText('Account Deleted!');


    }

    //Confirmation Delete Message 
    async confirmationD(){

        await expect(this.assDelete).toContainText("Deleted");
        await this.cDelet.click();
        
    }

}