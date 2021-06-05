import '../MyComponents/NavBar.js';
import '../MyComponents/Footer.js';
import '../MyComponents/DestinationForm.js';
import '../MyComponents/TravelCards.js';

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
