import { expect } from "@playwright/test";

export const confirmation = class confirmationC {

    constructor(page){
        this.page = page;

    }


    get assCreaAcc() {
        return this.page.getByText('Account Created!');
    }

    get buttonContinue() {
        return this.page.getByRole('link', { name: 'Continue' });
    }

    get userAp() {
        return this.page.getByText('Logged in as Hector');
    }
    
    //Confirmation Created account Message
    async confirmationC(){
        await expect(this.assCreaAcc).toContainText('Account');
        await this.buttonContinue.click();
        await expect(this.userAp).toContainText('Logged');
    }

}