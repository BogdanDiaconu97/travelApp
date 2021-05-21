import '../MyComponents/navBar.js';
import '../MyComponents/footer.js';
import '../MyComponents/destinationForm.js';
import '../MyComponents/travelCards.js';

import { LitElement, html } from 'lit-element';

export class PlacesView extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <travel-cards></travel-cards>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('places-view', PlacesView);
