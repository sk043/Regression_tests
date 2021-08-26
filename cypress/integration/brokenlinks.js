it('check all links to sites to see if they are broken or not', () => {

    cy.visit('https://agencyanalytics.com/')
    cy.get("a:not([href*='mailto:'])").each(page => {
        cy.request(page.prop('href'))
    })

    //broken links are shown in red color for error
});
