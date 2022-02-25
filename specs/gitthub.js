const gitMainPage = require('../pageobjects/git.main.page.js')
const assert = require('assert')
const gitSignUpPage = require('../pageobjects/git.signup.page.js')
const gitSignupPage = require('../pageobjects/git.signup.page.js')
const gitLoginPage = require('../pageobjects/git.login.page.js')
const gitPasswordResetPage = require('../pageobjects/git.password.reset.page.js')
const gitPricingPage = require('../pageobjects/git.pricing.page.js')
const gitTopicsPage = require('../pageobjects/git.topics.page.js')
const gitEnterprisePage = require('../pageobjects/git.enterprise.page.js')
const gitAboutPage = require('../pageobjects/git.about.page.js')



describe('www.github.com', async () => {

    xit('demonstrates sign up with random email adress', async () => {
        await browser.url('https://github.com/')
        
        gitMainPage.emailInput.addValue('fheiufhie@gmail.com')
        await browser.pause(2000)

        gitMainPage.clickBtnSubmit()
        await browser.pause(2000)

        const title = await browser.getTitle()
        assert.strictEqual(title, 'Join GitHub · GitHub')
    })

    xit('demonstrates sign up with random credentials', async () => {
        await browser.url('https://github.com/')

        gitSignUpPage.clickBtnSignUp()

        await browser.waitUntil(() => {
            return $('#email').isDisplayed();
        })

        gitSignUpPage.emailInput.addValue('kisjdfei@hhh.com')
        await browser.pause(2000)

        const continueButton = await $('[data-optimizely-event="click.signup_continue.email"]')
        await continueButton.click()

        await browser.pause(2000)

        gitSignupPage.passwordInput.addValue('ewfefefevfdscp3456')
        await browser.pause(2000)
        const continueTwoButton = await $('[data-optimizely-event="click.signup_continue.password"]')
        await continueTwoButton.click()
        await browser.pause(2000)

        gitSignupPage.usernameInput.addValue('userr1789')
        await browser.pause(2000)
        const continueThreeButton = await $('[data-optimizely-event="click.signup_continue.username"]')
        await continueThreeButton.click()
        await browser.pause(2000)

        const inputY = await $('#opt_in')
        inputY.addValue('y')
        await browser.pause(4000)
        const continueFourButton = await $('[data-optimizely-event="click.signup_continue.opt-in"]')
        continueFourButton.click()
        await browser.pause(2000)

        const title = await $('[class="text-mono text-bold signup-text-prompt mt-4"]').getText()
        assert.strictEqual(title, 'Verify your account')
        await browser.pause(2000)
    })

    xit('demonstrates sign in with valid credentials', async () => {
        await browser.url('https://github.com/')   

        gitMainPage.clickBtnSignIn()
        await browser.pause(2000)

        gitLoginPage.usernameInput.addValue('testuser22500')
        gitLoginPage.passwordInput.addValue('PhdkmcYY579')
        gitLoginPage.clickBtnSignIn()
        await browser.pause(2000)

        const title = await $('[class="d-flex flex-justify-between mb-1"]').getText()
        assert.strictEqual(title, 'Learn Git and GitHub without any code!')
        await browser.pause(2000)
    })
    xit('demonstrates forgot password', async () => {
        await browser.url('https://github.com/')  
        gitMainPage.clickBtnSignIn()
        await browser.pause(2000)
    
        gitLoginPage.clickBtnForgotPassword()
        await browser.pause(2000)

        gitPasswordResetPage.emailInput.addValue('testuser22500')
        await browser.pause(2000)
        gitPasswordResetPage.clickBtnVerify()
        await browser.pause(2000)
    })
    xit('demonstrates mouse hover over function', async () => {
        await browser.url('https://github.com/')  
        
        gitMainPage.navBarWhyGit.moveTo()
        await browser.pause(4000)
        gitMainPage.navBarWhyGitSponsors.isDisplayed()

    })
    xit('demonstrates buying free plan', async () => {
        await browser.url('https://github.com/')  
        await browser.pause(1000)

        gitMainPage.navBarPricing.click()
        await browser.pause(2000)

        gitMainPage.clickNavBarPricingPlan()
        await browser.pause(2000)

        await gitPricingPage.btnJoinForFree.scrollIntoView()
        await browser.pause(2000)

        gitPricingPage.clickBtnJoinForFree()
        await browser.pause(2000)

        gitPricingPage.setValueInputUsername('tfjfnxcar6668')
        await browser.pause(2000)
        gitPricingPage.setValueInputEmail('ddggtte5445@gmail.com')
        await browser.pause(2000)
        gitPricingPage.setValueInputPassword('PhdkmcYY579')
        await browser.pause(2000)

        gitPricingPage.clickCheckboxPreferences()
        await browser.pause(2000)
        gitPricingPage.clickBtnVerify()
        await browser.pause(2000)
    })
    xit('demonstrates Topics isDisplayed', async () => {
        await browser.url('https://github.com/')  

        gitMainPage.navBarExplore.click()
        await browser.pause(2000)

        gitMainPage.clickNavBarExploreGitHub()
        await browser.pause(2000)

        gitTopicsPage.clickBtnTopics()
        await browser.pause(2000)

        gitTopicsPage.isDisplayesLabelTopics()
        await browser.pause(2000)
    })

    xit('demonstrates actions with search input', async () => {
        await browser.url('https://github.com/')  

        gitMainPage.clickSearchInput()
        await browser.pause(2000)
        gitMainPage.searchInput.addValue('WebdriverIO')
        await browser.pause(2000)
        gitMainPage.clickBtnSearch()
        await browser.pause(2000)

        const typeScript = await $('[href="/search?l=TypeScript&q=WebdriverIO&type=Repositories"]')
        typeScript.click()
        await browser.pause(2000)

        const searchResultOne = await $('[href="/webdriverio/webdriverio"]')
        searchResultOne.click()
        await browser.pause(2000)

        const title = await browser.getTitle()
        console.log(title)
        await browser.pause(2000)
    })
    
    xit('demonstrates pick a trial actions', async () => {
        await browser.url('https://github.com/enterprise')  
    
        gitEnterprisePage.clickButtonStartFreeTrial()
        await browser.pause(2000)

        gitEnterprisePage.clickLabelEnterpriseCloud()
        await browser.pause(2000)

        gitEnterprisePage.setValueInputUsername('tfjfnxcar6668')
        await browser.pause(2000)
        gitEnterprisePage.setValueInputEmail('ddggtte5445@gmail.com')
        await browser.pause(2000)
        gitEnterprisePage.setValueInputPassword('PhdkmcYY579')
        await browser.pause(2000)

        gitEnterprisePage.clickCheckboxPreferences()
        await browser.pause(2000)
        gitEnterprisePage.clickBtnVerify()
        await browser.pause(2000)
        
        await browser.back()
        await browser.pause(2000)

        gitEnterprisePage.clickLabelEnterpriseServer()
        await browser.pause(2000)

        gitEnterprisePage.inputName.addValue('Test Name')
        await browser.pause(2000)

        gitEnterprisePage.inputCompany.addValue('Test Company')
        await browser.pause(2000)

        gitEnterprisePage.inputWorkEmail.addValue('testemail@test.com')

        gitEnterprisePage.clickRadioInstallationType()
        await browser.pause(2000)

        gitEnterprisePage.inputQuestions.scrollIntoView()
        await browser.pause(2000)

        gitEnterprisePage.clickRadioQuestions()
        await browser.pause(2000)

        await browser.waitUntil(() => {
            return $('#questions-list').isDisplayed();
        })

        gitEnterprisePage.inputQuestions.addValue('How many test questions can I ask?')
        await browser.pause(2000)

        gitEnterprisePage.clickCheckboxTerms()
        await browser.pause(2000)

        gitEnterprisePage.clickBtnVerify()
        await browser.pause(2000)

        gitEnterprisePage.clickCheckboxEmails()
        await browser.pause(2000)
    
    })
    xit('demonstrates console print career opportunities', async () => {
        await browser.url('https://github.com')  

        gitMainPage.scrollToFooter()
        await browser.pause(2000)

        gitMainPage.clickBtnCareers()
        await browser.pause(2000)

        gitAboutPage.clickBtnOpenPositions()
        await browser.pause(2000)

        console.log(await gitAboutPage.labelBusinessSystems.getText())
        console.log(await gitAboutPage.labelDesign.getText())
        console.log(await gitAboutPage.labelEngineering.getText())
        console.log(await gitAboutPage.labelFinance.getText())
        console.log(await gitAboutPage.labelHumanResources.getText())
        console.log(await gitAboutPage.labelLegal.getText())
        console.log(await gitAboutPage.labelMarketing.getText())
        console.log(await gitAboutPage.labelOperations.getText())
        console.log(await gitAboutPage.labelProduct.getText())
        console.log(await gitAboutPage.labelSales.getText())
        console.log(await gitAboutPage.labelSecurity.getText())
        console.log(await gitAboutPage.labelSupport.getText())

    })
})    