describe('Forgot passsowrd', () => {
    it('Open forgot password page', () => {
        cy.visit('https://app.agencyanalytics.com/login/forgot-password')

        //enter random value
        cy.get('.login-input-input').type('sgfiagfsui')

        cy.get('.input-margin-bottom-sm > .aui-button').click


        //success message is shown 

        cy.wait(1000)

        cy.get("div.aui-alert-content").should('have.value', 'We have received your request to reset the password')

        
        
        
    })

})

