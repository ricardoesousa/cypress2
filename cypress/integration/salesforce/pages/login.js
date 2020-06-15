export class Login {

	fillUser(value){
		cy.get('#username').type(value)
	}

	fillPass(value){
		cy.get('#password').type(value)
	}

	changeAtributteTarget () {
		cy.get('#login_form').invoke('attr', 'target', '_self')
	}

	clickLogin(){
		cy.get('#Login').click()	
	}

	/*
	,{
		onBeforeLoad: (win) => {
		Object.defineProperty(win, 'self', {
			get: () => {
			return window.top
			}
		})
		}
	});
	*/
}