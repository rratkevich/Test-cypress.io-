// Implement the following testing scenarios for weather.com using Cypress framework
// 1.Сheck the ability to switch temperature units (F<->C).
//     2.Switch language to Deutch and check the presence of "Das Wetter in..." in the search bar.
//     3.Any scenario at your discretion.

// 1.Сheck the ability to switch temperature units (F<->C).
describe('1. Сheck the ability to switch temperature units', function() {
    beforeEach(function () {
        cy.visit('https://weather.com/');
    })
    it('Presses the °C and switches to °F', function() {
        cy.contains('°C').click({force:true});
        cy.contains('°F').click({force:true});
        cy.contains('°F');
    })
})

//     2.Switch language to Deutch and check the presence of "Das Wetter in..." in the search bar.
describe('2. Switch language to Deutch and check the presence of "Das Wetter in..." in the search bar', function() {
    beforeEach(function () {
        cy.visit('https://weather.com/');
    })
    it('Switches language to Deutch', function() {
        // click on 'BY' button
        cy.get('.styles__menuButton__3KeBe > :nth-child(2)').click({force:true});
        // click on 'Европа' button
        cy.get('[style=""] > :nth-child(2) > :nth-child(1) > :nth-child(4) > :nth-child(1)').click({force:true});
        click on Deutch language and change it to 'DE'
        cy.contains('Deutch').click({force:true});
        // navigate to search bar and check
        cy.get('.theme__inputElement__4bZUj').contains('Das Wetter in...');
    })
})

//     3.Any scenario at your discretion.
describe('3. My own scenario', function() {
    beforeEach(function () {
        cy.visit('https://weather.com/');
    })
    it('Searches for weather in the selected city', () => {
        cy.get('.theme__inputElement__4bZUj').type('Minsk{enter}', {force:true});
        cy.contains('Search results');
        cy.contains('Sokolyanka, HM, BELARUS').click({force:true});
    });
});






// describe('Testing select options', function() {
//
//     // Change this function if other criteria are required.
//     const isVisible = (elem) => !!(
//         elem.offsetWidth ||
//         elem.offsetHeight ||
//         elem.getClientRects().length
//     )
//
//     it('checks select option is visible', function() {
//
//         const doc = cy.visit('http://localhost:4200')
//         cy.get("mdc-select").contains("installation type").click()
//
//         //cy.get('mdc-select-item').contains("ITEM1").should('be.visible') //this will fail
//         cy.get('mdc-select-item').contains("ITEM1").then (item1 => {
//             expect(isVisible(item1[0])).to.be.true
//         });
//     });
//
//     it('checks select option is not visible', function() {
//
//         const doc = cy.visit('http://localhost:4200')
//         cy.get("mdc-select").contains("installation type").click()
//
//         cy.document().then(function(document) {
//
//             const item1 = document.querySelectorAll('mdc-select-item')[0]
//             item1.style.display = 'none'
//
//             cy.get('mdc-select-item').contains("ITEM1").then (item => {
//                 expect(isVisible(item[0])).to.be.false
//             })
//         })
//     });
//
//     it('checks select option is clickable', function() {
//
//         const doc = cy.visit('http://localhost:4200')
//         cy.get("mdc-select").contains("installation type").click()
//
//         //cy.get('mdc-select-item').contains("ITEM1").click()    // this will fail
//         cy.get('mdc-select-item').contains("ITEM1").then (item1 => {
//
//             cy.get('mdc-select-item').contains("ITEM2").then (item2 => {
//                 expect(isVisible(item2[0])).to.be.true  //visible when list is first dropped
//             });
//
//             item1.click();
//             cy.wait(500)
//
//             cy.get('mdc-select-item').contains("ITEM2").then (item2 => {
//                 expect(isVisible(item2[0])).to.be.false  // not visible after item1 selected
//             });
//         });
//
//     })
