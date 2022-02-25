class GitTopicsPage {

   get labelTopics() {
       return $('//h1[text()="Topics"]')
   }
   async isDisplayesLabelTopics() {
       await this.labelTopics.isDisplayed()
   }
    get btnTopics() {
        return $('//*[@id="js-pjax-container"]/div[1]/nav/div/a[2]')
} 
    async clickBtnTopics() {
        await this.btnTopics.click()
    }   
}

module.exports = new GitTopicsPage()