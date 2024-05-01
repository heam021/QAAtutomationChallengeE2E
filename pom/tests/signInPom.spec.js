import {test, expect} from '@playwright/test';
import { singPage } from '../pages/singIn';
import { accountPage } from '../pages/accountInfo';
import { confirmation } from '../pages/confirmCreated';
import { logOut } from '../pages/logout';
import { logIn } from '../pages/logIn';
import { deleteA } from '../pages/deleteAcc';
import { confirmD } from '../pages/confimDelete';

test('test', async ({page})=>{

    const sign = new singPage(page);
    await sign.goToSingIn();
    await sign.signIn('Hector','heam021@gmail.com');


    const create = new accountPage(page);
    await create.createAcc('test123','Hector','Amaya','Ravn','House','street','LA','San Francisco','91100','7777777');


    const confir = new confirmation(page);
    await confir.confirmationC();

    const logO = new logOut(page);
    await logO.logoutC();
    
    const logI = new logIn(page);
    await logI.loginC('heam021@gmail.com','test123');

    const dele = new deleteA(page);
    await dele.deleteC();

    const conDel = new confirmD(page);
    await conDel.confirmationD();
})