class GotLogInPage {

    get usernameInput() {
        return $('#login_field')
    }
    async setUsernameInput (username) {
        await this.usernameInput.setValue(username)
    }

    get passwordInput() {
        return $('#password')
    }
    async setPasswordInput (password) {
        await this.passwordInput.setValue(password)
    }

    get btnSignIn() {
        return $('[class="btn btn-primary btn-block js-sign-in-button"]')
    }
    async clickBtnSignIn() {
        await this.btnSignIn.click()
    }

    get btnForgotPassword () {
        return $('[href="/password_reset"]')
    }
    async clickBtnForgotPassword() {
        await this.btnForgotPassword.click()
    }
}

module.exports = new GotLogInPage()