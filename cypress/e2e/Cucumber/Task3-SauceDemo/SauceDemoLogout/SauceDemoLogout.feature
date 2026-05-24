Feature: logout from Sauce Demo Website 

Scenario: Validate that the user can logout successfully
Given user opens saucedemo and logs in 
When the user clicks on the menu button 
And the user clicks on the logout option
Then the user should be redirected to the login page

