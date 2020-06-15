export class UserGrid {

	constructor(pCy){
		this.cy = pCy
	}

	clicarNovoUsuario(){
		this.cy.get('#btn-new').click()
	}

	clicarMostrar(value){
		var id = '#btn-show_'
		this.cy.get(id.concat(value)).click()
	}

	clicarEditar(value){
		var id = '#btn-edit_'
		this.cy.get(id.concat(value)).click()
	}
}