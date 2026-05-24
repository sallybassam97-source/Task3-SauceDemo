import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../SauceDemo/Shared/Actions.cy.js";
import SauceDemoActions from "../SauceDemo/Actions.cy.js";
import SauceDemoAssertions from "../SauceDemo/Assertions.cy.js";
import '../../../../support/commands.js';

const SharedAction = new SharedActions();
const SauceDemoAction = new SauceDemoActions();
const SauceDemoAssertion = new SauceDemoAssertions();


Given("open saucedemo website",()=>{
    SharedAction.openSauceDemoWebsite()
})

When("the user types {string} in username field",(username)=>{
    SauceDemoAction.typeUsername(username)

})

When("the user types password in password field",()=>{
    SauceDemoAction.typePassword()
})

When("click on login button",()=>{
    SauceDemoAction.clickOnLoginButton()

})

Then("the user should be logged in successfully",()=>{
    SauceDemoAssertion.ValidateSuccessLogin()

})