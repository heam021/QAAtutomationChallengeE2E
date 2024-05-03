import {test, expect} from '@playwright/test';
import { singPage } from './pages-objects/automation_challenge/singIn';
import { accountPage } from './pages-objects/automation_challenge/accountInfo';
import { confirmation } from './pages-objects/automation_challenge/confirmCreated';
import { logOut } from './pages-objects/automation_challenge/logout';
import { logIn } from './pages-objects/automation_challenge/logIn';
import { deleteA } from './pages-objects/automation_challenge/deleteAcc';
import { confirmD } from './pages-objects/automation_challenge/confimDelete';
import { generateRandomEmail } from './helper/ramdom_number';
import { PageBasic } from './Page';




test('test automation challenge e2e', async ({page})=>{

    //Visit url.
    const visitUrl = new PageBasic(page);
    await visitUrl.goToSingIn();

    //ramdomFunctionEmail
    const randomEmail = generateRandomEmail();

    const sign = new singPage(page);
    await sign.signIn('Hector',randomEmail);

    //Create Account
    const create = new accountPage(page);
    await create.genderRadCheck();
    await create.passAsign('test123')
    await create.birthDaySelect();
    await create.checkboxSelect();
    await create.personalAdressInfo('Hector','Amaya','Ravn');
    await create.adressInformation('House','street');
    await create.countrySelect('LA','San Francisco','91100')
    await create.mobileAcc('7777777');
    await create.confirmationAccount();
    const confir = new confirmation(page);
    await confir.confirmationC();


    //logOut Account
    const logO = new logOut(page);
    await logO.logoutC();

    //logIn Account
    const logI = new logIn(page);
    await logI.loginC(randomEmail,'test123');

    //delete Account
    const dele = new deleteA(page);
    await dele.deleteC();
    const conDel = new confirmD(page);
    await conDel.confirmationD();
})