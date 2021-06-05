import '../MyComponents/NavBar.js';
import '../MyComponents/Footer.js';
import '../MyComponents/TravelCards.js';

import { LitElement, html } from 'lit-element';

export class PlacesView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Places';
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      <travel-cards></travel-cards>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('places-view', PlacesView);
