class GitSignUpPage {

    get btnSignUp () {
        return $('[class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-default rounded px-2 py-1"]')
    }

    async clickBtnSignUp() {
        await this.btnSignUp.click()
    }

    get emailInput() {
        return $('#email')
    }
   async setValueEmailInput(email) {
        await this.emailInput.setValue(email)
    }
    get passwordInput() {
        return $('#password')
    }
    async setValuepasswordInput(password) {
        await this.passwordInput.setValue(password)
    }
    get usernameInput() {
        return $('#login')
    }
    async setValueUsernameInput(username) {
        await this.usernameInput.setValue(username)
    }
}

module.exports = new GitSignUpPage ()