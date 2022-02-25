class GitPasswordResetPage {

    get emailInput() {
        return $('#email_field')
    }
    async setEmailInput (value) {
        await this.emailInput.addValue(value)
    }
    get btnVerify() {
        return $('[href="#"]')
    } 
    async clickBtnVerify() {
        await this.btnVerify.click()
    }
}

module.exports = new GitPasswordResetPage()