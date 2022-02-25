class GitPricingPage {

    get btnJoinForFree () {
        return $('[data-hydro-click-hmac="f84af0b6515dfb189c81bab4844e2c40245571713649fee515ce1449aa4d4cea"]')
    }
    async clickBtnJoinForFree() {
        await this.btnJoinForFree.click()
    }
    get inputUsername() {
        return $('#user_login')
    }
    async setValueInputUsername(username) {
        await this.inputUsername.addValue(username)
    }
    get inputEmail() {
        return $('#user_email')
    }
    async setValueInputEmail(email) {
        await this.inputEmail.addValue(email)
    }
    get inputPassword() {
        return $('#user_password')
    }
    async setValueInputPassword(password) {
        await this.inputPassword.addValue(password)
    }
    get checkboxPreferences() {
        return $('#all_emails')
    }
    async clickCheckboxPreferences() {
        await this.checkboxPreferences.click()
    }
    get btnVerify() {
        return $('#home_children_button')
    }
    async clickBtnVerify() {
        await this.btnVerify.click()
    }
}

module.exports = new GitPricingPage()