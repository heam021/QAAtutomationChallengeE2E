export const deleteA = class deleteAcc {

    constructor(page){
        this.page = page;
    }

        get deleteButtom(){
            return this.page.getByRole('link', { name: ' Delete Account' });
        }

    //Delete Account buttom
    async deleteC(){
        
        await this.deleteButtom.click();
    }

}