class SharedActions {
    openSauceDemoWebsite(){
        cy.visit("https://www.saucedemo.com/")
        return this;
}
    loginToSauceDemo(username){
        cy.loginToSauceDemo(username)


    }
}
export default SharedActions;