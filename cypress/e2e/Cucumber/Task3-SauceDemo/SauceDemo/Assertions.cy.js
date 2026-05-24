class SauceDemoAssertions{
    ValidateSuccessLogin(){
        cy.url().should("contain", "inventory.html")
        return this;

    }  

    ValidateSuccessCheckout(){
        cy.get(".complete-header").should("contain", "Thank you for your order!")
        return this;

        cy.url().should("contain", "checkout-complete.html")
        return this;
    }

    ValidateSuccessLogout(){
        cy.url().should("contain", "saucedemo.com")
        return this;
    }

}

export default SauceDemoAssertions;
