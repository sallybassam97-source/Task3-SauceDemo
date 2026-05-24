import {Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";
import loginActions from "../../../PageObjects/login/Actions.cy";
import loginAssertions from "../../../PageObjects/login/Assertions.cy";

//Before({tags:"@TC-2222"},()=>{
    //cy.log("Hello World") بستخدمها لما بدي استعمل البيفور قبل تاغ معين
//})

//Before({tags:"@TC-1234 or @TC-0000"},()=>{
   // cy.log("Hello World") لما بدي اكتر من تاغ مع بعض
//})

//Before({tags:"@test and @TC-1234"},()=>{
    //cy.log("Hello World") هاي بستخدمها لمايكون في تاغ مشترك بين اكتر من سيناريو بضيف معه تاغ تاني عشان يميزه
//})

const loginAc = new loginActions ();
const loginAss = new loginAssertions();

Given("The user open the website", ()=>{
    loginAc.openLoginPage()
})

When("The user types {string} in email input field",(email)=>{
    loginAc.typeEmailInEmailInputField(email)
    
})

When("The user types {string} in password input field",(password)=>{
    loginAc.typePasswordInPasswordInputField(password)

})

When("The user clicks on login button",()=>{
    loginAc.clickOnLoginButton();

})

Then("{string} should be login successfully and redirected to home page",(email)=>{
    loginAss.checkURLIsEqual().checkAccountIsContainEmail(email)
  

})