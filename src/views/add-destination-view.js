import '../MyComponents/navBar.js';
import '../MyComponents/footer.js';
import '../MyComponents/destinationForm.js';
import '../MyComponents/travelCards.js';

import { LitElement, html } from 'lit-element';

export class AddDestinationView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Add Destination';
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      <destination-form></destination-form>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('add-destination-view', AddDestinationView);
