import { Login } from "./../../pages/login.js"
import { Home } from "./../../pages/home.js"

const login = new Login()
const home = new Home()

describe('Create a new account', function(){

	beforeEach(() => {
		//Arrange
		cy.visit('/')
 	})

	it('Create simple account.', function(){
		//Act
		login.fillUser('qualidadegft@gft.com')
		login.fillPass('GFT202005')
		login.changeAtributteTarget() //Se este atributo não for alterado haverá um redirecionamento de página que fará com que o Cypress se perca nos testes.
		login.clickLogin()

		//Assert
		home.getConfig().should('have.text', 'Configuração')
		
		/*
    	for (var i = 0; i < 30; i++) {
    		cy.wait(3000)
			Cypress.on('window:before:load', (win) => {
		      Object.defineProperty(win, 'self', {
		        get: () => {
		          return window.top
		        }
		      })
		    })	
		    
		}
		*/

		//cy.visit('https://na172.lightning.force.com/lightning/setup/SetupOneHome/home')


	})

})