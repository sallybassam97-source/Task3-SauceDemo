import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../SauceDemo/Shared/Actions.cy.js";
import SauceDemoActions from "../SauceDemo/Actions.cy.js";
import SauceDemoAssertions from "../SauceDemo/Assertions.cy.js";
import '../../../../support/commands.js';


const SharedAction = new SharedActions();
const SauceDemoAction = new SauceDemoActions();
const SauceDemoAssertion = new SauceDemoAssertions();

Given("open saucedemo website and login",()=>{
    SharedAction.loginToSauceDemo("standard_user")
    
})

When("choose any of the products and click on add to cart button",()=>{
    SauceDemoAction.addProductToCart()

})

When("the user goes to the cart page",()=>{
    SauceDemoAction.goToCartPage()
})

When("the user clicks on checkout button",()=>{
    SauceDemoAction.clickOnCheckoutButton()
})

When("the user fills first name, last name, and zip code",()=>{
    SauceDemoAction.fillCheckoutInformation()
})

When("the user clicks on continue button",()=>{
    SauceDemoAction.clickOnContinueButton()
})

When("the user clicks on finish button",()=>{
    SauceDemoAction.clickOnFinishButton()
})

Then("the order should be completed successfully",()=>{
    SauceDemoAssertion.ValidateSuccessCheckout()
})