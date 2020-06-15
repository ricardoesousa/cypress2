
export class Home {

	getConfig(){
		return cy.get('.slds-dropdown-trigger--click.slds-no-hover > div > span')
	}
}