import { expect } from "@playwright/test";

export const PageBasic = class PageB{

    constructor(page){
        this.page=page
    }

    //Visit Page
    async goToSingIn(){
        await this.page.goto('https://automationexercise.com');
    }
}