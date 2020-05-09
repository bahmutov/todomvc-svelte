import { mount } from 'cypress-svelte-unit-test';
import CopyRight from './copy-right.svelte';

describe('CopyRight', () => {
  it('should render component', () => {
    mount(CopyRight);
    cy.contains('Double-click to edit a todo');
  });
});
