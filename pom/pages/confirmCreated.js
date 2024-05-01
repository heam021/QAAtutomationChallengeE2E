import { expect } from "@playwright/test";

export const confirmation = class confirmationC {

    constructor(page){
        this.page = page;
        this.assCreaAcc = page.getByText('Account Created!');
        this.buttonContinue = page.getByRole('link', { name: 'Continue' });
        this.userAp = page.getByText('Logged in as Hector');


    }
    //Confirmation Created account Message
    async confirmationC(){
        await expect(this.assCreaAcc).toContainText('Account');
        await this.buttonContinue.click();
        await expect(this.userAp).toContainText('Logged');
    }

}