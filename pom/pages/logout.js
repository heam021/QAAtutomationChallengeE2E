import { expect } from "@playwright/test";

export const logOut = class logoutAcc {

    constructor(page){
        this.page = page;
        this.assLogin = page.getByRole('heading', { name: 'Login to your account' });
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
        

    }
    //Logout information
    async logoutC(){

        await this.logoutButton.click();
        await expect(this.assLogin).toContainText('Login');
        
        
    }

}