describe('Check Signup', () => {
    it('click on Sign form', () => {
        cy.visit('https://app.agencyanalytics.com/signup?source=login')

        //enter values in form
        cy.get('.login-dual > :nth-child(1) > .login-input > .login-input-input').type('adfjadf')
        cy.get(':nth-child(2) > .login-input > .login-input-input').type('asdasdas')

        //enter invalid data in email the form gets accepted and user is allowed to login
        cy.get(':nth-child(4) > .login-input-input').type('dsfsdf@yopmail.com')

        cy.get(':nth-child(7) > .login-input-input').type('Test@12')

        cy.get('.login-buttons > .aui-button').click

        //user gets logged in

        cy.wait(1000)

        cy.get('h2').should('contain', 'Tell us about your Company')


      
    })
})