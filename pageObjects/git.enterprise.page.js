class GitEnterprisePage {

    get buttonStartFreeTrial() {
        return $('[data-hydro-click-hmac="b9a60338ff59d1813fb4031e8be39add425b4fa441ee152f2dd31b77e03e3358"]')
    }
    async clickButtonStartFreeTrial() {
       await this.buttonStartFreeTrial.click()
    }
    get labelEnterpriseCloud() {
        return $('//h2[text()="Enterprise Cloud"]')
    }
    async clickLabelEnterpriseCloud() {
        await this.labelEnterpriseCloud.click()
    }
    get labelEnterpriseServer() {
        return $('//h2[text()="Enterprise Server"]')
    }
    async clickLabelEnterpriseServer() {
        await this.labelEnterpriseServer.click()
    }

    // Inputs Enterprise Cloud

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

    // Inputs Enterprise Server

    get inputName() {
        return $('#contact_request_name')
    }
    async setValueInputName(name) {
        await this.inputName.addValue(name)
    }
    get inputCompany() {
        return $('#contact_request_organization_name')
    }
    async setValueInputCompany(company) {
        await this.inputCompany.addValue(company)
    }
    get inputWorkEmail() {
        return $('#contact_request_email')
    }
    async setValueInputWorkEmail(email) {
        await this.inputWorkEmail.addValue(email)
    }
    get radioInstallationType() {
        return $('[for="contact_request_instance_type_gcp"]')
    }
    async clickRadioInstallationType() {
        await this.radioInstallationType.click()
    }
    get radioQuestions() {
        return $('[for="questions_yes"]')
    }
    async clickRadioQuestions() {
        await this.radioQuestions.click()
    }
    get inputQuestions() {
        return $('#questions-list')
    }
    async setValueInputQuestions() {
        await this.inputQuestions.addValue()
    }


    get checkboxTerms() {
        return $('#contact_request_agreed_to_terms')
    }
    async clickCheckboxTerms() {
        await this.checkboxTerms.click()
    }
    get checkboxEmails() {
        return $('#contact_request_marketing_email_opt_in')
    }
    async clickCheckboxEmails() {
        await this.checkboxEmails.click()
    }
}

module.exports = new GitEnterprisePage()