import '../MyComponents/NavBar.js';
import '../MyComponents/Footer.js';
import '../MyComponents/TravelCard.js';
import '../MyComponents/PlaceIdComponent.js';

import { LitElement, html } from 'lit-element';

export class PlacesIdView extends LitElement {
  render() {
    return html`
      ${this._isLoading
        ? html`
            <nav-bar></nav-bar>
            <h3>Content is loading...</h3>
            <footer-component></footer-component>
          `
        : html`
            <nav-bar></nav-bar>
            <place-id></place-id>
            <footer-component></footer-component>
          `}
    `;
  }
}

customElements.define('places-id-view', PlacesIdView);
