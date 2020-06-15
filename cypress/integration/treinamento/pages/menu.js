export class Menu {

	constructor(pCy){
		this.cy = pCy
	}

    clicarUsuario() {
    	this.cy.get('#users').click()
    }

    clicarDashboard() {
    }

    clicarProcessos() {
    }
}