class GitAboutPage {
    //careers

    get btnOpenPositions () {
        return $('[href="#positions"]')
    }
    async clickBtnOpenPositions() {
        await this.btnOpenPositions.click()
    }
    // open positions
    get labelBusinessSystems() {
        return $('//*[text()="Business Systems"]')
    }
    get labelDesign() {
        return $('//*[text()="Design"]')
    }
    get labelEngineering() {
        return $('//*[text()="Engineering"]')
    }
    get labelFinance() {
        return $('//*[text()="Finance"]')
    }
    get labelHumanResources() {
        return $('//*[text()="Human Resources"]')
    }
    get labelLegal() {
        return $('//*[text()="Legal"]')
    }
    get labelMarketing() {
        return $('//*[text()="Marketing"]')
    }
    get labelOperations() {
        return $('//*[text()="Operations"]')
    }
    get labelProduct() {
        return $('//*[text()="Product"]')
    }
    get labelSales() {
        return $('//*[text()="Sales"]')
    }
    get labelSecurity() {
        return $('/html/body/div[4]/main/div[2]/div/div[5]/div[11]/div/button/h3')
    }
    get labelSupport() {
        return $('//*[text()="Support"]')
    }

}

module.exports = new GitAboutPage()