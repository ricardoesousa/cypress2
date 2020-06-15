import { Menu } from "./pages/menu";

describe('My first test', function(){
	it('does not do much', function(){
		//Arrange
			var menu = new Menu(cy)
			cy.visit('http://agapito-server.herokuapp.com/')
		//Act
			menu.clicarUsuario()
		//Assert
			cy.get('#titulo').should('have.text', 'Listing Users')
	})
})