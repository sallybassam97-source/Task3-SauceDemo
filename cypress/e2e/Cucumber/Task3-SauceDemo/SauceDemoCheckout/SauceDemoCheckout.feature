Feature: checkout on SauceDemo Website

Scenario: Validate that the user can add an item to cart and checkout
    Given open saucedemo website and login 
    When choose any of the products and click on add to cart button
    And the user goes to the cart page
    And the user clicks on checkout button
    And the user fills first name, last name, and zip code
    And the user clicks on continue button
    And the user clicks on finish button
    Then the order should be completed successfully