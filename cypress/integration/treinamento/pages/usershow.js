export class UserShow {

	constructor(pCy){
		this.cy = pCy
	}

	getNotice(){
		return this.cy.get('#notice')
	}

	getCode(){
		return this.cy.get('#codigo')
	}

	getTextCode(){
		//return this.cy.get('#codigo').
	}

	getLogin(){
		return this.cy.get('#login')
	}

	getFullName(){
		return this.cy.get('#full_name')
	}

	getEmail(){
		return this.cy.get('#email')
	}

	getAge(){
		return this.cy.get('#age')
	}

	clickBack(){
		this.cy.get('.ls-btn-primary-danger').click()
	}

}