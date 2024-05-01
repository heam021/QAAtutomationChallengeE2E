import { expect } from "@playwright/test";

export const singPage = class signInPom{


    constructor(page){
        this.page=page
        this.buttomHome = page.getByRole('link', { name: ' Home' });
        this.assSign = page.getByRole('heading', { name: 'New User Signup!' });
        this.assHome = page.getByRole('heading', { name: 'Features Items' });
        this.buttonSignLog = page.getByRole('link', { name: ' Signup / Login' });
        this.nameSign = page.getByPlaceholder('Name');
        this.emailSign = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.buttomSign =  page.getByRole('button', { name: 'Signup' });
        
    }

    //Visit Page
    async goToSingIn(){
        await this.page.goto('https://automationexercise.com')
    }
    //Sign Infortaion
    async signIn(nameSign,emailSign){

        await this.buttomHome.click();
        await expect(this.assHome).toContainText('Features');// validate home
        await this.buttonSignLog.click();
        await expect(this.assSign).toContainText('New');// validate signIn
        await this.nameSign.fill(nameSign);
        await this.emailSign.fill(emailSign);
        await this.buttomSign.click();
        
        

    } 
    

}