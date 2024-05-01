import { expect } from "@playwright/test";

export const accountPage = class accountInfoPom{

    constructor(page){
        this.page = page;
        this.assAcc= page.getByText('Enter Account Information');
        this.genderRad = page.getByLabel('Mr.');
        this.passwordSing = page.getByLabel('Password');
        this.birthD = page.locator("#days");
        this.birthM = page.locator("#months");
        this.birthY = page.locator("#years");
        this.checkNews = page.getByLabel('Sign up for our newsletter!');
        this.checkOffer = page.getByLabel('Receive special offers from');
        this.nameInfo = page.getByLabel('First name *');
        this.lastNameInfo = page.getByLabel('Last name *');
        this.company = page.getByLabel('Company',{exact: true});
        this.adress = page.getByLabel('Address * (Street address, P.');
        this.adress2 = page.getByLabel('Address 2');
        this.country = page.getByLabel('Country *');
        this.state = page.getByLabel('State *');
        this.city = page.getByLabel('City *');
        this.zipCode = page.locator('#zipcode');
        this.mobile = page.getByLabel('Mobile Number *');
        this.createButtom = page.getByRole('button', { name: 'Create Account' });


    }


    //Proporties Account Information
    async createAcc(passwordSing,nameInfo,lastNameInfo,company,adress,adress2,state,city,zipCode,mobile){
        await expect(this.assAcc).toContainText('Enter');
        await this.genderRad.check();
        await this.passwordSing.fill(passwordSing);
        await this.birthD.selectOption('21');
        await this.birthM.selectOption('10');
        await this.birthY.selectOption('1991');
        await this.checkNews.check();
        await this.checkOffer.check();
        await this.nameInfo.fill(nameInfo);
        await this.lastNameInfo.fill(lastNameInfo);
        await this.company.fill(company);
        await this.adress.fill(adress);
        await this.adress2.fill(adress2);
        await this.country.selectOption('United States');
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipCode.fill(zipCode);
        await this.mobile.fill(mobile);
        await this.createButtom.click();




    }

}