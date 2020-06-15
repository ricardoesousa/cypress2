import { UserGrid } from "./pages/usergrid.js";
import { UserCreate } from "./pages/usercreate.js";
import { UserShow } from "./pages/usershow.js";
import { Menu } from "./pages/menu.js";

describe('CRUD Testing', function(){

	before(() => {

 	});

	it('Create a new user.', function(){
		//Arrange
	    	var menu = new Menu(cy)
			cy.visit('http://agapito-server.herokuapp.com/')
			menu.clicarUsuario()

			var userGrid = new UserGrid(cy)
			var userCreate = new UserCreate(cy)
			var userShow = new UserShow(cy)

			userGrid.clicarNovoUsuario()

		//Act
			userCreate.informarLogin("caminhão")
			userCreate.informarNome("João do Caminhão")
			userCreate.infromarEmail("joao@camiao.com.br")
			userCreate.idade("24")
			userCreate.clicarSalvar()

		//Assert
			userShow.getNotice().should('have.text', 'Usuário foi criado com sucesso.')
	})

	it('Show an user.', function(){
		//Arrange			
	    	var menu = new Menu(cy)
			cy.visit('http://agapito-server.herokuapp.com/')
			menu.clicarUsuario()

			var userGrid = new UserGrid(cy)
			var userCreate = new UserCreate(cy)
			var userShow = new UserShow(cy)

		//Act
			userGrid.clicarMostrar("527")

		//Assert
			userShow.getCode().should('have.text', '527')
			userShow.getLogin().should('have.text', 'bugluna')
			userShow.getFullName().should('have.text', 'Bug Luna da Silva Agapito Correa')
			userShow.getEmail().should('have.text', 'bug.luna@gmail.com')
			userShow.getAge().should('have.text', '8')
			userShow.clickBack()
	})

	it('Edit an user.', function(){
		//Arrange
	    	var menu = new Menu(cy)
			cy.visit('http://agapito-server.herokuapp.com/')
			menu.clicarUsuario()

			var userGrid = new UserGrid(cy)
			var userCreate = new UserCreate(cy)
			var userShow = new UserShow(cy)
			var code

			userGrid.clicarNovoUsuario()
			userCreate.informarLogin("qa")
			userCreate.informarNome("QA GFT")
			userCreate.infromarEmail("qa@gft.com")
			userCreate.idade("42")
			userCreate.clicarSalvar()

			code = userShow.getTextCode()
			alert(code)
			
			userShow.clickBack()			

		//Act
			userGrid.clicarEditar(code)
			userCreate.informarNome("QAs da GFT são os melhores")
			userCreate.clicarSalvar()
			userShow.clickBack()
			userGrid.clicarMostrar(code)

		//Assert
			userShow.getFullName().should('have.text', 'QAs da GFT são os melhores')
			userShow.clickBack()
	})
})