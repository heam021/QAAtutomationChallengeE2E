import { expect } from "@playwright/test";

export const accountPage = class accountInfoPom{

    constructor(page){
        this.page = page;
        
    }

        get assAcc(){
            return this.page.getByText('Enter Account Information');
        }

        get genderRad(){
            return this.page.getByLabel('Mr.');
        } 

        get passwordSing() {
            return this.page.getByLabel('Password');
        }
    
        get birthD() {
            return this.page.locator("#days");
        }
    
        get birthM() {
            return this.page.locator("#months");
        }
    
        get birthY() {
            return this.page.locator("#years");
        }
    
        get checkNews() {
            return this.page.getByLabel('Sign up for our newsletter!');
        }
    
        get checkOffer() {
            return this.page.getByLabel('Receive special offers from');
        }
    
        get nameInfo() {
            return this.page.getByLabel('First name *');
        }
    
        get lastNameInfo() {
            return this.page.getByLabel('Last name *');
        }
    
        get company() {
            return this.page.getByLabel('Company', { exact: true });
        }
    
        get adress() {
            return this.page.getByLabel('Address * (Street address, P.');
        }
    
        get adress2() {
            return this.page.getByLabel('Address 2');
        }
    
        get country() {
            return this.page.getByLabel('Country *');
        }
    
        get state() {
            return this.page.getByLabel('State *');
        }
    
        get city() {
            return this.page.getByLabel('City *');
        }
    
        get zipCode() {
            return this.page.locator('#zipcode');
        }
    
        get mobile() {
            return this.page.getByLabel('Mobile Number *');
        }
    
        get createButtom() {
            return this.page.getByRole('button', { name: 'Create Account' });
        }
    
    


    //Proporties Account Information

    async genderRadCheck(){
        await expect(this.assAcc).toContainText('Enter');
        await this.genderRad.check();

    }

    async passAsign(passwordSing){
        await this.passwordSing.fill(passwordSing);
    }  

    async birthDaySelect(birthD,birthM,birthY){
        await this.birthD.selectOption('21');
        await this.birthM.selectOption('10');
        await this.birthY.selectOption('1991');
    }

    async checkboxSelect(checkNews,checkOffer){
        await this.checkNews.check();
        await this.checkOffer.check();
    }

    async personalAdressInfo(nameInfo,lastNameInfo,company){
        await this.nameInfo.fill(nameInfo);
        await this.lastNameInfo.fill(lastNameInfo);
        await this.company.fill(company);
    }

    async adressInformation(adress,adress2){
        
        await this.adress.fill(adress);
        await this.adress2.fill(adress2);
        
       
        
    }

    async countrySelect(state,city,zipCode){
        await this.country.selectOption('United States');
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipCode.fill(zipCode);
    }

    async mobileAcc(mobile){
        await this.mobile.fill(mobile);
    }

    async confirmationAccount(){
        await this.createButtom.click();
    }


}