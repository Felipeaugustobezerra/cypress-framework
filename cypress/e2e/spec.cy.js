import selectors from "../selectors/classHub";
describe("classHub", () => {
  it.only("Criar Aluno", () => {
    cy.visit("https://app.qawithjunior.com");
    cy.fixture("dados").then((dados) => {
      cy.get(selectors.login.inputUserName).type(dados.login.username);
      cy.get(selectors.login.inputPassword).type(dados.login.password);
    });
    cy.get(selectors.login.buttonSubmit).click();
    cy.get(selectors.home.buttonCreateStudent).click();
    const randomChars = Array.from({ length: 3 }, () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Apenas letras
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }).join("");
    const nomeAluno = "Aluno " + randomChars;
    cy.get(selectors.newStudent.inputNameStudent).type(nomeAluno);
    cy.get(selectors.newStudent.inputEmail).type(
      nomeAluno + "@qawithjunior.com"
    );
    cy.get(selectors.newStudent.inputTelefone).type("9999999999");
    cy.get(selectors.newStudent.inputLinkedin).type(
      nomeAluno + "@linkedin.com"
    );
    cy.get(selectors.newStudent.buttonCriarAluno).click();
  });
});
