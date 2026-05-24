class SauceDemoActions {
    typeUsername(username){
        cy.get("#user-name").type(username)
        return this;
    }

    typePassword(){
        cy.get("#password").type("secret_sauce")
        return this;
    }

    clickOnLoginButton(){
        cy.get("#login-button").click()
        return this;
    }

    addProductToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        return this;
    }

    goToCartPage(){
        cy.get(".shopping_cart_link").click()
        return this;
    }

    clickOnCheckoutButton(){
        cy.get("#checkout").click()
        return this;
    }

    fillCheckoutInformation(){
        cy.get("#first-name").type("Sally")
        cy.get("#last-name").type("Shqeir")
        cy.get("#postal-code").type("12345")
        return this;
    }

    clickOnContinueButton(){
        cy.get("#continue").click()
        return this;
    }

    clickOnFinishButton(){
        cy.get("#finish").click()
        return this;
    }

    clickOnMenuButton(){
        cy.get("#react-burger-menu-btn").click()
        return this;
    }

    clickOnLogoutButton(){
        cy.get("#logout_sidebar_link").click()
        return this;
    }

    

}

export default SauceDemoActions;
