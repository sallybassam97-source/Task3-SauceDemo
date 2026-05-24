import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../SauceDemo/Shared/Actions.cy.js";
import SauceDemoActions from "../SauceDemo/Actions.cy.js";
import SauceDemoAssertions from "../SauceDemo/Assertions.cy.js";
import '../../../../support/commands.js';


const SharedAction = new SharedActions();
const SauceDemoAction = new SauceDemoActions();
const SauceDemoAssertion = new SauceDemoAssertions();

Given("user opens saucedemo and logs in",()=>{
    SharedAction.loginToSauceDemo("standard_user")
})

When("the user clicks on the menu button",()=>{
    SauceDemoAction.clickOnMenuButton()
})

When("the user clicks on the logout option",()=>{
    SauceDemoAction.clickOnLogoutButton()
})

Then("the user should be redirected to the login page",()=>{
    SauceDemoAssertion.ValidateSuccessLogout()
})