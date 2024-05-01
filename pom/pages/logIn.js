import { expect } from "@playwright/test";

export const logIn = class loginAcc {

    constructor(page){
        this.page = page;
        this.emailLogIn = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordLogIn = page.getByPlaceholder('Password');
        this.logInButtom = page.getByRole('button', { name: 'Login' });
        this.AssLogInCo = page.getByText('Logged in as Hector');


    }
    //LogIn paramethers
    async loginC(emailLogIn,passwordLogIn){
        await this.emailLogIn.fill(emailLogIn);
        await this.passwordLogIn.fill(passwordLogIn);
        await this.logInButtom.click();
        await expect(this.AssLogInCo).toContainText('Logged');
        
    }

}