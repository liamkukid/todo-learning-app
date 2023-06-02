/* eslint-disable no-undef */
describe('to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays layout', () => {
    cy.get('input[type=text]').should('be.visible');
    cy.contains('Save').should('be.visible');
    cy.contains('All').should('be.visible');
    cy.contains('Active').should('be.visible');
    cy.contains('Completed').should('be.visible');
    cy.contains('Remove Completed').should('be.visible');
    cy.contains('no items left').should('be.visible');
  });

  it('create new todo with submit button', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task');
    cy.get("button[type='submit']").click();
    input.clear();

    cy.contains('New Task').should('be.visible');
  });

  it('create new todo with enter', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task').type('{enter}');
    input.clear();

    cy.contains('New Task').should('be.visible');
  });

  it('add and remove todo', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task').type('{enter}');
    input.clear();

    cy.contains('New Task').should('be.visible');

    cy.get("button[data-testid='todo-remove']").click();

    cy.contains('New Task').should('not.exist');
  });

  it('add todo and set as done', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task').type('{enter}');
    input.clear();

    cy.contains('1 items left').should('be.visible');

    cy.get("input[type='checkbox']").click();

    cy.contains('no items left').should('be.visible');
    cy.get("input[type='checkbox']").should('be.checked');
    cy.contains('New Task')
      .should('be.visible')
      .should('have.css', 'text-decoration')
      .and('match', /line-through/);
  });

  it('add 3 new todos and apply filters', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task 1').type('{enter}').clear();
    input.type('New Task 2').type('{enter}').clear();
    input.type('New Task 3').type('{enter}').clear();

    cy.getAllLocalStorage().then(result => {
      const todosObj = Object.values(result)[0];
      const arrayTodos = Object.values(todosObj)[0];
      const jsonTodos = JSON.parse(arrayTodos);
      cy.get(`input[value='${jsonTodos[0].id}`).click();

      cy.contains('Active').click();
      cy.get(`input[value='${jsonTodos[0].id}`).should('not.exist');
      cy.get(`input[value='${jsonTodos[1].id}`).should('be.visible');
      cy.get(`input[value='${jsonTodos[2].id}`).should('be.visible');

      cy.contains('Completed').click();
      cy.get(`input[value='${jsonTodos[0].id}`).should('be.visible');
      cy.get(`input[value='${jsonTodos[1].id}`).should('not.exist');
      cy.get(`input[value='${jsonTodos[2].id}`).should('not.exist');

      cy.contains('All').click();
      cy.get(`input[value='${jsonTodos[0].id}`).should('be.visible');
      cy.get(`input[value='${jsonTodos[1].id}`).should('be.visible');
      cy.get(`input[value='${jsonTodos[2].id}`).should('be.visible');
    });
  });

  it('add 3 new todos and remove completed', () => {
    const input = cy.get('input[type=text]');
    input.type('New Task 1').type('{enter}').clear();
    input.type('New Task 2').type('{enter}').clear();
    input.type('New Task 3').type('{enter}').clear();

    cy.getAllLocalStorage().then(result => {
      const todosObj = Object.values(result)[0];
      const arrayTodos = Object.values(todosObj)[0];
      const jsonTodos = JSON.parse(arrayTodos);
      cy.get(`input[value='${jsonTodos[0].id}`).click();

      cy.contains('Remove Completed').click();
      cy.get(`input[value='${jsonTodos[0].id}`).should('not.exist');
      cy.get(`input[value='${jsonTodos[1].id}`).should('be.visible');
      cy.get(`input[value='${jsonTodos[2].id}`).should('be.visible');
    });
  });
});
