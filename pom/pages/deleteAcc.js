export const deleteA = class deleteAcc {

    constructor(page){
        this.page = page;
        this.deleteButtom = page.getByRole('link', { name: ' Delete Account' });
    }
    //Delete Account buttom
    async deleteC(){
        
        await this.deleteButtom.click();
    }

}