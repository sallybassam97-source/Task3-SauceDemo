Feature: login to saucedemo website

  Scenario Outline: validate that the user can login successfully
    Given open saucedemo website
    When the user types <username> in username field
    And the user types password in password field
    And click on login button
    Then the user should be logged in successfully

    Examples:
      | username      |
      | "standard_user" |
      | "visual_user"   |