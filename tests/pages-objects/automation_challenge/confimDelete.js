import { expect } from "@playwright/test";

export const confirmD = class confirmationDel {

    constructor(page){
        this.page = page;
    }



    get confirmClose() {
        return this.page.frameLocator('iframe[name="aswift_6"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad');
    }

    get cDelet() {
        return this.page.getByRole('link', { name: 'Continue' });
    }

    get assDelete() {
        return this.page.getByText('Account Deleted!');
    }

    //Confirmation Delete Message 
    async confirmationD(){

        await expect(this.assDelete).toContainText("Deleted");
        await this.cDelet.click();
        
    }

}