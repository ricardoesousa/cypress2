export class UserCreate {

	constructor(pCy){
		this.cy = pCy
	}

	informarLogin(value){
		this.cy.get('#user_login').type(value)
	}

	informarNome(value){
		this.cy.get('#user_full_name').type(value)
	}

	infromarEmail(value){
		this.cy.get('#user_email').type(value)
	}

	idade(value){
		this.cy.get('#user_age').type(value)
	}

	clicarSalvar(){
		this.cy.get('#btn-save').click()
	}
}