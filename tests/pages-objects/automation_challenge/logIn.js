import { expect } from "@playwright/test";
import { generateRandomEmail } from "../../helper/ramdom_number";

export const logIn = class loginAcc {

    constructor(page){
        this.page = page;
        
    }


    get emailLogIn() {
        return this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
    }

    get passwordLogIn() {
        return this.page.getByPlaceholder('Password');
    }

    get logInButtom() {
        return this.page.getByRole('button', { name: 'Login' });
    }

    get AssLogInCo() {
        return this.page.getByText('Logged in as Hector');
    }


    //LogIn paramethers
    async loginC(emailLogIn,passwordLogIn){
        await this.emailLogIn.fill(emailLogIn);
        await this.passwordLogIn.fill(passwordLogIn);
        await this.logInButtom.click();
        await expect(this.AssLogInCo).toContainText('Logged');
        
    }

}