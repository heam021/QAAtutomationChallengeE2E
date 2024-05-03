import { expect } from "@playwright/test";

export const singPage = class signInPom{


    constructor(page){
        this.page=page
        
    }
     
        get buttomHome() {
            return this.page.getByRole('link', { name: ' Home' });
        }
    
        get assSign() {
            return this.page.getByRole('heading', { name: 'New User Signup!' });
        }
    
        get assHome() {
            return this.page.getByRole('heading', { name: 'Features Items' });
        }
    
        get buttonSignLog() {
            return this.page.getByRole('link', { name: ' Signup / Login' });
        }
    
        get nameSign() {
            return this.page.getByPlaceholder('Name');
        }
    
        get emailSign() {
            return this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        }
    
        get buttomSign() {
            return this.page.getByRole('button', { name: 'Signup' });
        }
        

    //Visit Page
    //async goToSingIn(){
        //await this.page.goto('https://automationexercise.com')
    //}
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