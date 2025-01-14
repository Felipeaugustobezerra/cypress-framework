const selectors = {
  login: {
    inputUserName: 'input[id="user_name"]',
    inputPassword: 'input[data-testid="password"]',
    buttonSubmit: 'button[type="submit"]',
    divHomeTitle: 'div[data-testid="home-title"]',
  },
  home: {
    buttonCreateClass: 'a[data-testid="home-create-class-button"]',
    buttonCreateStudent: 'a[data-testid="home-create-student-button"]',
  },
  newClass: {
    inputNameClass: 'input[data-testid="class-form-name-input"]',
    inputDataInicio: 'input[data-testid="class-form-data-input"]',
    selectMentor: 'select[data-testid="class-form-tipo-mentor-select"]',
    selectTipoClass: 'select[data-testid="class-form-tipo-classe-select"]',
    buttonCriarClass: 'button[data-testid="class-form-submit-button"]',
  },
  newStudent: {
    inputNameStudent: 'input[data-testid="aluno-form-nome-input"]',
    inputEmail: 'input[data-testid="aluno-form-email-input"]',
    inputTelefone: 'input[data-testid="aluno-form-telefone-input"]',
    inputLinkedin: 'input[data-testid="aluno-form-linkedin-input"]',
    buttonCriarAluno: 'button[data-testid="aluno-form-submit-button"]',
  },
};

export default selectors;
