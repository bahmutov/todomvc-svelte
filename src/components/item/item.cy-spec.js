import { mount } from 'cypress-svelte-unit-test';
import Item from './item.svelte';

describe('Item', () => {
  const styles = {
    cssFile: 'node_modules/todomvc-app-css/index.css',
    html: `
      <section class="todoapp">
        <section class="main">
          <ul class="todo-list">
            <div id="here"></div>
          </ul>
        </section>
      </section>
    `
  };
  it('should display todo item', () => {
    const todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false };

    mount(Item, { props: { todo } }, styles);
    cy.contains(todo.name);
  });

  it('should mark todo item as completed', () => {
    const todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: true };

    mount(Item, { props: { todo } }, styles);
    cy.get('[data-testid=todo-item]').should('have.class', 'completed');
  });

  it('should notify about delete button', () => {
    const todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false };

    mount(
      Item,
      {
        props: { todo },
        callbacks: {
          remove: cy.stub().as('remove')
        }
      },
      styles
    );

    cy.get('[data-testid=todo-remove]').click({ force: true });
    cy.get('@remove')
      .should('be.calledOnce')
      .its('firstCall.args.0.detail')
      .should('equal', todo.id);
  });
});
