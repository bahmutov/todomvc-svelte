import { mount } from 'cypress-svelte-unit-test';
import CopyRight from './copy-right.svelte';

/* global cy */
describe('CopyRight', () => {
  it('should render component', () => {
    mount(CopyRight);
    cy.contains('Double-click to edit a todo');
  });
});
