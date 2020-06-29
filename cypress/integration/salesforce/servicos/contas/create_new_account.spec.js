/// <reference types="cypress" />

const nome = 'teste24';

describe('APP SALESFORCE', function(){

	beforeEach(() => {
		//Arrange
		cy.request('https://login.salesforce.com/?un=ricardoesousa@hotmail.com&pw=@flavio1979&startURL=%2Fhome%27');
		cy.visit('https://na111.lightning.force.com/lightning/setup/SetupOneHome/home');
	  });

	
	it('Login', function(){
		//Act
		cy.xpath('//span[contains(@class, "uiImage")]').click();

		//Assert
		cy.xpath('//h1/a[@class="profile-link-label"]').invoke('text')
		.then((text)=>{
			expect(text).to.equal('Ricardo Sousa'); 
		});
	});

	it('Create an account', function(){

		//Act
		cy.xpath('//span[text()="Iniciador de aplicativos"]').click({force: true});
		cy.xpath('//p[text()="Serviço"]').click({force: true});
		cy.xpath('//span[text()="Contas"]').click({force: true});
		cy.xpath('//div[@title="Novo(a)"]').click({force: true});
		cy.xpath('//input[@data-interactive-lib-uid="6"]').type(nome);
		cy.xpath('//span[text()="Salvar e criar"]').click({force: true});

		//Assert
		cy.xpath('//*[contains(@class, "toastMessage")]').invoke('text')
     	.then((text)=>{
       	expect(text).to.equal('Conta "'+nome+'" foi criado(a).'); 
		});
	});

	it('Delete an account', function(){

		//Act
		cy.xpath('//span[text()="Iniciador de aplicativos"]').click({force: true});
		cy.xpath('//p[text()="Serviço"]').click({force: true});
		cy.xpath('//span[text()="Contas"]').click({force: true});
		cy.xpath('//a[@title="'+nome+'"]').click({force: true});
		cy.xpath('//span[text()="Mostrar mais 7 ações"]').click({force: true});
		cy.xpath('//div[text()="Excluir"]').click({force: true});
		cy.xpath('//span[text()="Excluir"]').click({force: true});

		//Assert
		cy.xpath('//*[contains(@class, "toastMessage")]').invoke('text')
     	.then((text)=>{
		   expect(text).to.be.oneOf(['Conta "'+nome+'" foi excluído. Desfazer','Account "'+nome+'" foi excluído. Desfazer']); 
		});
	});
});