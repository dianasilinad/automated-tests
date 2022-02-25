class GitMainPage {

    get emailInput() {
        return $('[id="user_email"]')
    }
    async setEmailInput (value) {
        await this.emailInput.addValue(value)
    }
    get btnSubmit() {
        return $('[class="btn-mktg width-full width-sm-auto btn-signup-mktg"]')
    }

    async clickBtnSubmit() {
       await this.btnSubmit.click()
    }

    get btnSignUp () {
        return $('[class="btn-mktg mr-2 mb-2 width-full width-sm-auto btn-signup-mktg"]')
    }

    async clickBtnSignUp() {
        await this.btnSignUp.click()
    }

    get btnSignIn() {
        return $('[href="/login"]')
    }   
    async clickBtnSignIn() {
        await this.btnSignIn.click()
    }
    // Nav Bar Why Git?
    get navBarWhyGit () {
        return $('[class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]')
    }
    async moveToNavBarWhyGit() {
        await this.navPricing.moveToElement()
    }
    get navBarWhyGitSponsors () {
        return $('[data-hydro-click-hmac="88e87ea49982aedef0e86a95be30c8c1f3010865e59312719eb1eb3630d10b27"]')
    }
    async isDisplayedSponsors() {
        await this.navBarWhyGitSponsors.isDisplayed()
    }

    // Nav Bar Pricing

    get navBarPricing() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary')
    }  
    async moveToBtnPricing() {
        await this.navBarPricing.moveToElement()
    }
    get navBarPricingPlan() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div/ul/li[1]/a')
    } 
    async clickNavBarPricingPlan() {
        await this.navBarPricingPlan.click()
    }

    // Nav Bar Explore

    get navBarExplore() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/summary')
    } 
    async moveToNavBarExplore() {
        await this.navBarExplore.moveToElement()
    }
    get navBarExploreGitHub() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div/ul/li[1]/a')
    } 
    async clickNavBarExploreGitHub() {
        await this.navBarExploreGitHub.click()
    }
 
    //Search Bar

    get searchInput () {
        return $('[data-test-selector="nav-search-input"]')
    }
    async clickSearchInput() {
        await this.searchInput.click()
    }
    async addValueSearchInput() {
        await this.searchInput.setValue()
    }
    get btnSearch () {
        return $('[class="js-jump-to-badge-search-text-global"]')
    }
    async clickBtnSearch() {
        await this.btnSearch.click()
    }

    get pageFooter () {
        return $('[class="footer pt-6 position-relative"]')
    }
    async scrollToFooter() {
        await this.pageFooter.scrollIntoView()
    }
    get btnCareers () {
        return $('[href="/about/careers"]')
    }
    async clickBtnCareers() {
        await this.btnCareers.click()
    }

    
}

module.exports = new GitMainPage()